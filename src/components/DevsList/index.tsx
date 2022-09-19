import { View, FlatList, Image, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesome } from '@expo/vector-icons';

import { addFavorite, removeFavorite } from "../../store/modules/devsData/reducer";

import { IDev, IAppState } from "../../types";

import styles, { CategoryDev, DevCard, FirstLine, ListDevStacks, MainData, NameDev, StackPill, TitleStacks } from "./styles";

import LoadingDevsList from "../LoadingDevsList";

interface IDevsList {
    data: IDev[];
}

export default function DevsList({ data }: IDevsList) {

    const dispatch = useDispatch();
 
    const { categories, stacks, favorites, loadingData } = useSelector((state: IAppState) => state.devs);

    if(loadingData)
        return <LoadingDevsList />;

    const renderCategoryDev = (id: number) => {

        const category = categories.find(item => item.id === id);

        if(category)
            return <CategoryDev>{ category.name }</CategoryDev>

        return false;    
    }

    const renderStackDev = (id: number) => {

        const stack = stacks.find(item => item.id === id);

        if(stack)
            return <StackPill>{ stack.label }</StackPill>

        return false; 
    }

    const manageFavorites = (id: number) => {

        if(favorites.includes(id))
            dispatch(removeFavorite(id));
        else
            dispatch(addFavorite(id));    
    }

    const _renderItem = (item: IDev) => (
        <DevCard>

            <FirstLine>

                <MainData>

                    <Image 
                        style={styles.photoDev}
                        source={{ uri: item.photo }}
                    />

                    <View>

                        <NameDev>{ item.name }</NameDev>

                        { renderCategoryDev(item.category) }

                    </View>

                </MainData>

                <TouchableOpacity
                    onPress={() => manageFavorites(item.id)}
                    activeOpacity={.3}
                >

                    <FontAwesome 
                        name={favorites.includes(item.id) ? "heart" : "heart-o"} 
                        size={20} 
                        color={favorites.includes(item.id) ? "#f14a41" : "#bfbfbf"} 
                    />

                </TouchableOpacity>

            </FirstLine>
            
            <TitleStacks>principais tecnologias</TitleStacks>

            <ListDevStacks>
                { renderStackDev(item.stack) }
            </ListDevStacks>

        </DevCard>
    )

    return(
        <View style={{ flex: 1 }}>
            
            <FlatList
                contentContainerStyle={styles.container}
                data={data}
                renderItem={({ item }) => _renderItem(item)}
                keyExtractor={item => item.id + item.name}
            />

        </View>
    )
}
