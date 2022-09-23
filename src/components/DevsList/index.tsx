import { View, FlatList, Image, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
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

interface IDevsList {
  data: any;
  typeList: string;
}

export default function DevsList({ data, typeList }: IDevsList) {
  const dispatch = useDispatch();
  const nav = useNavigation();

  const { favorites } = useSelector((state: IAppState) => state.devs);

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
            <TouchableOpacity
              onPress={() => nav.navigate("Perfil do Dev")}
              activeOpacity={0.3}
            >
              <NameDev>{item.name}</NameDev>
            </TouchableOpacity>

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
