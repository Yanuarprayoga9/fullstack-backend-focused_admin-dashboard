import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { build } from 'vite'

export const api = createApi({
    baseQuery:fetchBaseQuery({baseUrl: "http://localhost:5001/"}),
    reducerPath:"adminApi",
    endpoints:(build) => ({
        getUser:build.query({
            query:(id) => `general/user/${id}`
        })
    })
})