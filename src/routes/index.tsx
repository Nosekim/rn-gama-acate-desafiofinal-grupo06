import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";

import { IAppState } from "../types";

import AppStack from "./app.stack";
import LoginStack from "./login.stack";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#272629"
  }
}

function RootRoutes() {

  const { isLoggedIn } = useSelector((state: IAppState) => state.auth)

  return (
    <NavigationContainer theme={theme}>
      {isLoggedIn ? <AppStack /> : <LoginStack />}
    </NavigationContainer>
  );
}

export default RootRoutes;
