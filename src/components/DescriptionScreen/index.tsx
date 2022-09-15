import { Image, ImageSourcePropType } from "react-native";
import { ContainerDescription, TextDescription } from "./styles";

interface IDescriptionProps {
    image: ImageSourcePropType;
    text: string;
}

export default function DescriptionScreen({ image, text }: IDescriptionProps) {

    return(
        <ContainerDescription>

            <Image source={image} />

            <TextDescription>{ text }</TextDescription>

        </ContainerDescription>
    )
}