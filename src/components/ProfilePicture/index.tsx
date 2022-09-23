import { View, Image, TouchableHighlight } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome5 } from '@expo/vector-icons'; 

import styles from './styles';
import { stylesActionButton } from '../../global/GlobalStyles';

interface IPicture {
    image: string; 
    updatePic: boolean;
}

import { changeShowModalPicture } from '../../store/modules/userProfile/reducer';

export default function ProfilePicture({ image, updatePic }: IPicture) {

    const dispatch = useDispatch();

    const showPhoto = () => {

        if(image !== "")
            return <Image style={styles.picture} source={{ uri: image }} />;

        return <FontAwesome5 name="user-alt" size={72} color="#59575b" />
    }

    return(
        <View style={styles.frame}>

            { showPhoto() }

            {
                updatePic &&
                (<LinearGradient
                    colors={['#2BC0E0', '#2382B8']}
                    style={[stylesActionButton.roundedButton, { right: -5, bottom: -5 }]}
                >

                    <TouchableHighlight
                        style={[stylesActionButton.content, { borderRadius: 22 }]}
                        activeOpacity={.7}
                        onPress={() => dispatch(changeShowModalPicture(true))}
                        underlayColor='#2BC0E0'
                    >
                        
                        <FontAwesome5 
                            name="camera" 
                            size={20} 
                            color="#fff" 
                        />

                    </TouchableHighlight>

                </LinearGradient>)
            }    

        </View>
    )
}
