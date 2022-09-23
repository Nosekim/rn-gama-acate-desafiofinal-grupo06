import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  ICategory,
  ICategories,
  IStack,
  IStacks,
  IState,
  IStates,
  IDev,
  IDevsList,
  IFavorites,
  ILoadingData,
} from "../../../types";

const initialState = {
  categories: [],
  stacks: [],
  states: [],
  devsList: [],
  favorites: [],
  loadingData: false,
};

const DevsDataReducer = createSlice({
  name: "devsReducer",
  initialState,
  reducers: {
    listCategories: (state: ICategories, action: PayloadAction<ICategory>) => {
      state.categories = state.categories.concat(action.payload);
    },
    listStacks: (state: IStacks, action: PayloadAction<IStack>) => {
      state.stacks = state.stacks.concat(action.payload);
    },
    listStates: (state: IStates, action: PayloadAction<IState>) => {
      state.states = state.states.concat(action.payload);
    },
    listDevs: (state: IDevsList, action: PayloadAction<IDev>) => {
      state.devsList = state.devsList.concat(action.payload);
    },
    addFavorite: (state: IFavorites, action: PayloadAction<number>) => {
      state.favorites = [...state.favorites, action.payload];
    },
    removeFavorite: (state: IFavorites, action: PayloadAction<number>) => {
      state.favorites = state.favorites.filter(
        (item) => item !== action.payload
      );
    },
    changeLoadingStatus: (
      state: ILoadingData,
      action: PayloadAction<boolean>
    ) => {
      state.loadingData = action.payload;
    },
  },
});

export const {
  listCategories,
  listStacks,
  listStates,
  listDevs,
  addFavorite,
  removeFavorite,
  changeLoadingStatus,
} = DevsDataReducer.actions;

export default DevsDataReducer.reducer;
