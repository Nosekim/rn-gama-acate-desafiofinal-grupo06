import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";

import { IsLoggedInData } from "../store/modules/auth/reducer";

import AppStack from "./app.stack";
import LoginStack from "./login.stack";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#27272b"
  }
}

function RootRoutes() {

  const isLoggedIn = useSelector(IsLoggedInData);

  return (
    <NavigationContainer theme={theme}>
      {isLoggedIn ? <LoginStack /> : <AppStack />}
    </NavigationContainer>
  );
}

export default RootRoutes;
