import { Text, TouchableOpacity  } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

interface LinkProps {
    textLink: string;
}

export default function Link({ textLink }: LinkProps) {

    return(
        <TouchableOpacity
            style={{ marginTop: 10, height: 48, paddingHorizontal: 8, justifyContent: 'center' }}
            onPress={() => false}
            activeOpacity={.7}
        >

            <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#1ea9c8' }}>{ textLink }</Text>

        </TouchableOpacity>
    )
}
