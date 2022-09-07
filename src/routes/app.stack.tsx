// In App.js in a new project

import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SampleAppScreen from "../views/SampleApp";

const { Navigator, Screen } = createNativeStackNavigator();

function AppStack() {
  return (
    <Navigator>
      <Screen name="App" component={SampleAppScreen} />
    </Navigator>
  );
}

export default AppStack;
