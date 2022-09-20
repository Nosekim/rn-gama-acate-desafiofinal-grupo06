import { Image, ImageSourcePropType } from "react-native";

import { ContainerScreen, TextContent } from "../../global/GlobalStyles";

interface IDescriptionProps {
    image: ImageSourcePropType;
    text: string;
}

export default function DescriptionScreen({ image, text }: IDescriptionProps) {

    return(
        <ContainerScreen>

            <Image source={image} />

            <TextContent>{ text }</TextContent>

        </ContainerScreen>
    )
}