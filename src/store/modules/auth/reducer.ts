import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IAuth } from "../../../types";

const initialState = {
  isLoggedIn: false,
  loginMethod: "",
  email: "",
  password: "",
  showPassword: false,
  recoveringPassword: false,
  apolloReady: false,
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
    changeRecoveringPassword: (
      state: IAuth,
      action: PayloadAction<boolean>
    ) => {
      state.recoveringPassword = action.payload;
    },
    changeApolloReady: (state: IAuth, action: PayloadAction<boolean>) => {
      state.apolloReady = action.payload;
    },
  },
});

export const {
  changeEmail,
  changePassword,
  changeShowPassword,
  changeIsLoggedIn,
  changeLoginMethod,
  changeRecoveringPassword,
  changeApolloReady,
} = AuthReducer.actions;

export default AuthReducer.reducer;
