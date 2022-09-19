import { ScrollView, View } from 'react-native';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
import { LinearGradient } from 'expo-linear-gradient';

import { heightScreen } from "../../global/GlobalStyles";

import styles, { DevCard, FirstLine, ListDevStacks, MainData, TitleStacks } from "../DevsList/styles";

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

export default function LoadingDevsList() {

    const numberBlocks = Math.round(heightScreen/160) + 1;

    const blocks = Array(numberBlocks).fill('');

    const loadPill = () => <ShimmerPlaceholder style={{ width: 80, height: 25, borderRadius: 13, marginVertical: 5, marginRight: 10 }} />

    return(
        <ScrollView contentContainerStyle={styles.container}>

            {
                blocks.map((item, index) => (
                    <DevCard key={`load${index}`}>

                        <FirstLine>

                            <MainData>

                                <ShimmerPlaceholder style={styles.photoDev} />

                                <View>

                                    <ShimmerPlaceholder style={{ width: 180, height: 17, marginBottom: 8 }} />

                                    <ShimmerPlaceholder style={{ width: 100, height: 14 }} />

                                </View>

                            </MainData>

                            <ShimmerPlaceholder style={{ width: 20, height: 20 }} />

                        </FirstLine>    

                        <TitleStacks>principais tecnologias</TitleStacks>

                        <ListDevStacks>
                            
                            { loadPill() }
                            { loadPill() }
                            { loadPill() }

                        </ListDevStacks>

                    </DevCard>
                ))
            }

        </ScrollView>
    )
}