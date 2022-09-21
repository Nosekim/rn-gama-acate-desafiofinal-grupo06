import { configureStore, combineReducers } from "@reduxjs/toolkit";

import AuthReducer from './modules/auth/reducer';
import DevsDataReducer from './modules/devsData/reducer';
import InfoReducer from './modules/info/reducer';

const store = configureStore({
    reducer: combineReducers({
        auth: AuthReducer,
        devs: DevsDataReducer,
        info: InfoReducer
    }) 
})

export default store;