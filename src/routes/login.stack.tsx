import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GetStarted from "../views/GetStarted";

const { Navigator, Screen } = createNativeStackNavigator();
import RecoverPassword from "../views/RecoverPassword";
import Login from "../views/Login";
import Register from "../views/Register";

function LoginStack() {
  return (
    <Navigator
      screenOptions={{ headerShown: false }}
    >

        <Screen 
          name="GetStarted" 
          component={GetStarted} 
        />

        <Screen 
          name="Login" 
          component={Login} 
        />

        <Screen 
          name="Recuperar Senha" 
          component={RecoverPassword} 
        />

        <Screen 
          name="Cadastro" 
          component={Register} 
        />

    </Navigator>
  );
}

export default LoginStack;
