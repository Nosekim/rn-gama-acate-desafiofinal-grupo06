import { TouchableHighlight, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { stylesButton } from './styles';

interface ButtonProps {
    textButton: string;
}

function ActionButton({ textButton }: ButtonProps) {

    return(
        <LinearGradient
            colors={['#2BC0E0', '#2382B8']}
            style={stylesButton.container}
        >

            <TouchableHighlight
                style={stylesButton.content}
                activeOpacity={.7}
                onPress={() => false}
                underlayColor='#2BC0E0'
            >
                <Text style={stylesButton.text}>{ textButton }</Text>
            </TouchableHighlight>

        </LinearGradient>
    )
}

export default ActionButton;