import DescriptionScreen from "../../components/DescriptionScreen";

export default function Favorites() {

    return(
        <DescriptionScreen
            image={require('../../assets/ilustrations/empty-favorites.png')}
            text="Ainda não há devs adicionados aos favoritos"
        />
    )
}