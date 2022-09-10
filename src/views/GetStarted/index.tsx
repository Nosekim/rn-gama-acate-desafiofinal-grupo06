import { View, Image } from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TabView, SceneMap } from 'react-native-tab-view';

import { TextDescription, ContainerIndicators, Indicator } from './styles';

import ActionButton from '../../components/ActionButton';
import Link from '../../components/Link';

const RouteSearch = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <Image source={require('../../assets/ilustrations/search.png')} />

        <TextDescription>Encontre desenvolvedores que trabalham com as linguagens que você está procurando</TextDescription>

    </View>
)

export default function GetStarted() {

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

                <ActionButton 
                    textButton='Acessar minha conta'
                />

                <Link 
                    textLink='Criar conta'
                />    

            </View>

        </SafeAreaView>
    )
}