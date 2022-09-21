import { TouchableHighlight, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Auth } from 'aws-amplify';

import { 
    ContainerScreen, 
    InputField, 
    stylesActionButton, 
    TextButton, 
    TextContent,
    ContainerLink } from '../../global/GlobalStyles';

import { IAppState } from '../../types';

import TopBarNav from '../../components/TopBarNav';
import ProcessingAction from '../../components/ProcessingAction';
import ShowError from '../../components/ShowError';
import Link from '../../components/Link';

import { 
    changeMsgError, 
    changeStatusError,
    changeProcessingAction } from '../../store/modules/info/reducer';
import { signIn } from '../../helpers/SignIn';

export default function AccpuntVerification() {

    const dispatch = useDispatch();

    const nav = useNavigation();

    const [code, setCode] = useState('');
    const [validated, setValidated] = useState(false);

    const { email, password, recoveringPassword } = useSelector((state: IAppState) => state.auth);

    useEffect(() => {
        dispatch(changeProcessingAction(false));
    }, [])

    const showMsgError = (text: string) => {

        dispatch(changeMsgError(text));

        setTimeout(() => { 

            dispatch(changeProcessingAction(false));
            dispatch(changeStatusError(true)) 
            
        }, 20);
    }

    async function confirmSignUp() {
        try {

            dispatch(changeProcessingAction(true));

            const user = await Auth.confirmSignUp(email, code);

            if(user) {

                if(recoveringPassword) {

                    setValidated(true);
                    dispatch(changeProcessingAction(true));

                } else {
                    signIn({ email, password, dispatch, nav });
                }   
            }
                
        } catch (error) {
            showMsgError("Não conseguimos validar sua conta. Por favor, tente novamente");
        }
    }

    async function resendConfirmationCode() {
        try {

            dispatch(changeProcessingAction(true));

            const user = await Auth.resendSignUp(email);

            if(user)
                showMsgError(`Enviamos o código de confirmação para ${email}`);
            
        } catch (err) {
            showMsgError("Não conseguimos enviar seu código. Por favor, tente novamente");
        }
    }

    const contentScreen = () => {

        if(validated)
            return(
                <ContainerScreen>

                    <TextContent>
                        Conseguimos validar sua conta! Agora pode continuar o processo de recuperar senha
                    </TextContent>

                    <ContainerLink>

                        <Link 
                            textLink='Retornar a tela anterior'
                            screenTarget='Recuperar Senha'
                        />

                    </ContainerLink>

                </ContainerScreen>
            )

        return(
            <ContainerScreen>

                <TextContent style={{ marginBottom: 20 }}>
                    Precisamos validar sua conta. Informe o código com 6 dígitos enviados para o seu e-mail
                </TextContent>

                <InputField 
                    value={code}
                    keyboardType="number-pad"
                    onChangeText={(text: string) => setCode(text)}
                    onSubmitEditing={() => false}
                />

                <LinearGradient
                    colors={['#2BC0E0', '#2382B8']}
                    style={[stylesActionButton.container, { marginTop: 35 }]}
                >

                    <TouchableHighlight
                        style={stylesActionButton.content}
                        activeOpacity={.7}
                        onPress={() => confirmSignUp()}
                        underlayColor='#2BC0E0'
                    >
                        <TextButton>Verificar</TextButton>
                    </TouchableHighlight>

                </LinearGradient>

                <TextContent style={{ marginTop: 25 }}>
                    <Text style={{ color: '#1ea9c8' }} onPress={() => resendConfirmationCode()}>Reenviar código de confirmação</Text>
                </TextContent>

            </ContainerScreen>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <ProcessingAction 
                text="Processando..."
            />

            <ShowError />

            <TopBarNav 
                title="Verificação de conta"
            />

            { contentScreen() }

        </SafeAreaView>    
    )
}