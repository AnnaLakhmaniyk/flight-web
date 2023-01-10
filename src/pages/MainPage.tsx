import React from "react"
import ProdactCard from "../components/ProdactCard "
import ProductFilter from "../components/ProductFilter"

import { useFetchProductQuery } from "../store/products/productsApi"

export default function MainPage() {
  const { isLoading, isError, data } = useFetchProductQuery(" ")
  console.log(data)

  return (
    <div className="container mx-auto max-w-[760px] pt-5">
      {isError && (
        <p className="text-center text-red-600">Something went wrong...</p>
      )}
      <ProductFilter />

      <ul className="flex flex-row flex-wrap">
        {isLoading && <p className="text-center">Loading...</p>}
        {data?.map((prod) => (
          <ProdactCard prod={prod} key={prod.id} />
        ))}
      </ul>
    </div>
  )
}
