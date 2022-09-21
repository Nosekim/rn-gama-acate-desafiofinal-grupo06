import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IAuth } from "../../../types";

const initialState = {
  isLoggedIn: false,
  loginMethod: "",
  email: "",
  password: "",
  showPassword: false,
  name: "",
  category: "",
  stacks: [],
  state: "",
  description: ""
};

const AuthReducer = createSlice({
  name: "authReducer",
  initialState,
  reducers: {
    changeEmail: (state: IAuth, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    changePassword: (state: IAuth, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    changeShowPassword: (state: IAuth, action: PayloadAction<boolean>) => {
      state.showPassword = action.payload;
    },
    changeIsLoggedIn: (state: IAuth, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    changeLoginMethod: (state: IAuth, action: PayloadAction<string>) => {
      state.loginMethod = action.payload;
    },
    changeName: (state: IAuth, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { 
  changeEmail, 
  changePassword, 
  changeShowPassword, 
  changeIsLoggedIn,
  changeLoginMethod, 
  changeName } = AuthReducer.actions;

export default AuthReducer.reducer;
