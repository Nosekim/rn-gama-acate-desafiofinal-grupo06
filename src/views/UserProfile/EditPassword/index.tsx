import { TouchableHighlight } from "react-native";
import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector, useDispatch } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";
import { Auth } from 'aws-amplify';

import { IAppState } from '../../../types';

import TopBarNav from "../../../components/TopBarNav";
import ProcessingAction from "../../../components/ProcessingAction";
import ShowError from "../../../components/ShowError";
import ShowPassword from '../../../components/ShowPassword';

import { 
    ContainerScreen, 
    InputField, 
    TextContent, 
    stylesActionButton, 
    TextButton,
    InputGroup } from "../../../global/GlobalStyles";

import { 
    changeMsgError, 
    changeStatusError,
    changeProcessingAction } from '../../../store/modules/info/reducer';   
import { changePassword } from "../../../store/modules/auth/reducer";    

export default function EditPassword() {

    const dispatch = useDispatch();

    const [newPassword, setNewPassword] = useState('');
    const [completed, setCompleted] = useState(false);

    const { password, showPassword } = useSelector((state: IAppState) => state.auth);

    useEffect(() => {
        dispatch(changeProcessingAction(false));
    }, [])

    const updatePassword = async() => {

        if(newPassword.length >= 8) {

            dispatch(changeProcessingAction(true));

            const user = await Auth.currentAuthenticatedUser();

            const result = await Auth.changePassword(user, password, newPassword);

            if(result) {

                dispatch(changeProcessingAction(false));
                dispatch(changePassword(newPassword));

                setCompleted(true);
            }

        } else {

            dispatch(changeMsgError("Por favor, informe uma nova senha com no mínimo 8 caracteres"));

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
                        Sua senha foi atualizada!
                    </TextContent>

                </ContainerScreen>    
            )

        return(
            <ContainerScreen>

                <TextContent>
                    Informe a sua nova senha com no mínimo 8 caracteres
                </TextContent>

                <InputGroup style={{ marginTop: 15, marginBottom: 30 }} >

                    <InputField 
                        value={newPassword}
                        secureTextEntry={!showPassword}
                        autoCapitalize='none'
                        autoCorrect={false}
                        onChangeText={(text: string) => setNewPassword(text)}
                    />

                    <ShowPassword top={13} />

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
                        <TextButton>Atualizar</TextButton>
                    </TouchableHighlight>

                </LinearGradient>

            </ContainerScreen>
        )    
    }

    return(
        <SafeAreaView style={{ flex: 1 }}>

            <ProcessingAction 
                text="Atualizando sua senha..."
            />

            <ShowError />

            <TopBarNav 
                title="Editar Senha"
            />  

            { contentScreen() }

        </SafeAreaView>
    )
}
