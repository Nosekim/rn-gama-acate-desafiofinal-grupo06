import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ApolloGraphQL from "../services/apollo.graphql";
import Home from "../views/Home";

const { Navigator, Screen } = createNativeStackNavigator();

function AppStack() {
  return (
    <ApolloGraphQL>
      <Navigator>
        <Screen name="Home" component={Home} options={{ headerShown: false }} />
      </Navigator>
    </ApolloGraphQL>
  );
}

export default AppStack;
