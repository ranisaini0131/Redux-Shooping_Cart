import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const cartApi = createApi({
  reducerPath: 'cart',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/cart' }),
  endpoints: (builder) => ({
    getItems: builder.query({
        query: () => `cart`,
        transformResponse: (response) => response.sort((a, b) => a.id - b.id)
    }),
      
    addItems: builder.mutation({
        query: (item) => ({
        url: 'cart',
        method: 'POST',
            body: {
                item
            }
        }),
        invalidatesTags: ['cart']
    }),
    
    updateItems: builder.mutation({
        query: ({ id, item }) => ({
            url: `cart/${id}`,
            method: 'PATCH',
            body: {
                item
            }
        }),
        invalidatesTags: ['cart']
    }),

    deleteItems: builder.mutation({
        query: (id) => ({
            url: `cart/${id}`,
            method: 'DELETE',
        }),
        invalidatesTags: ['cart']
    }),

  }),
})

export const {useGetItemsQuery, useAddItemsMutation, useUpdateItemsMutation,useDeleteItemsMutation } = cartApi
