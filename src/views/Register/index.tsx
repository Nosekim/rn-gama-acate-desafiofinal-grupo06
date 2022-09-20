import { View, TouchableHighlight } from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';

import { ContainerScreen, InputField, stylesActionButton, TextButton, TextContent, Label } from '../../global/GlobalStyles';
import TopBarNav from '../../components/TopBarNav';
import ShowPassword from '../../components/ShowPassword';
import { InputGroup } from './styles';

import { IAppState } from '../../types';

interface IData {
    name: string;
    email: string;
    password: string;
}

export default function Register() {

    const [data, setData] = useState<IData>({
        name: '', email: '', password: ''
    })

    const { showPassword } = useSelector((state: IAppState) => state.auth);

    return(
        <SafeAreaView style={{ flex: 1 }}>

            <TopBarNav 
                title="Cadastro"
            />

            <ContainerScreen>

                <InputGroup>
                
                    <Label>Nome</Label>

                    <InputField 
                        value={data.name}
                        onChangeText={(text: string) => false}
                        onSubmitEditing={() => false}
                    />
                
                </InputGroup>

                <InputGroup>
                
                    <Label>E-mail</Label>

                    <InputField 
                        value={data.email}
                        keyboardType="email-address"
                        autoCapitalize='none'
                        autoCorrect={false}
                        onChangeText={(text: string) => false}
                        onSubmitEditing={() => false}
                    />
                
                </InputGroup>

                <InputGroup>

                    <Label>Senha</Label>

                    <InputField 
                        value={data.password}
                        secureTextEntry={!showPassword}
                        autoCapitalize='none'
                        autoCorrect={false}
                        onChangeText={(text: string) => false}
                        onSubmitEditing={() => false}
                    />

                    <ShowPassword top={31} />

                </InputGroup>

                <LinearGradient
                    colors={['#2BC0E0', '#2382B8']}
                    style={[stylesActionButton.container, { marginTop: 5, marginBottom: 20 }]}
                >

                    <TouchableHighlight
                        style={stylesActionButton.content}
                        activeOpacity={.7}
                        onPress={() => false}
                        underlayColor='#2BC0E0'
                    >
                        <TextButton>Cadastrar Conta</TextButton>
                    </TouchableHighlight>

                </LinearGradient>

                <TextContent>Ao se cadastrar, você concorda com nossos Termos de Uso e Política de Privacidade</TextContent>

            </ContainerScreen>

        </SafeAreaView>
    )
}