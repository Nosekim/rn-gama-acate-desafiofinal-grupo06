import { StyleSheet } from "react-native";

import styled from "styled-components/native";

export const DevCard = styled.View`
    background-color: #424143;
    elevation: 2;
    border-radius: 12px;
    margin-bottom: 25px;
    padding: 15px;
`;

export const FirstLine = styled.View`
    flex-direction: row;
    justify-content: space-between;
`

export const MainData = styled.View`
    flex: 1;
    flex-direction: row;
    margin-right: 10px;
    align-items: center;
`

export const NameDev = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 3px;
`
export const CategoryDev = styled.Text`
    color: #fff;
    opacity: .7;
    font-size: 13px;
`

export const TitleStacks = styled.Text`
    color: #fff;
    opacity: .4;
    font-size: 10px;
    text-transform: uppercase;
    padding-top: 12px;
    padding-bottom: 5px;
`

export const ListDevStacks = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
`
export const StackPill = styled.Text`
    border: 1px solid #81A5B9;
    padding: 6px 15px;
    margin: 5px 10px 5px 0;
    border-radius: 15px;
    font-size: 12px;
    color: #fff;
`

export default StyleSheet.create({
    container: {
        marginTop: 30, 
        paddingBottom: 30,
        marginHorizontal: 15
    },
    photoDev: { 
        width: 60, 
        height: 60, 
        marginRight: 15, 
        borderRadius: 30
    }
})