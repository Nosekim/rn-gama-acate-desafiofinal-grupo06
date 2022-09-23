import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUserProfile } from "../../../types";

const initialState = {
  idUser: "",
  name: "",
  photoUser: "",
  showModalPicture: false,
  loadingPicture: false,
  category: "",
  userStacks: [],
  state: "",
  description: "",
  token: ""
};

const UserReducer = createSlice({
  name: "UserReducer",
  initialState,
  reducers: {
    changeIdUser: (state: IUserProfile, action: PayloadAction<string>) => {
      state.idUser = action.payload;
    },
    changeName: (state: IUserProfile, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setToken: (state: IUserProfile, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    changeCategory: (state: IUserProfile, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    addStack: (state: IUserProfile, action: PayloadAction<string>) => {
      state.userStacks = [...state.userStacks, action.payload];
    },
    removeStack: (state: IUserProfile, action: PayloadAction<string>) => {
      state.userStacks = state.userStacks.filter(
        (item) => item !== action.payload
      );
    },
    changeDescription: (state: IUserProfile, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
    changeShowModalPicture: (
      state: IUserProfile,
      action: PayloadAction<boolean>
    ) => {
      state.showModalPicture = action.payload;
    },
    changePhotoUser: (state: IUserProfile, action: PayloadAction<string>) => {
      state.photoUser = action.payload;
    },
    changeLoadingPicture: (
      state: IUserProfile,
      action: PayloadAction<boolean>
    ) => {
      state.loadingPicture = action.payload;
    },
  },
});

export const {
  changeIdUser,
  changeName,
  changeCategory,
  addStack,
  removeStack,
  changeShowModalPicture,
  changePhotoUser,
  changeDescription,
  changeLoadingPicture,
  setToken
} = UserReducer.actions;

export default UserReducer.reducer;
