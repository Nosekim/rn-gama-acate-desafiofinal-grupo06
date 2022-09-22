import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ApolloGraphQL from "../services/apollo.graphql";

import Home from "../views/Home";
import Notifications from "../views/Notifications";
import Terms from "../views/Terms";
import PrivacyPolicy from "../views/PrivacyPolicy";

import EditName from "../views/UserProfile/EditName";
import EditEmail from "../views/UserProfile/EditEmail";
import EditPassword from "../views/UserProfile/EditPassword";
import SelectCategory from "../views/UserProfile/SelectCategory";
import SelectStacks from "../views/UserProfile/SelectStacks";
import EditDescription from "../views/UserProfile/EditDescription";

import FilterDevs from "../views/FilterDevs";

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
        <Screen name="Filtrar Devs" component={FilterDevs} />
        <Screen name="Termos de Uso" component={Terms} />
        <Screen name="Política de Privacidade" component={PrivacyPolicy} />
        <Screen name="Editar Nome" component={EditName} />
        <Screen name="Editar E-mail" component={EditEmail} />
        <Screen name="Editar Senha" component={EditPassword} />
        <Screen name="Selecionar Categoria" component={SelectCategory} />
        <Screen name="Selecionar Tecnologias" component={SelectStacks} />
        <Screen name="Editar Descrição" component={EditDescription} />
      </Navigator>
    </ApolloGraphQL>
  );
}

export default AppStack;
