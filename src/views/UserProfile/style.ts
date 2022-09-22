import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export default StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        marginHorizontal: 15,
        paddingVertical: 30
    },
    picker: {
        width: '100%',
        color: '#fff',
        marginTop: 15,
        marginBottom: 30,
        backgroundColor: '#36323D'
    },
    descriptionField: { 
        marginTop: 15, 
        marginBottom: 30,
        paddingVertical: 8, 
        height: 100, 
        textAlignVertical: "top" 
    }
})

export const DataOption = styled.TouchableOpacity`
    width: 100%;
    min-height: 70px;
    padding: 10px 0;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom-width: 1px;
    border-bottom-color: rgba(255,255,255,.05);
`

export const TextData = styled.Text`
    font-size: 15px;
    line-height: 22px;
    color: #FFF;
    margin-left: 8px;
`

export const AddedStacks = styled.View`
    width: 100%;
    justify-content: flex-start;
    margin: 10px 0;
`

export const ListAddedStacks = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    padding: 10px;
`

export const StackPill = styled.TouchableOpacity`
    border: 1px solid #81A5B9;
    padding: 6px 15px;
    margin: 5px 15px 10px 0;
    border-radius: 15px;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`

export const TextPill = styled.Text`
    font-size: 15px;
    margin-right: 12px;
    color: #fff;
`