import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

import { IProduct } from "../../models"

export const productsApi = createApi({
  reducerPath: "product/api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
  endpoints: (build) => ({
    fetchProduct: build.query<IProduct[], string>({
      query: () => ({
        url: "/products",
      }),
    }),
  }),
})

export const { useFetchProductQuery } = productsApi
