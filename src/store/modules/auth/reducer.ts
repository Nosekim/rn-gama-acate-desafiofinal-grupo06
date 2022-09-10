import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: false
}

const AuthReducer = createSlice({
    name: 'authReducer',
    initialState,
    reducers: {}
})

interface IsLoggedInState {
    isLoggedIn: boolean;
}

export const IsLoggedInData = (state: IsLoggedInState) => state.isLoggedIn

export default AuthReducer.reducer;