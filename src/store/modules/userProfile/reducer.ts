import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUserProfile } from "../../../types";

const initialState = {
    idUser: "", 
    name: "",
    photoUser: "",
    category: "",
    stacks: [],
    state: "",
    description: ""
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
    
  },
});

export const {  
    changeIdUser,  
    changeName } = UserReducer.actions;

export default UserReducer.reducer;
