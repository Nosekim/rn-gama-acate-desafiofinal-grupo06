// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppStack from "./app.stack";
import LoginStack from "./login.stack";

function RootRoutes() {
  const isLoggedIn = false;
  return (
    <NavigationContainer>
      {isLoggedIn ? <AppStack /> : <LoginStack />}
    </NavigationContainer>
  );
}

export default RootRoutes;
