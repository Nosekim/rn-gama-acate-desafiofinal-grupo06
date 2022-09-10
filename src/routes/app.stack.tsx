import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GetStarted from "../views/GetStarted";

const { Navigator, Screen } = createNativeStackNavigator();

function AppStack() {
  return (
    <Navigator>

        <Screen 
          name="getStarted" 
          component={GetStarted} 
          options={{ headerShown: false }}
        />

    </Navigator>
  );
}

export default AppStack;
