import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import TopBarNav from '../../components/TopBarNav';

import { ContainerDoc, TitleDoc, TextDoc } from './styles';

export default function PrivacyPolicy() {

    return(
        <SafeAreaView style={{ flex: 1 }}>

            <TopBarNav 
                title="Política de Privacidade"
            />

            <ContainerDoc>

                <TextDoc>
                    A sua privacidade é importante para nós.{"\n"}É política do Find Dev respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no nosso aplicatvo.
                </TextDoc>

                <TextDoc>
                    Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento.{"\n"}Também informamos por que estamos coletando e como será usado.
                </TextDoc>

                <TextDoc>
                    Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. {"\n"}Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
                </TextDoc>

                <TextDoc>
                    Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
                </TextDoc>

                <TextDoc>
                    Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.
                </TextDoc>

                <TextDoc>
                    O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais.{"\n"}Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco.
                </TextDoc>

                <TitleDoc>Compromisso do Usuário</TitleDoc>

                <TextDoc>
                    O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o Find Dev oferece no aplicativo e com caráter enunciativo, mas não limitativo:
                </TextDoc>

                <TextDoc>
                    A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;{"\n"}{"\n"}
                    B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, ou casas de apostas online, jogos de sorte e azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;{"\n"}{"\n"}
                    C) Não causar danos aos sistemas do Find Dev para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de software que sejam capazes de causar danos anteriormente mencionados.
                </TextDoc>

            </ContainerDoc>

        </SafeAreaView>
    )
}