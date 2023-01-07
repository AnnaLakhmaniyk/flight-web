import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IAirport } from "../../models"

interface AirportState {
  loding: boolean
  error: string
  airports: IAirport[]
}

const initialState: AirportState = {
  loding: false,
  error: "",
  airports: [],
}

const airportSlise = createSlice({
  name: "airport",
  initialState,
  reducers: {
    fetchung(state) {
      state.loding = true
    },

    fetchSuccess(state, action: PayloadAction<IAirport[]>) {
      state.loding = false
      state.airports = action.payload
    },
    fetchError(state, action: PayloadAction<Error>) {
      state.loding = false
      state.error = action.payload.message
    },
  },
})

export const usersReducer = airportSlise.reducer
