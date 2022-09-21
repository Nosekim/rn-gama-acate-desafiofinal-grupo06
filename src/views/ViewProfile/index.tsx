import React from "react";
import { LinearGradient } from 'expo-linear-gradient';

import {
  ContainerTextTop,
  TextTop,
  ContainerMain,
  StyledButtons,
  StyledBackButtons,
  ContainerImageProfile,
  ImageProfile,
  TextStackMainDev,
  TextDescriptionDev,
  ContainerStacks,
  ContainerTitleAndExperience,
  TitleStacksAndExperience,
  TextStacksAndExperience,
  ContainerHistoryCertificate,
  TextButton,
  Footer
} from './styles';

import {
  AntDesign
} from '@expo/vector-icons';

import {
  MaterialIcons
} from '@expo/vector-icons';

export default function ViewProfile() {
  return (
    <ContainerMain>
      <ContainerTextTop>
        <StyledBackButtons>
          <AntDesign
            name="left"
            size={24}
            color="rgba(255, 255, 255, 0.50)"
          />
        </StyledBackButtons>
        <StyledButtons>
          <TextTop>
            Perfil do Alessandro Marques
          </TextTop>
        </StyledButtons>
        <StyledButtons>
          <MaterialIcons
            name="favorite-outline"
            size={25}
            color="rgba(255, 255, 255, 0.50)"
          />
        </StyledButtons>
      </ContainerTextTop>
      <ContainerImageProfile>
        <ImageProfile
          source={{ uri: 'https://i.pinimg.com/550x/b1/9a/17/b19a17f28f4e0b7641ef62d8690f7dd5.jpg' }}
        />
        <TextStackMainDev>
          Desenvolvedor Web
        </TextStackMainDev>
        <TextDescriptionDev>
          Trabalho como desenvolvedor Web há mais
          de 10 anos, principalmente utilizando
          JavaScript.
        </TextDescriptionDev>
      </ContainerImageProfile>
      <ContainerStacks>
        <ContainerTitleAndExperience
          style={
            {
              borderBottomWidth: 0,
              paddingBottom: 0
            }}
        >
          <TitleStacksAndExperience>
            TECNOLOGIAS
          </TitleStacksAndExperience>
          <TitleStacksAndExperience>
            EXPERIÊNCIA
          </TitleStacksAndExperience>
        </ContainerTitleAndExperience>
        <ContainerTitleAndExperience>
          <TextStacksAndExperience>
            Angular.js
          </TextStacksAndExperience>
          <TextStacksAndExperience>
            6 anos
          </TextStacksAndExperience>
        </ContainerTitleAndExperience>
        <ContainerTitleAndExperience>
          <TextStacksAndExperience>
            AWS
          </TextStacksAndExperience>
          <TextStacksAndExperience>
            3 anos
          </TextStacksAndExperience>
        </ContainerTitleAndExperience>
        <ContainerTitleAndExperience>
          <TextStacksAndExperience>
            Git
          </TextStacksAndExperience>
          <TextStacksAndExperience>
            10 anos
          </TextStacksAndExperience>
        </ContainerTitleAndExperience>
        <ContainerTitleAndExperience>
          <TextStacksAndExperience>
            JavaScript
          </TextStacksAndExperience>
          <TextStacksAndExperience>
            12 anos
          </TextStacksAndExperience>
        </ContainerTitleAndExperience>
      </ContainerStacks>
      <ContainerHistoryCertificate>
        <TitleStacksAndExperience>
          HISTÓRICO PROFISSIONAL
        </TitleStacksAndExperience>
        <TitleStacksAndExperience>
          CERTIFICADO E CURSOS
        </TitleStacksAndExperience>
      </ContainerHistoryCertificate>
      <Footer>
        <StyledButtons>
          <LinearGradient
            style={{
              paddingVertical: 14,
              paddingHorizontal: 8,
              borderRadius: 8,
              shadowColor: "#2BC0E0",
              shadowOffset: {
                width: 15,
                height: 12,
              },
              shadowOpacity: 0.4,
              shadowRadius: 15,
              elevation: 10
            }}
            colors={['#2BC0E0', '#2382B8']}
          >
            <TextButton>
              Enviar
            </TextButton>
          </LinearGradient>
        </StyledButtons>
      </Footer>
    </ContainerMain>
  );
}
