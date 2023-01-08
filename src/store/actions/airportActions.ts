import { Dispatch } from "@reduxjs/toolkit"
import axios from "../../axios"

export const fetchAirports = () => {
  return (dispatch: Dispatch) => {
    try {
      axios.get("airport")
    } catch (e) {}
  }
}
