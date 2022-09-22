import { Modal, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';

import { IAppState } from '../../types';

import { ModalFrame, ModalBody } from '../ShowError/styles';

import { changeShowModalPicture, changePhotoUser } from '../../store/modules/userProfile/reducer';
import { changeStatusError, changeMsgError } from '../../store/modules/info/reducer';

export default function ModalSelectPicture() {

    const dispatch = useDispatch();

    const { showModalPicture } = useSelector((state: IAppState) => state.user);

    const closeModal = () => dispatch(changeShowModalPicture(false));

    const showMsgError = (text: string) => {

        dispatch(changeMsgError(text));

        setTimeout(() => { dispatch(changeStatusError(true)) }, 20);
    }

    const uploadImage = async (foto: any) => {

        let tamanhoImagem = foto.width;
    
        if(tamanhoImagem > 600)
            tamanhoImagem = 600;

        const fotoAjustada = await ImageManipulator.manipulateAsync(
            foto.uri, [{ resize: { width: tamanhoImagem, height: tamanhoImagem } }], { compress: .9 }
        );

        if(fotoAjustada) {

            dispatch(changePhotoUser(fotoAjustada.uri))
            closeModal()
        }
    }

    const accessGalery = async () => {

        try {
    
          const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
          if (status !== 'granted') {

            showMsgError("Permissão não concedida! Não foi possível acessar sua galeria de fotos");
    
            return false;
          }
    
          try {
    
            const foto = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 1
            });
    
                if(!foto.cancelled) 
                    uploadImage(foto);
    
          } catch(error) {
            showMsgError("Erro na tentativa de fazer upload da foto do seu perfil");
          }
    
        } catch(error) {
            showMsgError("Permissão não concedida! Não foi possível acessar sua galeria de fotos");
        }
    }

    const accessCamera = async () => {

		try {

            const { status } = await ImagePicker.requestCameraPermissionsAsync();

            if(status !== 'granted') {

                showMsgError("Permissão não concedida! Não foi possível acessar sua câmera");    

                return false;
            }

            try {

				const foto = await ImagePicker.launchCameraAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.Images,
                    allowsEditing: true,
                    aspect: [1, 1],
                    quality: 1
                });

    		    if(!foto.cancelled) 
                    uploadImage(foto);

            } catch(error) {
                showMsgError("Erro na tentativa de fazer upload da foto do seu perfil");
            }

        } catch(error) {
            showMsgError("Permissão não concedida! Não foi possível acessar sua câmera");  
        }
	}

    return(
        <Modal
            animationType='fade'
            visible={showModalPicture}
            onRequestClose={() => closeModal()}
            transparent={true}
        >

            <ModalFrame
                onPress={() => closeModal()}
            >

                <ModalBody style={{ width: 270, paddingTop: 0 }}>

                    <TouchableOpacity
                        onPress={() => accessCamera()}
                        style={styles.option}
                    >

                        <FontAwesome 
                            name="camera" 
                            size={20} 
                            color="rgba(255,255,255,.7)" 
                        />

                        <Text style={styles.textOption}>Câmera</Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => accessGalery()}
                        style={styles.option}
                    >

                        <FontAwesome 
                            name="picture-o" 
                            size={20} 
                            color="rgba(255,255,255,.7)" 
                        />

                        <Text style={styles.textOption}>Galeria</Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => closeModal()}
                        style={styles.option}
                    >

                        <FontAwesome 
                            name="close" 
                            size={20} 
                            color="rgba(255,255,255,.5)"
                        />

                        <Text style={[styles.textOption, { opacity: .7 }]}>Fechar</Text>

                    </TouchableOpacity>

                </ModalBody>

            </ModalFrame>

        </Modal>
    )
}

const styles = StyleSheet.create({
    option: {
        width: '100%',
        height: 60,
        borderBottomColor: 'rgba(255,255,255,.05)',
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textOption: {
        color: '#fff',
        fontSize: 15,
        marginLeft: 12
    }
})