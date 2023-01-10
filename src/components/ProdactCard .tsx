import React from "react"

import { IProduct } from "../models"

interface ProdactCardProp {
  prod: IProduct
  key: number
}

export default function ProdactCard({ prod }: ProdactCardProp) {
  return (
    <li className="mr-4 mb-4 rounded-sm border-2 border-stone-300 p-5">
      <img src={prod.image} alt="product" className="h-40 w-40" />
      <p>{prod.category}</p>
      <p>{prod.price}</p>
    </li>
  )
}
