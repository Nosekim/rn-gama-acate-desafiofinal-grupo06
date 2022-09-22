import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector, useDispatch } from "react-redux";
import { Picker } from '@react-native-picker/picker';

import { IAppState } from '../../../types';

import TopBarNav from "../../../components/TopBarNav";
import ShowError from "../../../components/ShowError";

import { 
    ContainerScreen, 
    TextContent,
    Label } from "../../../global/GlobalStyles";
import styles, { 
    AddedStacks, 
    ListAddedStacks, 
    StackPill, 
    TextPill } from "../style";

import { 
    changeMsgError, 
    changeStatusError,
    changeProcessingAction } from '../../../store/modules/info/reducer';
import { addStack, removeStack } from "../../../store/modules/userProfile/reducer";    

export default function SelectStacks() {

    const dispatch = useDispatch();

    const { stacks } = useSelector((state: IAppState) => state.devs);

    const { userStacks } = useSelector((state: IAppState) => state.user);

console.log("userStacks", userStacks)
    return(
        <SafeAreaView style={{ flex: 1 }}>

            <ShowError />

            <TopBarNav 
                title="Selecionar Tecnologias"
            />  

            <ContainerScreen>

                <TextContent>
                    Selecione uma tecnologia da lista para adicioná-la
                </TextContent>

                <Picker
                    style={styles.picker}
                    selectedValue=""
                    onValueChange={(itemValue, itemIndex) =>
                        dispatch(addStack(itemValue))
                    }>

                        <Picker.Item 
                            label="Selecione a tecnologia"
                            value="" 
                        />
                    {
                        stacks.map((item: any) => {

                            if(!userStacks.includes(item.label))
                                return(
                                    <Picker.Item 
                                        key={item.label}
                                        label={item.label} 
                                        value={item.label} 
                                    />
                                )

                            return false;
                        })
                    }

                </Picker>

                <AddedStacks>

                    <Label>Tecnologias adicionadas</Label>

                    <ListAddedStacks>
                        
                        {
                            userStacks.length > 0 ?
                            userStacks.map(item => (
                                <StackPill 
                                    onPress={() => dispatch(removeStack(item))}
                                    key={item}
                                >

                                    <TextPill>{ item }</TextPill>

                                    <Text style={{ fontSize: 12, color: 'rgba(255,255,255,.6)' }}>x</Text>

                                </StackPill>
                            )) : (
                                <Text style={{ color: '#fff' }}>
                                    Você ainda não adicionou uma tecnologia
                                </Text>
                            )
                        }

                    </ListAddedStacks>     

                </AddedStacks>

            </ContainerScreen>

        </SafeAreaView>
    )
}        