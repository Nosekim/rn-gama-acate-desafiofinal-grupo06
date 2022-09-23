import { TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import {
  FontAwesome5,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";

import Devs from "../Devs";
import Favorites from "../Favorites";
import UserProfile from "../UserProfile";
import ModalSelectPicture from "../../components/ModalSelectPicture";
import ShowError from "../../components/ShowError";

import { TopNavScreen, TopLogo } from "./styles";

const { Navigator, Screen } = createBottomTabNavigator();

interface IIcon {
  focused: boolean;
  color: string;
}

export default function Home() {
  const nav = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{}}>
        <ModalSelectPicture />

        <ShowError />

        <TopNavScreen>
          <TopLogo source={require("../../assets/logo-letters.png")} />

          <TouchableOpacity
            onPress={() => nav.navigate("Notificações")}
            activeOpacity={0.3}
          >
            <MaterialCommunityIcons name="bell" size={24} color="#5d5c5f" />
          </TouchableOpacity>
        </TopNavScreen>
      </SafeAreaView>
      <Navigator
        initialRouteName="DevsList"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#2ab2dd",
          tabBarInactiveTintColor: "#b0b0b0",
          tabBarLabelStyle: {
            textTransform: "uppercase",
          },
          tabBarStyle: {
            //height: 55,
            backgroundColor: "#343138",
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            elevation: 6,
            borderTopWidth: 0,
          },
          tabBarItemStyle: {
            //marginVertical: 5,
          },
        }}
      >
        <Screen
          name="Devs"
          component={Devs}
          options={{
            tabBarLabel: "devs",
            tabBarIcon: ({ focused, color }: IIcon) => (
              <MaterialCommunityIcons
                name={focused ? "account-search" : "account-search-outline"}
                size={26}
                color={color}
              />
            ),
          }}
        />

        <Screen
          name="Favorites"
          component={Favorites}
          options={{
            tabBarLabel: "favoritos",
            tabBarIcon: ({ focused, color }: IIcon) => (
              <Octicons
                name={focused ? "heart-fill" : "heart"}
                size={20}
                color={color}
              />
            ),
          }}
        />

        <Screen
          name="UserProfile"
          component={UserProfile}
          options={{
            tabBarLabel: "perfil",
            tabBarIcon: ({ focused, color }: IIcon) => (
              <FontAwesome5
                name={focused ? "user-alt" : "user"}
                size={18}
                color={color}
              />
            ),
          }}
        />
      </Navigator>
    </View>
  );
}
