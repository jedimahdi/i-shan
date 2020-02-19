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

const makeInstance = () => {
  const instance = axios.create({
    baseURL: API_BASE_URL
  })
  instance.interceptors.request.use(
    function(config) {
      if (localStorage.getItem("login_time")) {
        const previous = new Date(localStorage.getItem("login_time"))
        const now = new Date()

        if (now.getTime() - previous.getTime() >= 1 * 10 * 1000) {
          console.log("here")
          const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("refresh_token")}`
          }
          const source = axios.CancelToken.source()

          axios
            .post(
              `${API_BASE_URL}token/refresh`,
              { cancelToken: source.token },
              { headers }
            )
            .then(res => {
              localStorage.setItem("login_time", new Date())
              localStorage.setItem("jwt", res.data.access_token)
              return config
            })
          // refreshApi.post("token/refresh").then(res => {
          //   console.log(res);
          // });
        } else {
          return config
        }
      } else {
        return config
      }
    },
    function(error) {
      return Promise.reject(error)
    }
  )

  return instance
}
const instance = makeInstance()

const makeAuthApi = api => {
  api.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
    "jwt"
  )}`
  return api
}

const makeRefreshApi = api => {
  api.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
    "refresh_token"
  )}`
  return api
}

export const authApi = makeAuthApi(instance)
export const refreshApi = makeRefreshApi(instance)
export default instance
