import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export type TUser = {
    _id: string;
    name:string;
    email:string;
    role: string;
}
type TAuthState = {
    user: null | TUser;
    token: null | string
}

const initialState: TAuthState = {
    user: null,
    token: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLogin: (state, action) => {
            const { user, token } = action.payload;
            state.user = user,
                state.token = token
        },
        logOut: (state) => {
            state.user = null
            state.token = null
        }
    }
})

export const { setLogin, logOut } = authSlice.actions;
export default authSlice.reducer

export const useCurrentToken = (state: RootState) => state.auth.token;
export const selectCurrentUser = (state: RootState) => state.auth.user;