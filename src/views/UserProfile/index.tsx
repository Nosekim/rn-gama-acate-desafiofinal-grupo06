import { ScrollView, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

import styles, { DataOption, TextData } from "./style";
import { Label } from "../../global/GlobalStyles";

import { IAppState } from "../../types";

import ProfilePicture from "../../components/ProfilePicture";

interface IUserData {
    title: string;
    text: string;
    screenTarget: string;
}

export default function UserProfile() {

    const nav = useNavigation();

    const { email } = useSelector((state: IAppState) => state.auth);

    const { name, photoUser, category, stacks, description } = useSelector((state: IAppState) => state.user);

    const userData = ({ title, text, screenTarget }: IUserData) => {

        if(text === "")
            text = "Não informado";

        return(
            <DataOption
                onPress={() => nav.navigate(screenTarget)}
                activeOpacity={.3}
            >

                {
                    title !== "" ? 
                    (
                        <View>

                            <Label>{ title }</Label> 

                            <TextData>{ text }</TextData>

                        </View>
                    ) : (
                        <TextData>{ text }</TextData>
                    )
                }
                
                <AntDesign 
                    name="right" 
                    size={20} 
                    color="rgba(255, 255, 255, .3)" 
                />

            </DataOption>
        )
    }

    return(
        <ScrollView
            contentContainerStyle={styles.container}
        >

            <ProfilePicture 
                image={photoUser}
            />

            <View style={{ marginVertical: 20, width: '100%' }}>

                { 
                    userData({
                        title: "Nome",
                        text: name,
                        screenTarget: ""
                    }) 
                }

                { 
                    userData({
                        title: "E-mail",
                        text: email,
                        screenTarget: ""
                    }) 
                }    

                { 
                    userData({
                        title: "Senha",
                        text: "*******",
                        screenTarget: ""
                    }) 
                }     

                { 
                    userData({
                        title: "Categoria",
                        text: category,
                        screenTarget: ""
                    }) 
                }     

                { 
                    userData({
                        title: "Tecnologias",
                        text: "",
                        screenTarget: ""
                    }) 
                }

                { 
                    userData({
                        title: "Descrição",
                        text: description,
                        screenTarget: ""
                    }) 
                }

                <View style={{ marginTop: 30 }}>

                    <Label>Mais opções</Label> 

                    { 
                        userData({
                            title: "",
                            text: "Termos de Uso",
                            screenTarget: "Termos de Uso"
                        }) 
                    }

                    { 
                        userData({
                            title: "",
                            text: "Política de Privacidade",
                            screenTarget: "Política de Privacidade"
                        }) 
                    }

                    { 
                        userData({
                            title: "",
                            text: "Sair",
                            screenTarget: ""
                        }) 
                    }

                </View>

            </View>

        </ScrollView>
    )
}