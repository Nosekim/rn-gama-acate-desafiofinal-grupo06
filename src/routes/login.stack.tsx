// In App.js in a new project

import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SampleLoginScreen from "../views/SampleLogin";

const { Navigator, Screen } = createNativeStackNavigator();
import RecoverPassword from "../views/RecoverPassword";

function LoginStack() {
  return (
    <Navigator>
      <Screen name="Recupeção de senha" component={RecoverPassword} />
      <Screen name="Login" component={SampleLoginScreen} />
    </Navigator>
  );
}

export default LoginStack;
