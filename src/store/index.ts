import { configureStore, combineReducers } from "@reduxjs/toolkit";

import AuthReducer from './modules/auth/reducer';
import DevsDataReducer from './modules/devsData/reducer';
import InfoReducer from './modules/info/reducer';
import UserReducer from './modules/userProfile/reducer';

const store = configureStore({
    reducer: combineReducers({
        auth: AuthReducer,
        devs: DevsDataReducer,
        info: InfoReducer,
        user: UserReducer
    }) 
})

export default store;