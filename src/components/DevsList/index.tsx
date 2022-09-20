import { View, FlatList, Image, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesome } from "@expo/vector-icons";

import {
  addFavorite,
  removeFavorite,
} from "../../store/modules/devsData/reducer";

import { IDev, IAppState } from "../../types";

import styles, {
  CategoryDev,
  DevCard,
  FirstLine,
  ListDevStacks,
  MainData,
  NameDev,
  StackPill,
  TitleStacks,
} from "./styles";

import LoadingDevsList from "./loading";

interface IDevsList {
  data: IDev[];
  typeList: string;
  apolloData: any;
}

export default function DevsList({ data, typeList, apolloData }: IDevsList) {
  const dispatch = useDispatch();

  const { categories, stacks, favorites, loadingData } = useSelector(
    (state: IAppState) => state.devs
  );

  if (loadingData) return <LoadingDevsList />;

  const renderCategoryDev = (id: number) => {
    const category = categories.find((item) => item.id === id);

    if (category) return <CategoryDev>{category.name}</CategoryDev>;

    return false;
  };

  const renderStackDev = (id: number) => {
    const stack = stacks.find((item) => item.id === id);

    if (stack) return <StackPill>{stack.label}</StackPill>;

    return false;
  };

  const manageFavorites = (id: number) => {
    if (favorites.includes(id)) dispatch(removeFavorite(id));
    else dispatch(addFavorite(id));
  };

  const _renderItem = (item: IDev) => (
    <DevCard>
      <FirstLine>
        <MainData>
          <Image style={styles.photoDev} source={{ uri: item.photo }} />

          <View>
            <NameDev>{item.name}</NameDev>

            <CategoryDev>{item.job}</CategoryDev>
          </View>
        </MainData>

        <TouchableOpacity
          //onPress={() => manageFavorites(item.id)}
          activeOpacity={0.3}
        >
          <FontAwesome
            //name={favorites.includes(item.id) ? "heart" : "heart-o"}
            name="heart-o"
            size={20}
            color="#bfbfbf"
            //color={favorites.includes(item.id) ? "#f14a41" : }
          />
        </TouchableOpacity>
      </FirstLine>

      <TitleStacks>principais tecnologias</TitleStacks>

      <ListDevStacks>
        {item.stack.map((s) => (
          <StackPill>{s.name}</StackPill>
        ))}
      </ListDevStacks>
    </DevCard>
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        contentContainerStyle={styles.container}
        data={apolloData.devs}
        renderItem={({ item }) => _renderItem(item)}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
