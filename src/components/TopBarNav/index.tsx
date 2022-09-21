import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

import { TopBar, BackButton, TitleBar } from './styles';

interface ITopBar {
    title: string;
}

export default function TopBarNav({ title }: ITopBar) {

    const nav = useNavigation();

    return(
        <TopBar>

            <BackButton
                onPress={() => nav.goBack()}
                activeOpacity={.5}
            >

                <AntDesign
                    name="left"
                    size={20}
                    color="rgba(255, 255, 255, .3)" 
                />

            </BackButton>

            <TitleBar>{ title }</TitleBar>

        </TopBar>
    )
}