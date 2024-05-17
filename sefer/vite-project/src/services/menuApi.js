import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const menuApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/" }),
  endpoints: (builder) => ({
    getAllMenus: builder.query({
      query: () => `/menus`,
    }),
    getMenubyId: builder.query({
      query: (id) => `/menus/${id}`,
    }),
    deleteMenus: builder.mutation({
      query: (id) => ({
        url: `/menus/${id}`,
        method: "DELETE",
      }),
    }),
    postMenu: builder.mutation({
      query: (payload) => ({
        url: `/menus`,
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const {
  useGetAllMenusQuery,
  useGetMenubyIdQuery,
  useDeleteMenusMutation,
  usePostMenuMutation,
} = menuApi;
