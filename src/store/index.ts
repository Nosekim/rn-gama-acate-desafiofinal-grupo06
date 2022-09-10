import { configureStore } from "@reduxjs/toolkit";

import AuthReducer from './modules/auth/reducer';

const store = configureStore({
    reducer: AuthReducer
})

export default store;