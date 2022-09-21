import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  listCategories,
  listStacks,
  changeLoadingStatus,
} from "../../store/modules/devsData/reducer";
import { getDataApi } from "../../services";

import { IAppState } from "../../types";

import DevsList from "../../components/DevsList";
import DescriptionScreen from "../../components/DescriptionScreen";
import LoadingDevsList from "../../components/DevsList/loading";
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
  //console.log(data);
  const dispatch = useDispatch();

  const { categories, stacks } = useSelector(
    (state: IAppState) => state.devs
  );

  useEffect(() => {
    if (categories.length < 1) getDataApi("category", dispatch, listCategories);

    if (stacks.length < 1) getDataApi("stacks", dispatch, listStacks);
  }, []);

  useEffect(() => {
    dispatch(changeLoadingStatus(loading));
  }, [loading])

  if (loading) return <LoadingDevsList />;

  if (error) {
    return (
      <DescriptionScreen
          image={require('../../assets/ilustrations/error.png')}
          text="Erro ao carregar os dados"
      />
    );
  }

  return <DevsList data={data.devs} typeList="devs" />;
}
