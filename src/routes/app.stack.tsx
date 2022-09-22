import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ApolloGraphQL from "../services/apollo.graphql";

import Home from "../views/Home";
import Notifications from "../views/Notifications";
import Terms from "../views/Terms";
import PrivacyPolicy from "../views/PrivacyPolicy";

const { Navigator, Screen } = createNativeStackNavigator();

function AppStack() {
  return (
    <ApolloGraphQL>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name="Home" component={Home} />

        <Screen name="Notificações" component={Notifications} />

        <Screen name="Termos de Uso" component={Terms} />

        <Screen name="Política de Privacidade" component={PrivacyPolicy} />
      </Navigator>
    </ApolloGraphQL>
  );
}

export default AppStack;
