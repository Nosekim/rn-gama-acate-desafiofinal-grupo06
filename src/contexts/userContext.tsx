import React, {
  useContext,
  useState,
  createContext,
  ReactNode,
  useEffect,
} from "react";
import { useSelector } from "react-redux";
import { gql, useQuery } from "@apollo/client";

import { IAppState, IDev } from "../types";
import { ActivityIndicator, View, Text } from "react-native";

type Props = {
  children: ReactNode | ReactNode[];
};

type ContextResult = {
  getUser: IDev | null;
};

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

const UserContext = createContext<ContextResult | null>(null);

function UserProvider({ children }: Props) {
  const { email } = useSelector((state: IAppState) => state.auth);
  const [getUser, setGetUser] = useState<IDev | null>(null);
  const { loading, error, data } = useQuery(PROFILE, {
    variables: { email: email },
  });

  useEffect(() => {
    (async () => {
      if (data) {
        setGetUser(data.devs[0]);
      }
    })();
  }, [data]);

  const contextValues = React.useMemo(() => ({ getUser }), [getUser]);

  if (loading) {
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
  }

  if (error) {
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
        <Text>Erro ao carregar dados do usuário</Text>
      </View>
    );
  }

  return (
    <UserContext.Provider value={contextValues}>
      {children}
    </UserContext.Provider>
  );
}

const useUser = () => {
  const context = useContext(UserContext);
  if (context == null) {
    throw new Error("usecontext() called outside of a MainProvider?");
  }
  return context;
};

export { UserProvider, useUser };
