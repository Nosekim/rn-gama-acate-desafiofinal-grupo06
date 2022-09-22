import { View, TouchableHighlight } from 'react-native';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

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

import { stylesActionButton } from '../../global/GlobalStyles';

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

  const nav = useNavigation();

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

  return(
      <View style={{ flex: 1 }}>

        <DevsList 
          data={data.devs} 
          typeList="devs" 
        />

        <LinearGradient
            colors={['#2BC0E0', '#2382B8']}
            style={[stylesActionButton.roundedButton, { right: 12, bottom: 10 }]}
        >

            <TouchableHighlight
                style={[stylesActionButton.content, { borderRadius: 22 }]}
                activeOpacity={.7}
                onPress={() => nav.navigate("Filtrar Devs")}
                underlayColor='#2BC0E0'
            >
                
                <Ionicons 
                    name="md-filter" 
                    size={24} 
                    color="#fff" 
                />

            </TouchableHighlight>

        </LinearGradient>

      </View>
    )
}
