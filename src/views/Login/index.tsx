import { View, Image, TouchableHighlight } from 'react-native';
import { ContainerScreen, InputField, stylesActionButton, TextButton } from '../../global/GlobalStyles';
import styles, { FormLogin, ContainerLink, SocialButton } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

import Link from '../../components/Link';
import ShowPassword from '../../components/ShowPassword';

import { IAppState } from '../../types';

import { changeEmail, changePassword } from '../../store/modules/auth/reducer';

export default function Login() {

    const dispatch = useDispatch();

    const { email, password, showPassword } = useSelector((state: IAppState) => state.auth);

    return(
        <SafeAreaView style={{ flex: 1 }}>

            <ContainerScreen style={{ justifyContent: 'flex-start', marginTop: 60 }}>

                <Image source={require('../../assets/logo-letters.png')} />

                <FormLogin>

                    <View>

                        <InputField 
                            value={email}
                            style={styles.inputEmail}
                            placeholder="E-mail"
                            keyboardType="email-address"
                            autoCapitalize='none'
                            autoCorrect={false}
                            onChangeText={(text: string) => dispatch(changeEmail(text))}
                            onSubmitEditing={() => false}
                        />

                        <MaterialCommunityIcons 
                            style={styles.inputIcon}
                            name="email-outline" 
                            size={20} 
                            color='rgba(255,255,255,.35)'
                        />

                    </View>

                    <View>

                        <InputField 
                            value={password}
                            style={styles.inputPassword}
                            placeholder="Senha"
                            secureTextEntry={!showPassword}
                            autoCapitalize='none'
                            autoCorrect={false}
                            onChangeText={(text: string) => dispatch(changePassword(text))}
                            onSubmitEditing={() => false}
                        />

                        <MaterialCommunityIcons 
                            style={styles.inputIcon}
                            name="lock-outline" 
                            size={20} 
                            color='rgba(255,255,255,.35)'
                        />

                        <ShowPassword top={14} />

                    </View>

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
                            <TextButton>Entrar</TextButton>
                        </TouchableHighlight>

                    </LinearGradient>

                    <ContainerLink>

                        <Link 
                            textLink='Esqueci minha senha'
                            screenTarget='Recuperar Senha'
                        />

                    </ContainerLink>

                </FormLogin>

                <LinearGradient
                    colors={['#2BC0E0', '#2382B8']}
                    style={styles.divBar}
                />

                <SocialButton
                    style={{ borderColor: '#35A3D4' }}
                    onPress={() =>false}
                    activeOpacity={.5}
                >

                    <FontAwesome5 
                        style={{ marginRight: 8 }}
                        name="google" 
                        size={20} 
                        color='#35A3D4' 
                    />

                    <TextButton style={{ color: '#35A3D4' }}>Entrar com Google</TextButton>   

                </SocialButton>

                <SocialButton
                    onPress={() =>false}
                    activeOpacity={.5}
                >

                    <FontAwesome5 
                        style={{ marginRight: 8 }}
                        name="github" 
                        size={20} 
                        color='#fff' 
                    />          

                    <TextButton>Entrar com Github</TextButton>   

                </SocialButton>

            </ContainerScreen>

            <ContainerLink>

                <Link 
                    textLink='Quero me cadastrar'
                    screenTarget='Cadastro'
                />

            </ContainerLink>

        </SafeAreaView>
    )
}