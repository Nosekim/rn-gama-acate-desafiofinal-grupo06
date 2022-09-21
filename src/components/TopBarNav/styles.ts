import styled from "styled-components/native";

export const TopBar = styled.View`
    width: 100%;
    height: 60px;
    flex-direction: row;
    align-items: center;
    padding: 0 15px;
`

export const BackButton = styled.TouchableOpacity`
    justify-content: center;
    height: 40px; 
    width: 40px;
`

export const TitleBar = styled.Text`
    color: #FBFBFE;
    font-weight: bold;
    font-size: 14px;
`