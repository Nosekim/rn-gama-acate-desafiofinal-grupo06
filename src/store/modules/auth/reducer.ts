import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: true
}

const AuthReducer = createSlice({
    name: 'authReducer',
    initialState,
    reducers: {}
})

export default AuthReducer.reducer;