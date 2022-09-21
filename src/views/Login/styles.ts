import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const FormLogin = styled.View`
    width: 100%;
    margin-top: 30px;
    margin-bottom: 15px;
`

export const SocialButton = styled.TouchableOpacity`
    width: 100%;
    height: 48px;
    border: 1px solid #fff;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    border-radius: 10px;
`

export default StyleSheet.create({
    inputIcon: {
        position: 'absolute',
        left: 15,
        top: 14
    },
    inputEmail: {
        paddingLeft: 45, 
        borderBottomRightRadius: 0, 
        borderBottomLeftRadius: 0 
    },
    inputPassword: { 
        paddingLeft: 45, 
        borderTopRightRadius: 0, 
        borderTopLeftRadius: 0, 
        borderTopWidth: 0,
        marginBottom: 25 
    },
    divBar: {
        height: 2,
        width: 180,
        marginBottom: 20
    }
})