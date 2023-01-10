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

    fetchCategori: build.query<string[], string>({
      query: () => ({
        url: "products/categories",
      }),
    }),

    fetchCategoriEl: build.query<IProduct[], string>({
      query: (categori: string) => ({
        url: `/products/category/${categori}`,
      }),
    }),
  }),
})

export const {
  useFetchProductQuery,
  useFetchCategoriQuery,
  useFetchCategoriElQuery,
} = productsApi
