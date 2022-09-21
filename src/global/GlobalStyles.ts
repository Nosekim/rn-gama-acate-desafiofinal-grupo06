import { Dimensions, StyleSheet } from "react-native";
import styled from "styled-components/native";

const { width, height } = Dimensions.get('window');

export const ContainerScreen = styled.View`
    flex: 1; 
    align-items: center; 
    justify-content: center;
    margin: 0 15px;
`

export const TextContent = styled.Text`
    text-align: center;
    font-size: 15px;
    line-height: 22px;
    color: #FFF;
    padding: 10px 0;
`

export const InputField = styled.TextInput.attrs({
    placeholderTextColor: 'rgba(255,255,255,.35)'
  })`
    width: 100%;
    background-color: #36323D;
    height: 48px;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    border: 1px solid #4B4751;
    border-radius: 12px;
    padding-left: 15px;
`

export const TextButton = styled.Text`
    font-size: 14px; 
    font-weight: bold;
    color: #fff;
`

export const Label = styled.Text`
  font-size: 10px;
  font-weight: bold;
  color: rgba(255,255,255,.5);
  margin-left: 8px;
  margin-bottom: 5px;
  text-transform: uppercase;
`

export const widthScreen = width;
export const heightScreen = height;

export const stylesActionButton = StyleSheet.create({
    container: { 
        width: widthScreen - 30, 
        height: 48, 
        borderRadius: 10, 
        shadowColor: "#2382B8",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    content: { 
        flex: 1, 
        borderRadius: 10, 
        justifyContent: 'center', 
        alignItems: 'center' 
    }
})
