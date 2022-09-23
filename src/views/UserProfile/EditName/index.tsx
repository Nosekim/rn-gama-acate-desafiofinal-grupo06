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
import { changeName } from "../../../store/modules/userProfile/reducer";    

export default function EditName() {

    const dispatch = useDispatch();

    const [newName, setNewName] = useState('');
    const [completed, setCompleted] = useState(false);

    const { name } = useSelector((state: IAppState) => state.user);

    useEffect(() => {

        setNewName(name);
        dispatch(changeProcessingAction(false));

    }, [])

    const updateName = async() => {

        if(newName.length > 1) {

            dispatch(changeProcessingAction(true));

            const user = await Auth.currentAuthenticatedUser();

            const result = await Auth.updateUserAttributes(user, {
                'name': newName
            });

            if(result) {

                dispatch(changeProcessingAction(false));
                dispatch(changeName(newName));

                setCompleted(true);
            }

        } else {

            dispatch(changeMsgError("Por favor, informe o seu nome"));

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
                        Seu nome foi atualizado!
                    </TextContent>

                </ContainerScreen>    
            )

        return(
            <ContainerScreen>

                <TextContent>
                    Digite o novo nome que será exibido
                </TextContent>

                <InputField
                    style={{ marginTop: 15, marginBottom: 30 }} 
                    value={newName}
                    autoCapitalize="words"
                    onChangeText={(text: string) => setNewName(text)}
                    onSubmitEditing={() => false}
                />

                <LinearGradient
                    colors={['#2BC0E0', '#2382B8']}
                    style={stylesActionButton.container}
                >

                    <TouchableHighlight
                        style={stylesActionButton.content}
                        activeOpacity={.7}
                        onPress={() => updateName()}
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
                text="Atualizando o seu nome..."
            />

            <ShowError />

            <TopBarNav 
                title="Editar Nome"
            />  

            { contentScreen() }

        </SafeAreaView>
    )
}
