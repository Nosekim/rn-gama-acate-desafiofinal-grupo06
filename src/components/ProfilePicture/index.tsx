import { View, Image, TouchableHighlight, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';

import styles from './styles';
import { stylesActionButton } from '../../global/GlobalStyles';

import { changeLoadingPicture } from '../../store/modules/userProfile/reducer';

import { IUserState } from "../../types";

interface IPicture {
    image: string; 
    updatePic: boolean;
}

import { changeShowModalPicture } from '../../store/modules/userProfile/reducer';

export default function ProfilePicture({ image, updatePic }: IPicture) {

    const dispatch = useDispatch();

    const { loadingPicture } = useSelector((state: IUserState) => state.user);

    const showPhoto = () => {

        if(image !== "")
            return(
                <Image 
                    style={styles.picture} 
                    source={{ uri: image }} 
                    onLoad={() => dispatch(changeLoadingPicture(false))}
                />
            )

        return <AntDesign name="github" size={100} color="#fff" />
    }

    return(
        <View style={styles.frame}>

            {
                loadingPicture ? (
                    <View style={[styles.frame, { position: "absolute", zIndex: 10 }]}>
                        <ActivityIndicator size="large" color="#1ea9c8" />
                    </View>    
                ) : null
            }

            { showPhoto() }

            {
                updatePic &&
                !loadingPicture &&
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
