import {
    ContainerMain,
    ContainerTextTop,
    TextTop,
    TextContent,
    InputEmailAddress,
    StyledButtons,
    Containers,
    TextButton
} from './style';

import { LinearGradient } from 'expo-linear-gradient';

import { useState } from 'react';

import {
    AntDesign
} from '@expo/vector-icons';

const RecoverPassword = () => {
    const [textInputValue, setTextInputValue] = useState('');

    return (
        <ContainerMain>
            <ContainerTextTop>
                <StyledButtons>
                    <AntDesign
                        name="left"
                        size={24}
                        color="rgba(255, 255, 255, 0.30)" />
                </StyledButtons>
                <StyledButtons>
                    <TextTop>
                        Recuperar Senha
                    </TextTop>
                </StyledButtons>
            </ContainerTextTop>
            <Containers>
                <TextContent>
                    Digite o e-mail que você utilizou para
                    cadastrar a sua conta
                </TextContent>
                <Containers>
                    <InputEmailAddress
                        onChangeText={setTextInputValue}
                        value={textInputValue}
                    />
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
                </Containers>
            </Containers>
        </ContainerMain >
    )
}

export default RecoverPassword;