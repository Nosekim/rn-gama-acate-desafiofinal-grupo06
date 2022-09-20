import { Text, TouchableOpacity  } from "react-native";
import { useNavigation } from '@react-navigation/native';

interface LinkProps {
    textLink: string;
    screenTarget: string;
}

export default function Link({ textLink, screenTarget }: LinkProps) {

    const nav = useNavigation();

    return(
        <TouchableOpacity
            style={{ marginTop: 10, height: 48, paddingHorizontal: 8, justifyContent: 'center' }}
            onPress={() => nav.navigate(screenTarget)}
            activeOpacity={.7}
        >

            <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#1ea9c8' }}>{ textLink }</Text>

        </TouchableOpacity>
    )
}
