import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GetStarted from "../views/GetStarted";

const { Navigator, Screen } = createNativeStackNavigator();

import RecoverPassword from "../views/RecoverPassword";

import ViewProfile from "../views/ViewProfile";
import Login from "../views/Login";
import Register from "../views/Register";
import Terms from "../views/Terms";
import PrivacyPolicy from "../views/PrivacyPolicy";
import AccountVerification from "../views/AccountVerification";
import NewPassword from "../views/NewPassword";

function LoginStack() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="GetStarted" component={GetStarted} />

      <Screen name="Login" component={Login} />

      <Screen name="Recuperar Senha" component={RecoverPassword} />

      <Screen name="Nova Senha" component={NewPassword} />

      <Screen name="Cadastro" component={Register} />

      <Screen name="Verificação de Conta" component={AccountVerification} />

      <Screen name="Termos de Uso" component={Terms} />

      <Screen name="Política de Privacidade" component={PrivacyPolicy} />

      <Screen
        name="Perfil do Dev"
        options={{ headerShown: false }}
        component={ViewProfile}
      />
    </Navigator>
  );
}

export default LoginStack;
