import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUserProfile } from "../../../types";

const initialState = {
  idUser: "",
  name: "",
  photoUser: "",
  category: "",
  stacks: [],
  state: "",
  description: "",
  token: "",
  email: "",
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
    changeUserEmail: (state: IUserProfile, action: PayloadAction<string>) => {
      state.email = action.payload;
    changeCategory: (state: IUserProfile, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    addStack: (state: IUserProfile, action: PayloadAction<string>) => {
      state.userStacks = [...state.userStacks, action.payload];
    },
    removeStack: (state: IUserProfile, action: PayloadAction<string>) => {
      state.userStacks = state.userStacks.filter(item => item !== action.payload);
    },
    changeDescription: (state: IUserProfile, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
    changeShowModalPicture: (state: IUserProfile, action: PayloadAction<boolean>) => {
      state.showModalPicture = action.payload;
    },
    changePhotoUser: (state: IUserProfile, action: PayloadAction<string>) => {
      state.photoUser = action.payload;
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
    changeDescription,setToken, changeUserEmail } = UserReducer.actions;

export default UserReducer.reducer;
