import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const headers = {
 "x-rapidapi-host": "imdb8.p.rapidapi.com",
 "x-rapidapi-key": "184f4239a9msh030117eece187a5p1fc214jsn1467448998e9"
};

export const moviesApi = createApi({
 reducerPath: 'moviesApi',
 baseQuery: fetchBaseQuery({ baseUrl: 'https://imdb8.p.rapidapi.com' }),
 endpoints: (builder) => ({
  fetchMovies: builder.query({
   query: (title) => ({
    url: `/title/find?q=${title}`,
    method: 'GET',
    headers
   })
  }),
 })
});

export const { useFetchMoviesQuery } = moviesApi;