import { TouchableHighlight } from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import { Auth } from 'aws-amplify';

import { ContainerScreen, InputField, stylesActionButton, TextButton, TextContent, Label } from '../../global/GlobalStyles';
import TopBarNav from '../../components/TopBarNav';
import ShowPassword from '../../components/ShowPassword';
import { InputGroup } from './styles';
import ProcessingAction from '../../components/ProcessingAction';
import ShowError from '../../components/ShowError';

import { IAppState } from '../../types';

import { changeMsgError, changeStatusError } from '../../store/modules/info/reducer';

export default function Register() {

    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [processing, setProcessing] = useState(false);

    const { showPassword } = useSelector((state: IAppState) => state.auth);

    const signUp = async() => {

        try {

            const { user } = await Auth.signUp({
                username: email,
                password,
                attributes: {
                    email,   
                    name
                },
                autoSignIn: { 
                    enabled: true
                }
            });

            //console.log("user", user);

        } catch (error) {
            showMsgError("Ocorreu um erro na tentativa de criarmos sua conta");
            //console.log('error signing up:', error);
        }
    }

    const showMsgError = (text: string) => {

        dispatch(changeMsgError(text));

        setTimeout(() => { dispatch(changeStatusError(true)) }, 20);
    }

    const createAccount = () => {

        if(name !== "" && email !== "" && password !== "") {

            setProcessing(true);

            signUp();

        } else {
            showMsgError("Por favor, preencha todos os campos")
        }
    }

    return(
        <SafeAreaView style={{ flex: 1 }}>

            <ProcessingAction 
                text="Criando sua conta..."
                visible={processing}
            />

            <ShowError />

            <TopBarNav 
                title="Cadastro"
            />

            <ContainerScreen style={{ justifyContent: 'flex-start', marginTop: 30 }}>

                <InputGroup>
                
                    <Label>Nome</Label>

                    <InputField 
                        value={name}
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

                <TextContent>Ao se cadastrar, você concorda com nossos Termos de Uso e Política de Privacidade</TextContent>

            </ContainerScreen>

        </SafeAreaView>
    )
}