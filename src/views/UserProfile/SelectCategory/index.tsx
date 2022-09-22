import { TouchableHighlight } from "react-native";
import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector, useDispatch } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";
import { Picker } from '@react-native-picker/picker';

import { IAppState } from '../../../types';

import TopBarNav from "../../../components/TopBarNav";
import ProcessingAction from "../../../components/ProcessingAction";
import ShowError from "../../../components/ShowError";

import { 
    ContainerScreen, 
    TextContent, 
    stylesActionButton, 
    TextButton } from "../../../global/GlobalStyles";
import styles from "../style";

import { 
    changeMsgError, 
    changeStatusError,
    changeProcessingAction } from '../../../store/modules/info/reducer';
import { changeCategory } from "../../../store/modules/userProfile/reducer";    

export default function SelectCategory() {

    const dispatch = useDispatch();

    const [newCategory, setNewCategory] = useState('');
    const [completed, setCompleted] = useState(false);

    const { categories } = useSelector((state: IAppState) => state.devs);

    const { category } = useSelector((state: IAppState) => state.user);

    useEffect(() => {

        setNewCategory(category);
        dispatch(changeProcessingAction(false));

    }, [])

    const updateCategory = async() => {

        if(newCategory.length > 0) {

            dispatch(changeCategory(newCategory));

            setCompleted(true);

        } else {

            dispatch(changeMsgError("Por favor, selecione a sua categoria"));

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
                        Sua categoria foi atualizada!
                    </TextContent>

                </ContainerScreen>    
            )

        return(
            <ContainerScreen>

                <TextContent>
                    Qual é a sua categoria?
                </TextContent>

                <Picker
                    style={styles.picker}
                    selectedValue={newCategory}
                    onValueChange={(itemValue, itemIndex) =>
                        setNewCategory(itemValue)
                    }>

                        <Picker.Item 
                            label="Selecione a categoria"
                            value="" 
                        />
                    {
                        categories.map((item: any) => (
                            <Picker.Item 
                                key={item.name}
                                label={item.name} 
                                value={item.name} 
                            />
                        ))
                    }

                </Picker>

                <LinearGradient
                    colors={['#2BC0E0', '#2382B8']}
                    style={stylesActionButton.container}
                >

                    <TouchableHighlight
                        style={stylesActionButton.content}
                        activeOpacity={.7}
                        onPress={() => updateCategory()}
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
                text="Atualizando sua categoria..."
            />

            <ShowError />

            <TopBarNav 
                title="Selecionar Categoria"
            />  

            { contentScreen() }

        </SafeAreaView>
    )
}    