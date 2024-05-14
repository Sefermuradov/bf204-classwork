import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (builder) => ({
    getAllmovies: builder.query({
      query: () => `movies`,
    }),
    getmoviesByID: builder.query({
      query: (id) => `movies/${id}`,
    }),
    DeleteMovies: builder.mutation({
      query: (id) => ({
        url: `movies/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllmoviesQuery,
  useGetmoviesByIDQuery,
  useDeleteMoviesMutation,
} = moviesApi;
