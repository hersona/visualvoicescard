import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

var basePath = process.env.PATH_BASE_SERVICE_CARDS;

export const cardTokenApi = createApi({
  reducerPath: "cardTokenApi",
  baseQuery: fetchBaseQuery({ baseUrl: basePath }),
  endpoints: (build) => ({
    fecthTokenApi: build.mutation({
      query: () => ({
        url: "/token",
        method: "POST",
        body: "grant_type=password&username=hersonEder@gmail.com&password=12345$$",
        headers: {
          "Content-type": "application/x-www-form-urlencoded",
        },
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});
export const { useFecthTokenApiMutation } = cardTokenApi;

export const cardVerifyCodeApi = createApi({
  reducerPath: "cardVerifyCodeApi",
  baseQuery: fetchBaseQuery({ baseUrl: basePath + "/api/AppCode" }),
  endpoints: (build) => ({
    fetchCardVerify: build.mutation({
      query: ({accesTokenApi, payload}) => ({
        url: "/ValidateAppCode",
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json",
          "Authorization": "Bearer " + accesTokenApi,
        },
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});
export const { useFetchCardVerifyMutation } = cardVerifyCodeApi;