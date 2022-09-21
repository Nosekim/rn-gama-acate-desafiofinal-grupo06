import { TouchableHighlight } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useSelector, useDispatch } from 'react-redux';
import { Auth } from 'aws-amplify';
import { useNavigation } from '@react-navigation/native';

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

import { changeEmail, changeRecoveringPassword } from '../../store/modules/auth/reducer';
import { 
    changeMsgError, 
    changeStatusError,
    changeProcessingAction } from '../../store/modules/info/reducer';
import { validateEmail } from '../../utils';    

export default function RecoverPassword() {

    const dispatch = useDispatch();

    const nav = useNavigation();

    const [usedEmail, setUsedEmail] = useState('');
    const [completed, setCompleted] = useState(false);

    const { email } = useSelector((state: IAppState) => state.auth);

    useEffect(() => {

        setUsedEmail(email);
        dispatch(changeProcessingAction(false));

    }, [])

    const showMsgError = (text: string) => {

        dispatch(changeMsgError(text));

        setTimeout(() => { 

            dispatch(changeProcessingAction(false));
            dispatch(changeStatusError(true)) 
            
        }, 20);
    }

    const sendCode = () => {

        if(validateEmail(usedEmail)) {

            dispatch(changeProcessingAction(true));

            Auth.forgotPassword(usedEmail)
            .then(() => {

                dispatch(changeEmail(usedEmail));

                dispatch(changeProcessingAction(false));
                setCompleted(true);
            })
            .catch(err => {

                if(err.toString() === "InvalidParameterException: Cannot reset password for the user as there is no registered/verified email or phone_number") {

                    dispatch(changeEmail(usedEmail));
                    dispatch(changeRecoveringPassword(true));
                    nav.navigate("Verificação de Conta");

                } else {

                    let textError = "Erro ao processar a solicitação! Por favor, tente novamente";
    
                    if(err.name === "UserNotFoundException") 
                        textError = "Não encontrado! Por favor, verifique o e-mail digitado";
    
                    if(err.name === "LimitExceededException")
                        textError = "Limite de tentativas excedido! Por favor, tente novamente mais tarde";

                    showMsgError(textError);
                }
            });

        } else {
            showMsgError("Por favor, informe o e-mail utilizado para cadastrar sua conta")
        }
    }

    const contentScreen = () => {

        if(completed)
            return(
                <TextContent>
                    Código enviado! Verifique a caixa de entrada do seu e-mail e também a de SPAM
                </TextContent>
            )

        return(
            <>

                <TextContent>
                    Digite o e-mail que você utilizou para
                    cadastrar a sua conta
                </TextContent>

                <InputField
                    style={{ marginTop: 15, marginBottom: 30 }} 
                    value={usedEmail}
                    keyboardType="email-address"
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={(text: string) => setUsedEmail(text)}
                    onSubmitEditing={() => false}
                />

                <LinearGradient
                    colors={['#2BC0E0', '#2382B8']}
                    style={stylesActionButton.container}
                >

                    <TouchableHighlight
                        style={stylesActionButton.content}
                        activeOpacity={.7}
                        onPress={() => sendCode()}
                        underlayColor='#2BC0E0'
                    >
                        <TextButton>Enviar</TextButton>
                    </TouchableHighlight>

                </LinearGradient>

            </>
        )    
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <ProcessingAction 
                text="Processando a solicitação..."
            />

            <ShowError />

            <TopBarNav 
                title="Recuperar Senha"
            />

            <ContainerScreen>

                { contentScreen() }

                <ContainerLink>

                    <Link 
                        textLink='Já recebi o código de confirmação'
                        screenTarget='Nova Senha'
                    />

                </ContainerLink>

            </ContainerScreen>

        </SafeAreaView>    
    )
}