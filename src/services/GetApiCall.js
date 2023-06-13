import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const getApiCall = createApi({
    reducerPath:'getApiCall',
    baseQuery:fetchBaseQuery({baseUrl:'https://fakestoreapi.com'}),
    endpoints: (builder) =>({
        getData: builder.query({
            query:()=>({
                url:'products',
                method:'get'
            }),
        }),
        getDataById: builder.query({
            query:(id)=>({
                url:`products/${id}`,
                method:'get'
            }),
        }),
        addNewPost:builder.mutation({
            query:(data)=>({
                url:`products`,
                method:'post',
                body:data
            }),
        }),
        deletePost:builder.mutation({
            query:(id)=>({
                url:`products/${id}`,
                method:'delete',
            }),
        }),
    })
})
export const {useGetDataQuery,useGetDataByIdQuery,useAddNewPostMutation,useDeletePostMutation} = getApiCall;