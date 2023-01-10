import React from "react"
import { Route, Routes } from "react-router-dom"
import Navigation from "./components/Navigation"

import FavoritePage from "./pages/FavoritePage"
import MainPage from "./pages/MainPage"

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
      </Routes>
    </>
  )
}

export default App
