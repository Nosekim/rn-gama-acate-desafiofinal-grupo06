import { useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import {
  listCategories,
  listStacks,
  listStates,
  listDevs,
  changeLoadingStatus,
} from "../../store/modules/devsData/reducer";
import { getDataApi } from "../../services";

import { IAppState } from "../../types";

import DevsList from "../../components/DevsList";
import { gql, useQuery } from "@apollo/client";

const DEVS_QUERY = gql`
  query {
    devs {
      _id
      id
      createdAt
      description
      email
      job
      location {
        lat
        lng
      }
      name
      phone
      photo
      stack {
        name
        xp
      }
      state
    }
  }
`;

export default function Devs() {
  const { loading, error, data } = useQuery(DEVS_QUERY);
  console.log(data);
  const dispatch = useDispatch();

  const { categories, stacks, states, devsList, loadingData } = useSelector(
    (state: IAppState) => state.devs
  );

  useEffect(() => {
    if (categories.length < 1) getDataApi("category", dispatch, listCategories);

    if (stacks.length < 1) getDataApi("stacks", dispatch, listStacks);

    if (states.length < 1) getDataApi("state", dispatch, listStates);

    if (devsList.length < 1) {
      getDataApi("devs", dispatch, listDevs);
      dispatch(changeLoadingStatus(true));
    }
  }, []);

  useEffect(() => {
    if (
      categories.length > 0 &&
      stacks.length > 0 &&
      states.length > 0 &&
      devsList.length > 0
    )
      dispatch(changeLoadingStatus(false));
  }, [categories, stacks, states, devsList]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 20 }}>Erro ao carregar os dados</Text>
      </View>
    );
  }

  return <DevsList data={devsList} apolloData={data} typeList="devs" />;
}
