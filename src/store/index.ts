import { configureStore, combineReducers } from "@reduxjs/toolkit";

import AuthReducer from './modules/auth/reducer';
import DevsDataReducer from './modules/devsData/reducer';

const store = configureStore({
    reducer: combineReducers({
        auth: AuthReducer,
        devs: DevsDataReducer
    }) 
})

export default store;