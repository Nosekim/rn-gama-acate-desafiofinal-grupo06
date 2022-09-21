import DescriptionScreen from "../../components/DescriptionScreen";
import { SafeAreaView } from "react-native-safe-area-context";

import TopBarNav from '../../components/TopBarNav';

export default function Notifications() {

    return(
        <SafeAreaView style={{ flex: 1 }}>

            <TopBarNav 
                title="Notificações"
            />

            <DescriptionScreen
                image={require('../../assets/ilustrations/empty-notifications.png')}
                text="Você não possui notificações"
            />

        </SafeAreaView>
    )
}