import React from "react"
// import ReactPaginate from "react-paginate"
import ProdactCard from "../components/ProdactCard "
import ProductFilter from "../components/ProductFilter"

import { useFetchProductQuery } from "../store/products/productsApi"

export default function MainPage() {
  const { isLoading, isError, data } = useFetchProductQuery(" ")

  let content
  if (isLoading) {
    content = <p>Loding...</p>
  } else if (isError) {
    content = <div>Error loading albums.</div>
  } else {
    content = data?.map((prod) => {
      return <ProdactCard prod={prod} key={prod.id} />
    })
  }

  // const pageCount = 10
  // const pageChengeHendler = ({ selected }: { selected: number }) => {
  //   console.log(evt)
  // }

  return (
    <div className="container mx-auto max-w-[760px] pt-5">
      {isError && (
        <p className="text-center text-red-600">Something went wrong...</p>
      )}
      <ProductFilter />

      <ul className="flex flex-row flex-wrap">{content}</ul>

      {/* paginate */}

      {/* <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={pageChengeHendler}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="<"
      /> */}
    </div>
  )
}
