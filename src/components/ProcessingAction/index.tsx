import { Modal, View, ActivityIndicator } from 'react-native';
import { TextContent } from '../../global/GlobalStyles';
import { useSelector } from 'react-redux';

import { IInfoState } from '../../types';

interface IProcessingAction {
    text: string;
}

export default function ProcessingAction({ text }: IProcessingAction) {

    const { processingAction } = useSelector((state: IInfoState) => state.info);

    return(
        <Modal
            animationType='slide'
            visible={processingAction}
            transparent={true}
        >

            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,.7)' }}>

                <ActivityIndicator size="large" color="#2ab2dd" />

                <TextContent>{ text }</TextContent>

            </View>

        </Modal>
    )
}