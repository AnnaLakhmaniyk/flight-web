import React from "react"
import { useParams } from "react-router-dom"

export default function ProductPage() {
  const params = useParams<"id">()
  return (
    <div className="container mx-auto pt-5 max-w-[760px]">
      <h1>Product {params.id}</h1>
    </div>
  )
}
