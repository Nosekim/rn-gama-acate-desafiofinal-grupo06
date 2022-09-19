import { Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';

import Devs from '../Devs';
import Favorites from '../Favorites';
import Profile from '../Profile';

import { TopNavScreen } from './styles';

const { Navigator, Screen } = createBottomTabNavigator();

export default function Home() {

    return(
        <SafeAreaView style={{ flex: 1 }}>

            <TopNavScreen>

                <Image source={require('../../assets/logo-letters.png')} />

                <TouchableOpacity
                    onPress={() => false}
                    activeOpacity={.3}
                >

                    <MaterialCommunityIcons 
                        name="bell" 
                        size={24} 
                        color="#5d5c5f" 
                    />

                </TouchableOpacity>

            </TopNavScreen>

            <Navigator
                initialRouteName='DevsList'
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: '#2ab2dd',
                    tabBarInactiveTintColor: '#b0b0b0',
                    tabBarLabelStyle: { 
                        textTransform: 'uppercase'
                    },
                    tabBarStyle: {
                        height: 55,
                        backgroundColor: '#343138',
                        borderTopLeftRadius: 12,
                        borderTopRightRadius: 12,
                        elevation: 6,
                        borderTopWidth: 0,
                    },
                    tabBarItemStyle: {
                        marginVertical: 5
                    }
                }}
            >
            
                <Screen 
                    name='Devs'
                    component={Devs}
                    options={{
                        tabBarLabel: 'devs',
                        tabBarIcon: ({ focused, color }) => (
                            <MaterialCommunityIcons
                                name={focused ? "account-search" : "account-search-outline"} 
                                size={30} 
                                color={color}
                            />
                        )  
                    }}
                />

                <Screen 
                    name='Favorites'
                    component={Favorites}
                    options={{
                        tabBarLabel: 'favoritos',
                        tabBarIcon: ({ focused, color }) => (
                            <Octicons
                                name={focused ? "heart-fill" : "heart"}
                                size={24} 
                                color={color}
                            />
                        )
                    }}
                />    

                <Screen 
                    name='Profile'
                    component={Profile}
                    options={{
                        tabBarLabel: 'perfil',
                        tabBarIcon: ({ focused, color }) => (
                            <FontAwesome5
                                name={focused ? "user-alt" : "user"}
                                size={22} 
                                color={color}
                            />
                        )
                    }}
                />    

            </Navigator>

        </SafeAreaView>
    )
}