import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export default StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        marginHorizontal: 15,
        paddingVertical: 30
    }
})

export const DataOption = styled.TouchableOpacity`
    width: 100%;
    height: 70px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom-width: 1px;
    border-bottom-color: rgba(255,255,255,.05);
`

export const TextData = styled.Text`
    font-size: 15px;
    color: #FFF;
    margin-left: 8px;
`