/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { setLogin } from "../feature/auth/authSlice";
import { toast } from "sonner";

const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.token;
        if (token) {
            headers.set("authorization", `${token}`)
        }
        return headers
    }
})
const baseQueryWithRefreshToken = async (args, api, extraOptions): Promise<any> => {
    const result = await baseQuery(args, api, extraOptions)
    if (result.error?.status === 404) {
        toast.error("User Not Found !")
    }

    if (result.error?.status === 401) {
        //sending Refresh token
        const res = await fetch('http://localhost:5000/api/v1/auth/refresh-token', {
            method: 'POST',
            credentials: "include"
        })
        const data = await res.json()
        const user = (api.getState() as RootState).auth.user;

        api.dispatch(
            setLogin({
                user, token: data.accessToken,
            })
        )
    }
    return result
}

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: baseQueryWithRefreshToken,
    endpoints: () => ({})
})

