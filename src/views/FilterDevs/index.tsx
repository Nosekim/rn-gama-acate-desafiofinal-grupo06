import { TouchableHighlight } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useSelector, useDispatch } from 'react-redux';

import { 
    stylesActionButton, 
    TextButton, 
    Label,
    ContainerLink } from '../../global/GlobalStyles';

import { Container } from './styles';

import { IAppState } from '../../types';

import TopBarNav from '../../components/TopBarNav';
 

export default function FilterDevs() {

    const dispatch = useDispatch();

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <TopBarNav 
                title="Filtrar Devs"
            />

            <Container>

                <Label>tecnologias / experiência</Label>



            </Container>

            <ContainerLink>

                <LinearGradient
                    colors={['#2BC0E0', '#2382B8']}
                    style={stylesActionButton.container}
                >

                    <TouchableHighlight
                        style={stylesActionButton.content}
                        activeOpacity={.7}
                        onPress={() => false}
                        underlayColor='#2BC0E0'
                    >
                        <TextButton>Ver desenvolvedores</TextButton>
                    </TouchableHighlight>

                </LinearGradient>

            </ContainerLink>

        </SafeAreaView>    
    )
}