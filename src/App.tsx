import React from "react"
import { Route, Routes } from "react-router-dom"
import Navigation from "./components/Navigation"

import FavoritePage from "./pages/FavoritePage"
import MainPage from "./pages/MainPage"
import ProductPage from "./pages/ProductPage"

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path={"/product/:id"} element={<ProductPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
      </Routes>
    </>
  )
}

export default App
