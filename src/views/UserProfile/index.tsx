import { ActivityIndicator, ScrollView, View } from "react-native";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons, Ionicons, Entypo } from "@expo/vector-icons";
import { Auth } from "aws-amplify";
import { gql, useQuery } from "@apollo/client";

import styles, { DataOption, TextData } from "./style";
import { Label } from "../../global/GlobalStyles";

import { IUserState, IAuthState } from "../../types";

import ProfilePicture from "../../components/ProfilePicture";

import {
  changeIsLoggedIn,
  changeEmail,
  changePassword,
} from "../../store/modules/auth/reducer";

interface IUserData {
  title: string;
  text: string;
  screenTarget: string;
}

const PROFILE = gql`
  query GetDevsList($email: String!) {
    devs(query: { email: $email }) {
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

export default function UserProfile() {
  const { email } = useSelector((state: IAuthState) => state.auth);
  const { loading, error, data } = useQuery(PROFILE, {
    variables: { email: email },
  });

  const dispatch = useDispatch();

  const nav = useNavigation();

  const { category, userStacks, description, photoUser } = useSelector(
    (state: IUserState) => state.user
  );

  const textStacks = () => {
    let text = "";

    userStacks.forEach((item, i) => {
      text += item;

      if (i < userStacks.length - 1) text += "\n";
    });

    return text;
  };

  const userData = ({ title, text, screenTarget }: IUserData) => {
    if (text === "") text = "Não informado";

    return (
      <DataOption
        onPress={() => nav.navigate(screenTarget)}
        activeOpacity={0.3}
      >
        <View>
          <Label>{title}</Label>

          <TextData>{text}</TextData>
        </View>

        <AntDesign name="right" size={20} color="rgba(255, 255, 255, .3)" />
      </DataOption>
    );
  };

  const signOut = async () => {
    const result = await Auth.signOut();
  
    if (result) {

      dispatch(changeIsLoggedIn(false));
      dispatch(changeEmail(""));
      dispatch(changePassword(""));
    }
  };
  if (loading)
    return (
      <View
        style={{
          flex: 1,
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
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ProfilePicture image={photoUser} updatePic={true} />

      <View style={{ marginVertical: 20, width: "100%" }}>
        {userData({
          title: "Nome",
          text: data.devs[0].name,
          screenTarget: "Editar Nome",
        })}

        {userData({
          title: "E-mail",
          text: email,
          screenTarget: "Editar E-mail",
        })}

        {userData({
          title: "Senha",
          text: "*******",
          screenTarget: "Editar Senha",
        })}

        {userData({
          title: "Categoria",
          text: category,
          screenTarget: "Selecionar Categoria",
        })}

        {userData({
          title: "Tecnologias",
          text: textStacks(),
          screenTarget: "Selecionar Tecnologias",
        })}

        {userData({
          title: "Descrição",
          text: description,
          screenTarget: "Editar Descrição",
        })}

        <View style={{ marginTop: 30 }}>
          <Label>Mais opções</Label>

          <DataOption
            onPress={() => nav.navigate("Fale Conosco")}
            activeOpacity={0.3}
          >
            <View style={{ flexDirection: "row" }}>
              <Entypo name="chat" size={20} color="rgba(255,255,255,.7)" />

              <TextData>Fale Conosco</TextData>
            </View>

            <AntDesign name="right" size={20} color="rgba(255, 255, 255, .3)" />
          </DataOption>

          <DataOption
            onPress={() => nav.navigate("Termos de Uso")}
            activeOpacity={0.3}
          >
            <View style={{ flexDirection: "row" }}>
              <Ionicons
                name="document-text"
                size={20}
                color="rgba(255,255,255,.7)"
              />

              <TextData>Termos de Uso</TextData>
            </View>

            <AntDesign name="right" size={20} color="rgba(255, 255, 255, .3)" />
          </DataOption>

          <DataOption
            onPress={() => nav.navigate("Política de Privacidade")}
            activeOpacity={0.3}
          >
            <View style={{ flexDirection: "row" }}>
              <MaterialIcons
                name="privacy-tip"
                size={24}
                color="rgba(255,255,255,.7)"
              />

              <TextData>Política de Privacidade</TextData>
            </View>

            <AntDesign name="right" size={20} color="rgba(255, 255, 255, .3)" />
          </DataOption>

          <DataOption onPress={() => signOut()} activeOpacity={0.3}>
            <View style={{ flexDirection: "row" }}>
              <Entypo name="log-out" size={24} color="rgba(255,255,255,.7)" />

              <TextData>Sair</TextData>
            </View>

            <AntDesign name="right" size={20} color="rgba(255, 255, 255, .3)" />
          </DataOption>
        </View>
      </View>
    </ScrollView>
  );
}
