import { configureStore } from "@reduxjs/toolkit"

import { usersReducer } from "./slices/airportSlise"

export const store = configureStore({
  reducer: {
    airport: usersReducer,
  },
})
