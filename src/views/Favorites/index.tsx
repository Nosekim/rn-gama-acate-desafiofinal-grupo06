import { useSelector } from "react-redux";
import DescriptionScreen from "../../components/DescriptionScreen";

import { IDevsState, IDev } from "../../types";

import DevsList from "../../components/DevsList";

export default function Favorites() {

    const { devsList, favorites } = useSelector((state: IDevsState) => state.devs)

    if(favorites.length > 0) {

        const favoritesDevs = devsList.filter((item: IDev) => favorites.includes(item.id));
        
        return(
            <DevsList 
                data={favoritesDevs} 
                typeList="favorites"
            />
        )    
    }

    return(
        <DescriptionScreen
            image={require('../../assets/ilustrations/empty-favorites.png')}
            text="Ainda não há devs adicionados aos favoritos"
        />
    )
}