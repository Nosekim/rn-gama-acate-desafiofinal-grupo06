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
    },
  },
});

export const { changeIdUser, changeName, setToken, changeUserEmail } =
  UserReducer.actions;

export default UserReducer.reducer;
