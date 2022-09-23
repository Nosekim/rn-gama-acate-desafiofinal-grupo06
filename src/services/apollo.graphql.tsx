import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { useDispatch } from "react-redux";
import { ActivityIndicator, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setContext } from "@apollo/client/link/context";
import { IUserState } from "../types";
import { View, Text } from "react-native";

import DescriptionScreen from "../components/DescriptionScreen";

interface Props {
  children: React.ReactNode;
}

const httpLink = createHttpLink({
  uri: "https://westus.azure.realm.mongodb.com/api/client/v2.0/app/acate-gama-desafio-grupo-db-qfpod/graphql",
});

const authLink = (token: string) =>
  setContext(async (_, { headers }) => {
    return {
      headers: {
        ...headers,
        jwtTokenString: token,
      },
    };
  });

const client = (token: string, apolloReady: any) => {
  return new ApolloClient({
    link: authLink(token).concat(httpLink),
    cache: new InMemoryCache(),
  });
};

const ApolloGraphQL = ({ children }: Props) => {
  const dispatch = useDispatch();
  const [userToken, setUserToken] = useState<string | null>(null);
<<<<<<< HEAD
  const { token } = useSelector((state: IUserState) => state.user);
=======
  const [apolloReady, setApolloReady] = useState<boolean>(false);
  const { token } = useSelector((state: any) => state.user);
>>>>>>> eb371254c5bd5000348f4ea315e768cb9b74b404
  useEffect(() => {
    (async () => {
      try {
        if (token) {
          const localToken = await AsyncStorage.getItem("@localToken");
          if (!localToken) {
            const { access_token } = await fetch(
              "https://westus.azure.data.mongodb-api.com/app/acate-gama-desafio-grupo-db-qfpod/endpoint/authenticateUser",
              {
                method: "POST",
                body: JSON.stringify({ token: token }),
              }
            )
              .then((response) => response.json())
              .then((json) => json)
              .catch((error) => {
                throw error;
              });
            await AsyncStorage.setItem("@localToken", access_token);
            setUserToken(access_token);
          } else {
            setUserToken(localToken);
          }
        }
      } catch (error) {
        Alert.alert("Erro", "Erro ao buscar dados do usuário");
      }
    })();
  }, [token]);

  if (!userToken) {
    return (
<<<<<<< HEAD
      <View style={{ flex: 1, backgroundColor: "#272629" }}>

        <DescriptionScreen
          image={require("../assets/logo.png")}
          text="Estabelecendo a conexão com o servidor..."
        />

=======
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
>>>>>>> eb371254c5bd5000348f4ea315e768cb9b74b404
      </View>
    );
  }
  return (
    <ApolloProvider client={client(userToken, setApolloReady)}>
      {children}
    </ApolloProvider>
  );
};

export default ApolloGraphQL;
