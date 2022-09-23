import { ScrollView, TouchableHighlight, Text } from 'react-native';
import { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import { 
    ContainerScreen, 
    InputField, 
    stylesActionButton, 
    TextButton, 
    TextContent, 
    Label, 
    InputGroup } from '../../global/GlobalStyles';

import TopBarNav from '../../components/TopBarNav';
import ShowPassword from '../../components/ShowPassword';
import ProcessingAction from '../../components/ProcessingAction';
import ShowError from '../../components/ShowError';

import { IAppState } from '../../types';

import { signUp } from '../../helpers/SignUp';
import { validateEmail } from '../../utils';

import { 
    changeMsgError, 
    changeStatusError,
    changeProcessingAction } from '../../store/modules/info/reducer';

export default function Register() {

    const dispatch = useDispatch();

    const nav = useNavigation();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { showPassword } = useSelector((state: IAppState) => state.auth);

    useEffect(() => {
        dispatch(changeProcessingAction(false));
    }, [])

    const createAccount = () => {

        if(name !== "" && validateEmail(email) && password.length >= 8) {

            signUp({ name, email, password, dispatch, nav });

        } else {

            dispatch(changeMsgError("Por favor, preencha corretamente todos os campos"));

            setTimeout(() => { dispatch(changeStatusError(true)) }, 20);
        }
    }

    const link = (text: string) => <Text style={{ color: '#1ea9c8' }} onPress={() => nav.navigate(text)}>{ text }</Text>

    return(
        <SafeAreaView style={{ flex: 1 }}>

            <ProcessingAction 
                text="Criando sua conta..."
            />

            <ShowError />

            <TopBarNav 
                title="Cadastro"
            />

            <ContainerScreen>

                <TextContent style={{ marginBottom: 15 }}>Forneça seu nome, e-mail e uma senha com no mínimo 8 caracteres</TextContent>

                <InputGroup>
                
                    <Label>Nome</Label>

                    <InputField 
                        value={name}
                        autoCapitalize="words"
                        onChangeText={(text: string) => setName(text)}
                        onSubmitEditing={() => false}
                    />
                
                </InputGroup>

                <InputGroup>
                
                    <Label>E-mail</Label>

                    <InputField 
                        value={email}
                        keyboardType="email-address"
                        autoCapitalize='none'
                        autoCorrect={false}
                        onChangeText={(text: string) => setEmail(text)}
                        onSubmitEditing={() => false}
                    />
                
                </InputGroup>

                <InputGroup>

                    <Label>Senha</Label>

                    <InputField 
                        value={password}
                        secureTextEntry={!showPassword}
                        autoCapitalize='none'
                        autoCorrect={false}
                        onChangeText={(text: string) => setPassword(text)}
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
                        onPress={() => createAccount()}
                        underlayColor='#2BC0E0'
                    >
                        <TextButton>Cadastrar Conta</TextButton>
                    </TouchableHighlight>

                </LinearGradient>

                <TextContent>Ao se cadastrar, você concorda com nossos { link("Termos de Uso") } e { link("Política de Privacidade") }</TextContent>

            </ContainerScreen>

        </SafeAreaView>
    )
}