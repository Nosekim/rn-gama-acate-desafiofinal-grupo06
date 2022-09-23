import { TouchableHighlight } from "react-native";
import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector, useDispatch } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";
import { Auth } from 'aws-amplify';

import { IAuthState } from '../../../types';

import TopBarNav from "../../../components/TopBarNav";
import ProcessingAction from "../../../components/ProcessingAction";
import ShowError from "../../../components/ShowError";

import { 
    ContainerScreen, 
    InputField, 
    TextContent, 
    stylesActionButton, 
    TextButton } from "../../../global/GlobalStyles";

import { 
    changeMsgError, 
    changeStatusError,
    changeProcessingAction } from '../../../store/modules/info/reducer';
import { validateEmail } from "../../../utils";    
import { changeEmail } from "../../../store/modules/auth/reducer";

export default function EditEmail() {

    const dispatch = useDispatch();

    const [newEmail, setNewEmail] = useState('');
    const [completed, setCompleted] = useState(false);

    const { email } = useSelector((state: IAuthState) => state.auth);

    useEffect(() => {

        setNewEmail(email);
        dispatch(changeProcessingAction(false));

    }, [])

    const updateEmail = async() => {

        if(validateEmail(newEmail)) {

            dispatch(changeProcessingAction(true));

            const user = await Auth.currentAuthenticatedUser();

            const result = await Auth.updateUserAttributes(user, {
                'email': newEmail
            });

            if(result) {

                dispatch(changeProcessingAction(false));
                dispatch(changeEmail(newEmail));

                setCompleted(true);
            }

        } else {

            dispatch(changeMsgError("Por favor, informe um e-mail válido"));

            setTimeout(() => { 

                dispatch(changeProcessingAction(false));
                dispatch(changeStatusError(true)) 
                
            }, 20);
        }
    }

    const contentScreen = () => {

        if(completed)
            return(
                <ContainerScreen>

                    <TextContent>
                        Seu e-mail foi atualizado!
                    </TextContent>

                </ContainerScreen>    
            )

        return(
            <ContainerScreen>

                <TextContent>
                    Informe qual será o novo e-mail que ficará vinculado a sua conta
                </TextContent>

                <InputField
                    style={{ marginTop: 15, marginBottom: 30 }} 
                    value={newEmail}
                    keyboardType="email-address"
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={(text: string) => setNewEmail(text)}
                />

                <LinearGradient
                    colors={['#2BC0E0', '#2382B8']}
                    style={stylesActionButton.container}
                >

                    <TouchableHighlight
                        style={stylesActionButton.content}
                        activeOpacity={.7}
                        onPress={() => updateEmail()}
                        underlayColor='#2BC0E0'
                    >
                        <TextButton>Atualizar</TextButton>
                    </TouchableHighlight>

                </LinearGradient>

            </ContainerScreen>
        )    
    }

    return(
        <SafeAreaView style={{ flex: 1 }}>

            <ProcessingAction 
                text="Atualizando o seu e-mail..."
            />

            <ShowError />

            <TopBarNav 
                title="Editar E-mail"
            />  

            { contentScreen() }

        </SafeAreaView>
    )
}
