import styled from "styled-components/native";

export const ContainerMain = styled.View`
    align-items: center;
    justify-content: space-between;
    position: relative;
    padding: 100px 22px 35px;
    height: 100%;
    width: 100%;
    background-color: #272629;
`

export const ContainerTextTop = styled.View`
    position: absolute;
    top: 40px;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const TextTop = styled.Text`
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #FBFBFE;
    margin-left: 38px;
`

export const ContainerImageProfile = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 100%;
  margin-bottom: 34px;
`

export const ImageProfile = styled.Image`
  height: 130px;
  width: 130px;
  border-radius: 120px;
  border: 2px solid rgba(255, 255, 255, 0.50);
  margin-bottom: 22px;
`

export const TextStackMainDev = styled.Text`
  font-size: 16px;
  font-weight: 400;
  line-height: 16.5px;
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: 23px;
`

export const TextDescriptionDev = styled.Text`
  color: #FFF;
  text-align: left;
  font-weight: 400;
  font-size: 15px;
  line-height: 22.5px;
`

export const ContainerStacks = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 38px;
`

export const ContainerTitleAndExperience = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 0;
  width: 100%;
  border-bottom-color: rgba(255, 255, 255, 0.5) ;
  border-bottom-width: .8px;
`

export const TitleStacksAndExperience = styled.Text`
  color: rgba(255, 255, 255, 0.4);
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 0.8px;
`

export const TextStacksAndExperience = styled.Text`
  color: #FFF;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.8px;
`

export const ContainerHistoryCertificate = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content:space-between;
  height: 45px;
  width: 100%;
  margin-bottom: 32px;
`

export const Footer = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 20px;
  border-top-color: rgba(255, 255, 255, 0.5) ;
  border-top-width: .8px;
`

export const TextButton = styled.Text`
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #FFFFFF;
`

export const StyledBackButtons = styled.TouchableOpacity`  
  position: absolute;
  left: 0;
`

export const StyledButtons = styled.TouchableOpacity`  
`