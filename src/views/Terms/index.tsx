import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import TopBarNav from '../../components/TopBarNav';

import { ContainerDoc, TitleDoc, TextDoc } from '../PrivacyPolicy/styles';

export default function Terms() {

    return(
        <SafeAreaView style={{ flex: 1 }}>

            <TopBarNav 
                title="Termos de Uso"
            />

            <ContainerDoc>

                <TitleDoc>1. Termos</TitleDoc>

                <TextDoc>
                    Ao utilizar o aplicativo Find Dev, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis.{"\n"}Se você não concordar com algum desses termos, está proibido de usar esse aplicativos.{"\n"}Os materiais contidos nele são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.
                </TextDoc>

                <TitleDoc>2. Uso de Licença</TitleDoc>

                <TextDoc>
                    Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode tentar descompilar ou fazer engenharia reversa de qualquer software contido no aplicativo Find Dev.
                </TextDoc>

                <TitleDoc>3. Isenção de responsabilidade</TitleDoc>

                <TextDoc>
                     O Find Dev não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ​​ou à confiabilidade do uso dos dados do aplicativo.
                </TextDoc>

                <TitleDoc>4. Limitações</TitleDoc>

                <TextDoc>
                    Em nenhum caso o Find Dev será responsável ​​por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar o aplicativo.
                </TextDoc>

                <TitleDoc>5. Precisão dos dados</TitleDoc>

                <TextDoc>
                    Os dados exibidos no aplicativo Find Dev podem incluir erros técnicos, tipográficos ou fotográficos.{"\n"}Find Dev não garante que qualquer dados seja preciso, completo ou atual. {"\n"}Find Dev pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, Find Dev não se compromete a atualizar os materiais.
                </TextDoc>

            </ContainerDoc>

        </SafeAreaView>
    )
}