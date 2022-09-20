import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IAuth } from '../../../types';

const initialState = {
    isLoggedIn: false,
    loginMethod: '',
    email: '',
    password: '',
    showPassword: false
}

const AuthReducer = createSlice({
    name: 'authReducer',
    initialState,
    reducers: {
        changeEmail: (state: IAuth, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        changePassword: (state: IAuth, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
        changeShowPassword: (state: IAuth, action: PayloadAction<boolean>) => {
            state.showPassword = action.payload
        }
    }
})

export const { changeEmail, changePassword, changeShowPassword } = AuthReducer.actions;

export default AuthReducer.reducer;