import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    margin: 30px 15px;
`

export const AddedFilteredStacks = styled.View`
    width: 100%;
    align-items: flex-start;
    margin: 10px 0;
`

export const FilteredStack = styled.View`
    width: 100%;
    padding-bottom: 10px;
    border-bottom-width: 1px;
    border-bottom-color: rgba(255,255,255,.1);
`

export const TopLineFiltered = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const RemoveFilteredStack = styled.Text`
    font-size: 13px;
    font-weight: bold;
    color: #fff;
    opacity: .5;
`

export const BottomLineFiltered = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 10px 0;
`

export const ExpStackPill = styled.TouchableOpacity`
    padding: 0 12px;
    height: 32px;
    border-radius: 16px;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(255,255,255,.25);
    margin-right: 12px;
`
export const TextExpPill = styled.Text`
    font-size: 13px;
    color: rgba(255,255,255,.5);
`

export default StyleSheet.create({
    picker: {
        width: '100%',
        color: '#fff',
        marginTop: 15,
        marginBottom: 30,
        backgroundColor: '#36323D'
    },
    activePill: { 
        backgroundColor: '#35A3D4',
        borderColor: '#35A3D4' 
    },
    activeTextPill: {
        color: '#fff',
        fontWeight: 'bold'
    }
})

