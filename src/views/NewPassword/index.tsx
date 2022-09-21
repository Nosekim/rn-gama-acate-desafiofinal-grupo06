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
    InputGroup,
    Label,
    stylesActionButton, 
    TextButton, 
    TextContent,
    ContainerLink } from '../../global/GlobalStyles';

import { IAppState } from '../../types';

import TopBarNav from '../../components/TopBarNav';
import ShowPassword from '../../components/ShowPassword';
import ProcessingAction from '../../components/ProcessingAction';
import ShowError from '../../components/ShowError';
import Link from '../../components/Link';

import { changeEmail, changePassword } from '../../store/modules/auth/reducer';
import { 
    changeMsgError, 
    changeStatusError,
    changeProcessingAction } from '../../store/modules/info/reducer';
import { validateEmail } from '../../utils';
import { signIn } from '../../helpers/SignIn';

export default function NewPassword() {

    const dispatch = useDispatch();

    const nav = useNavigation();

    const [usedEmail, setUsedEmail] = useState('');
    const [code, setCode] = useState('');
    const [password, setPassword] = useState('');

    const { email, showPassword } = useSelector((state: IAppState) => state.auth);

    useEffect(() => {
        setUsedEmail(email);
    }, [])

    const updatePassword = () => {
    
        if(validateEmail(usedEmail) && code.length === 6 && password.length >= 8) {

            dispatch(changeProcessingAction(true));

            Auth.forgotPasswordSubmit(email, code, password)
            .then(() => {

                dispatch(changeEmail(email));
                dispatch(changePassword(password));

                signIn({ email, password, dispatch, nav });
            })
            .catch(err => showMsgError("Erro na atualização de sua senha! Por favor, tente novamente"));

        } else {
            showMsgError("Por favor, preencha corretamente todos os campos")
        }
    }

    const showMsgError = (text: string) => {

        dispatch(changeMsgError(text));

        setTimeout(() => { 

            dispatch(changeProcessingAction(false));
            dispatch(changeStatusError(true)) 
            
        }, 20);
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <ProcessingAction 
                text="Atualizando sua senha..."
            />

            <ShowError />

            <TopBarNav 
                title="Nova Senha"
            />

            <ContainerScreen>

                <TextContent style={{ marginBottom: 20 }}>
                    Informe o e-mail, o código de confirmação e a sua nova senha com no mínimo 8 caracteres
                </TextContent>

                <InputGroup>

                    <Label>E-mail</Label>

                    <InputField 
                        value={usedEmail}
                        keyboardType="email-address"
                        autoCapitalize='none'
                        autoCorrect={false}
                        onChangeText={(text: string) => setUsedEmail(text)}
                        onSubmitEditing={() => false}
                    />

                </InputGroup>

                <InputGroup>

                    <Label>Código de confirmação</Label>

                    <InputField 
                        keyboardType="number-pad"
                        value={code}
                        onChangeText={(text: string) => setCode(text)}
                        onSubmitEditing={() => false}
                    />

                </InputGroup>

                <InputGroup>

                    <Label>Nova Senha</Label>

                    <InputField 
                        style={{ marginBottom: 10 }} 
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
                    style={stylesActionButton.container}
                >

                    <TouchableHighlight
                        style={stylesActionButton.content}
                        activeOpacity={.7}
                        onPress={() => updatePassword()}
                        underlayColor='#2BC0E0'
                    >
                        <TextButton>Atualizar senha</TextButton>
                    </TouchableHighlight>

                </LinearGradient>

                <ContainerLink>

                    <Link 
                        textLink='Não tenho um código válido'
                        screenTarget='Recuperar Senha'
                    />

                </ContainerLink>

            </ContainerScreen>

        </SafeAreaView>    
    )
}