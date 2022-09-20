import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GetStarted from "../views/GetStarted";

const { Navigator, Screen } = createNativeStackNavigator();
import RecoverPassword from "../views/RecoverPassword";
import ViewProfile from "../views/ViewProfile";

function LoginStack() {
  return (
    <Navigator>
      {/* <Screen
        name="GetStarted"
        component={GetStarted}
        options={{ headerShown: false }}
      />

      <Screen
        name="Recuperação de Senha"
        component={RecoverPassword}
      /> */}

      <Screen
        name="Perfil do Dev"
        options={{ headerShown: false }}
        component={ViewProfile}
      />
    </Navigator>
  );
}

export default LoginStack;
