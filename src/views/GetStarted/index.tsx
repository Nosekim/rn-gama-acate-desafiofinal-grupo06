import { View, TouchableHighlight, Text } from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TabView, SceneMap } from 'react-native-tab-view';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import { ContainerIndicators, Indicator } from './styles';
import { stylesActionButton, TextButton } from '../../global/GlobalStyles';

import DescriptionScreen from '../../components/DescriptionScreen';
import Link from '../../components/Link';

const RouteSearch = () => (
    <DescriptionScreen 
        image={require('../../assets/ilustrations/search.png')}
        text='Encontre desenvolvedores que trabalham com as linguagens que você está procurando'
    />
)

export default function GetStarted() {

    const nav = useNavigation();

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first' },
        { key: 'second' },
        { key: 'third' }
    ])

    const renderScene = SceneMap({
        first: RouteSearch,
        second: RouteSearch,
        third: RouteSearch
    })

    const renderIndicators = (props: any) => (
        <ContainerIndicators>

            {
                props.navigationState.routes.map((route: any, i: number) => (
                    <Indicator 
                        key={route.key} 
                        style={{ backgroundColor: index === i ? '#2BC0E0' : '#4A494B' }} 
                    />
                ))
            }

        </ContainerIndicators>
    )

    return(
        <SafeAreaView style={{ flex: 1 }}>
            
            <TabView 
                renderTabBar={renderIndicators}
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                tabBarPosition='bottom'
            />

            <View style={{ alignItems: 'center', paddingVertical: 20 }}>

                <LinearGradient
                    colors={['#2BC0E0', '#2382B8']}
                    style={stylesActionButton.container}
                >

                    <TouchableHighlight
                        style={stylesActionButton.content}
                        activeOpacity={.7}
                        onPress={() => nav.reset({ index: 0, routes: [{ name: "Login" }] })}
                        underlayColor='#2BC0E0'
                    >
                        <TextButton>Acessar minha conta</TextButton>
                    </TouchableHighlight>

                </LinearGradient>

                <Link 
                    textLink='Criar conta'
                    screenTarget='Cadastro'
                />    

            </View>

        </SafeAreaView>
    )
}