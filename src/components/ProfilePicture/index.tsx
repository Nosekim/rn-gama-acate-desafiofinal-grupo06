import { FramePicture, Picture } from './styles'
import { FontAwesome5 } from '@expo/vector-icons'; 

interface IPicture {
    image: string; 
}

export default function ProfilePicture({ image }: IPicture) {

    const showPhoto = () => {

        if(image !== "")
            return <Picture source={{ uri: image }} />;

        return <FontAwesome5 name="user-alt" size={72} color="#59575b" />
    }

    return(
        <FramePicture style={{ elevation: 3 }}>

            { showPhoto() }

        </FramePicture>
    )
}
