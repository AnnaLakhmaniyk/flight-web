import axios from "axios"
import React, { ChangeEvent, useState, MouseEvent, useEffect } from "react"
import { useFetchCategoriElQuery } from "../store/products/productsApi"

export default function ProductFilter() {
  const [filter, setFilter] = useState(" ")
  const [categori, setCategori] = useState([])

  const { data } = useFetchCategoriElQuery(filter)
  console.log(data)

  // if (isLoading) return <p className="text-center">Loding...</p>
  useEffect(() => {
    fetchCategori()
  }, [])

  async function fetchCategori() {
    const response = await axios.get(
      "https://fakestoreapi.com/products/categories"
    )
    setCategori(response.data)
  }

  const changeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value)
  }

  const clearHandler = (event: MouseEvent<HTMLButtonElement>) => {
    setFilter("")
  }

  return (
    <div className="border mb-2 p-2">
      <span className="fond-bold mr-2">Filter</span>
      <select
        name="types"
        className="px-2 py-1 border mr-2"
        onChange={changeHandler}
        value={filter}
      >
        <option disabled className="text-gray-500" value="">
          Type
        </option>
        {categori?.map((d) => (
          <option key={d} className="text-gray-500">
            {d}
          </option>
        ))}
      </select>
      {filter && (
        <button
          className="py-1 px-4 border bg-red-800 text-white rounded"
          onClick={clearHandler}
        >
          &times;
        </button>
      )}
    </div>
  )
}
