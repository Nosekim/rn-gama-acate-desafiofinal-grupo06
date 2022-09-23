import { Modal, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { IAppState } from '../../types';

import { ModalFrame, ModalBody } from './styles';
import { TextContent } from '../../global/GlobalStyles';

import { changeStatusError } from '../../store/modules/info/reducer';

export default function ShowError() {

    const dispatch = useDispatch();

    const { showError, msgError } = useSelector((state: IAppState) => state.info);

    const closeModal = () => dispatch(changeStatusError(false));

    return(
        <Modal
            animationType='fade'
            visible={showError}
            onRequestClose={() => closeModal()}
            transparent={true}
        >

            <ModalFrame
                onPress={() => closeModal()}
            >

                <ModalBody>

                    <TextContent>{ msgError }</TextContent>

                    <TouchableOpacity
                        style={{ padding: 5 }}
                        activeOpacity={.4}
                        onPress={() => closeModal()}
                    >
                        <TextContent style={{ fontWeight: 'bold' }}>OK</TextContent>
                    </TouchableOpacity>

                </ModalBody>

            </ModalFrame>

        </Modal>
    )
}