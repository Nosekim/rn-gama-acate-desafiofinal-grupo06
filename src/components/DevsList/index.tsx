import { View, FlatList, Image, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import {
  addFavorite,
  removeFavorite,
  manageSelectDev
} from "../../store/modules/devsData/reducer";

import { IDev, IDevsState } from "../../types";

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

interface IDevsList {
  data: any;
  typeList: string;
}

export default function DevsList({ data, typeList }: IDevsList) {
  const dispatch = useDispatch();

  const nav = useNavigation();

  const { favorites } = useSelector((state: IDevsState) => state.devs);

  const manageFavorites = (id: string) => {

    if (favorites.includes(id)) dispatch(removeFavorite(id));
    else dispatch(addFavorite(id));
  };

  const _renderItem = (item: IDev) => (
    <DevCard
      onPress={() => {
        dispatch(manageSelectDev(item.id));
        nav.navigate("Perfil do Dev")
      }}
      activeOpacity={.7}
    >
      <FirstLine>
        <MainData>
          <Image style={styles.photoDev} source={{ uri: item.photo }} />

          <View>
            <NameDev>{item.name}</NameDev>

            <CategoryDev>{item.job}</CategoryDev>
          </View>
        </MainData>

        <TouchableOpacity
          onPress={() => manageFavorites(item.id)}
          activeOpacity={0.3}
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
        {item.stack.map((s, i) => {
          return (
            <StackPill key={`${item._id}${i}${s.name}`}>{s.name}</StackPill>
          );
        })}
      </ListDevStacks>
    </DevCard>
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        contentContainerStyle={styles.container}
        data={data}
        renderItem={({ item }) => _renderItem(item)}
        keyExtractor={(item) => typeList + item.name + item.id}
      />
    </View>
  );
}
