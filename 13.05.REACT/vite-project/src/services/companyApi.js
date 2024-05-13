import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const customersApi = createApi({
  reducerPath: "customersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://northwind.vercel.app/api/" }),
  endpoints: (builder) => ({
    getAllCustomers: builder.query({
      query: () => `customers`,
    }),
    getCustomersByID: builder.query({
      query: (id) => `customers/${id}`,
    }),
    deleteCustomers: builder.mutation({
      query: (id) => ({
        url: `customers/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useGetAllCustomersQuery, useGetCustomersByIDQuery,useDeleteCustomersMutation } = customersApi;
