import axios from "axios"
import { API_BASE_URL } from "./vars"

export const handleRefreshToken = async () => {
  const login_time = localStorage.getItem("login_time")

  if (login_time) {
    const previous = new Date(login_time)
    const now = new Date()

    if (now.getTime() - previous.getTime() >= 10 * 60 * 1000) {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("refresh_token")}`
      }
      const res = await axios.post(
        `${API_BASE_URL}token/refresh`,
        {},
        { headers }
      )

      console.log(res)

      localStorage.setItem("login_time", new Date())
      localStorage.setItem("jwt", res.data.access_token)
    }
  }
}

export const getUserCourses = async () => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("jwt")}`
  }
  const res = await axios.post(
    `${API_BASE_URL}userRecCourse`,
    {},
    { headers: headers }
  )

  console.log(res)

  return res.data
}
