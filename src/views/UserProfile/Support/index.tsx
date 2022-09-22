import { TouchableHighlight } from "react-native";
import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";

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

export default function Support() {

    const dispatch = useDispatch();

    const [msg, setMsg] = useState('');
    const [completed, setCompleted] = useState(false);

    useEffect(() => {
        dispatch(changeProcessingAction(false));
    }, [])

    const sendMsg = async() => {

        if(msg.length >= 20) {

            dispatch(changeProcessingAction(true));

            setTimeout(() => {

                dispatch(changeProcessingAction(true));

                setCompleted(true);

            }, 2000)

        } else {

            dispatch(changeMsgError("Por favor, descreva um pouco sobre a situação"));

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
                        Sua mensagem foi enviada! Logo a responderemos
                    </TextContent>

                </ContainerScreen>    
            )

        return(
            <ContainerScreen>

                <TextContent>
                    Se deseja reportar um problema, fazer um elogio ou crítica, é só preencher e enviar. Responderemos o mais breve possível
                </TextContent>

                <InputField
                    style={styles.descriptionField} 
                    placeholder="Descreva a situação"
                    value={msg}
                    multiline
                    numberOfLines = {5}
                    onChangeText={(text: string) => setMsg(text)}
                />

                <LinearGradient
                    colors={['#2BC0E0', '#2382B8']}
                    style={stylesActionButton.container}
                >

                    <TouchableHighlight
                        style={stylesActionButton.content}
                        activeOpacity={.7}
                        onPress={() => sendMsg()}
                        underlayColor='#2BC0E0'
                    >
                        <TextButton>Enviar</TextButton>
                    </TouchableHighlight>

                </LinearGradient>

            </ContainerScreen>
        )    
    }

    return(
        <SafeAreaView style={{ flex: 1 }}>

            <ProcessingAction 
                text="Enviando a sua mensagem..."
            />

            <ShowError />

            <TopBarNav 
                title="Fale Conosco"
            />  

            { contentScreen() }

        </SafeAreaView>
    )
}
