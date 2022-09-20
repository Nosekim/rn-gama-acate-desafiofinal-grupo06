import { TouchableHighlight } from 'react-native';
import { ContainerScreen, InputField, stylesActionButton, TextButton, TextContent } from '../../global/GlobalStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import TopBarNav from '../../components/TopBarNav';

const RecoverPassword = () => {

    const [email, setEmail] = useState('');

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <TopBarNav 
                title="Recuperar Senha"
            />

            <ContainerScreen>

                <TextContent>
                    Digite o e-mail que você utilizou para
                    cadastrar a sua conta
                </TextContent>

                <InputField
                    style={{ marginTop: 15, marginBottom: 30 }} 
                    value={email}
                    keyboardType="email-address"
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={(text: string) => setEmail(text)}
                    onSubmitEditing={() => false}
                />

                <LinearGradient
                    colors={['#2BC0E0', '#2382B8']}
                    style={stylesActionButton.container}
                >

                    <TouchableHighlight
                        style={stylesActionButton.content}
                        activeOpacity={.7}
                        onPress={() => false}
                        underlayColor='#2BC0E0'
                    >
                        <TextButton>Enviar</TextButton>
                    </TouchableHighlight>

                </LinearGradient>

            </ContainerScreen>

        </SafeAreaView>    
    )
}

export default RecoverPassword;