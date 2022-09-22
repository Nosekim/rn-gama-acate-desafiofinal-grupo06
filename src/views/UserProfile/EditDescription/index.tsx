import { TouchableHighlight } from "react-native";
import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector, useDispatch } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";

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
import styles from "../style";

import { 
    changeMsgError, 
    changeStatusError,
    changeProcessingAction } from '../../../store/modules/info/reducer';
import { changeDescription } from "../../../store/modules/userProfile/reducer";    

export default function EditDescription() {

    const dispatch = useDispatch();

    const [newDescription, setNewDescription] = useState('');
    const [completed, setCompleted] = useState(false);

    const { description } = useSelector((state: IAppState) => state.user);

    useEffect(() => {

        setNewDescription(description);
        dispatch(changeProcessingAction(false));

    }, [])

    const updateDescription = async() => {

        if(newDescription.length >= 30) {

            dispatch(changeDescription(newDescription));

            setCompleted(true);

        } else {

            dispatch(changeMsgError("Por favor, descreva um pouco mais sobre sua experiência profissional"));

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
                        Sua descrição foi atualizada!
                    </TextContent>

                </ContainerScreen>    
            )

        return(
            <ContainerScreen>

                <TextContent>
                    Digite a descrição que deseja adicionar ao seu perfil
                </TextContent>

                <InputField
                    style={styles.descriptionField} 
                    placeholder="Descreva sua experiência profissional"
                    value={newDescription}
                    multiline
                    numberOfLines = {5}
                    onChangeText={(text: string) => setNewDescription(text)}
                />

                <LinearGradient
                    colors={['#2BC0E0', '#2382B8']}
                    style={stylesActionButton.container}
                >

                    <TouchableHighlight
                        style={stylesActionButton.content}
                        activeOpacity={.7}
                        onPress={() => updateDescription()}
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
                text="Atualizando sua descrição..."
            />

            <ShowError />

            <TopBarNav 
                title="Editar Descrição"
            />  

            { contentScreen() }

        </SafeAreaView>
    )
}
