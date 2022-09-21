import { Modal, View, ActivityIndicator } from 'react-native';
import { TextContent } from '../../global/GlobalStyles';

interface IProcessingAction {
    text: string;
    visible: boolean;
}

export default function ProcessingAction({ text, visible }: IProcessingAction) {

    return(
        <Modal
            animationType='slide'
            visible={visible}
            transparent={true}
        >

            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,.7)' }}>

                <ActivityIndicator size="large" color="#2ab2dd" />

                <TextContent>{ text }</TextContent>

            </View>

        </Modal>
    )
}