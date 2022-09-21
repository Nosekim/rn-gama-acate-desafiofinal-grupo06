import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IInfoProcess } from "../../../types";

const initialState = {
  showError: false,
  msgError: "",
  processingAction: false
};

const InfoReducer = createSlice({
  name: "infoReducer",
  initialState,
  reducers: {
    changeStatusError: (state: IInfoProcess, action: PayloadAction<boolean>) => {
      state.showError = action.payload;
    },
    changeMsgError: (state: IInfoProcess, action: PayloadAction<string>) => {
        state.msgError = action.payload;
    },
    changeProcessingAction: (state: IInfoProcess, action: PayloadAction<boolean>) => {
      state.processingAction = action.payload;
    },
  },
});

export const { 
  changeStatusError, 
  changeMsgError,
  changeProcessingAction } = InfoReducer.actions;

export default InfoReducer.reducer;
