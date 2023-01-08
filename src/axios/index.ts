import axios from "axios"

console.log()

export default axios.create({
  baseURL: "http://0.0.0.0:8000/api/",
})
