import { ActivityIndicator, TouchableHighlight, View } from "react-native";
import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector, useDispatch } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";
import { Picker } from "@react-native-picker/picker";
import { gql, useMutation, useQuery } from "@apollo/client";

import { IAuthState } from "../../../types";

import TopBarNav from "../../../components/TopBarNav";
import ProcessingAction from "../../../components/ProcessingAction";
import ShowError from "../../../components/ShowError";

import {
  ContainerScreen,
  TextContent,
  stylesActionButton,
  TextButton,
} from "../../../global/GlobalStyles";
import styles from "../style";

import {
  changeMsgError,
  changeStatusError,
  changeProcessingAction,
} from "../../../store/modules/info/reducer";
import { changeCategory } from "../../../store/modules/userProfile/reducer";

const CATEGORIES_QUERY = gql`
  {
    categories {
      _id
      name
    }
  }
`;

const PROFILE = gql`
  query GetDevsList($email: String!) {
    devs(query: { email: $email }) {
      _id
      id
      email
      job
    }
  }
`;
const CHANGE_CATEGORY_MUTATION = gql`
  mutation updateJob($job: String!, $email: String!) {
    updateOneDev(query: { email: $email }, set: { job: $job }) {
      id
    }
  }
`;

export default function SelectCategory() {
  const { email } = useSelector((state: IAuthState) => state.auth);
  const {
    loading: profileLoading,
    error: errorProfile,
    data: profileData,
  } = useQuery(PROFILE, {
    variables: { email: email },
  });
  const { loading, error, data } = useQuery(CATEGORIES_QUERY);
  const [updateJob, { data: mutationData }] = useMutation(
    CHANGE_CATEGORY_MUTATION
  );

  const dispatch = useDispatch();

  const [newCategory, setNewCategory] = useState("");
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (profileData) {
      console.log(profileData.devs[0].job);
      setNewCategory(profileData.devs[0].job);
      dispatch(changeProcessingAction(false));
    }
  }, [profileData]);

  const updateCategory = async () => {
    if (newCategory.length > 0) {
      dispatch(changeCategory(newCategory));
      updateJob({ variables: { job: newCategory, email: email } });
      setCompleted(true);
    } else {
      dispatch(changeMsgError("Por favor, selecione a sua categoria"));

      setTimeout(() => {
        dispatch(changeProcessingAction(false));
        dispatch(changeStatusError(true));
      }, 20);
    }
  };

  if (loading)
    return (
      <View
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );

  const contentScreen = () => {
    if (completed)
      return (
        <ContainerScreen>
          <TextContent>Sua categoria foi atualizada!</TextContent>
        </ContainerScreen>
      );

    return (
      <ContainerScreen>
        <TextContent>Qual é a sua categoria?</TextContent>

        <Picker
          style={styles.picker}
          selectedValue={newCategory}
          onValueChange={(itemValue, itemIndex) => setNewCategory(itemValue)}
        >
          <Picker.Item label="Selecione a categoria" value="" />
          {data.categories.map((item: any) => (
            <Picker.Item key={item._id} label={item.name} value={item.name} />
          ))}
        </Picker>

        <LinearGradient
          colors={["#2BC0E0", "#2382B8"]}
          style={stylesActionButton.container}
        >
          <TouchableHighlight
            style={stylesActionButton.content}
            activeOpacity={0.7}
            onPress={() => updateCategory()}
            underlayColor="#2BC0E0"
          >
            <TextButton>Atualizar</TextButton>
          </TouchableHighlight>
        </LinearGradient>
      </ContainerScreen>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ProcessingAction text="Atualizando sua categoria..." />

      <ShowError />

      <TopBarNav title="Selecionar Categoria" />

      {contentScreen()}
    </SafeAreaView>
  );
}
