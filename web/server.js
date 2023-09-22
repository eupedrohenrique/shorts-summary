import axios from "axios"

export const server = axios.create({
  baseURL: "https://app-shorts-summary.vercel.app",
})
