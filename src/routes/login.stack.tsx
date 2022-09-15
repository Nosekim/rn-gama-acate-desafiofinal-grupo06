import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GetStarted from "../views/GetStarted";

const { Navigator, Screen } = createNativeStackNavigator();
import RecoverPassword from "../views/RecoverPassword";

function LoginStack() {
  return (
    <Navigator>
        <Screen 
          name="GetStarted" 
          component={GetStarted} 
          options={{ headerShown: false }}
        />

        <Screen 
          name="Recuperação de Senha" 
          component={RecoverPassword} 
        />
    </Navigator>
  );
}

export default LoginStack;
