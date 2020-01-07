import axios from "axios";
import { API_BASE_URL } from "../../vars";

const makeInstance = () => {
  const instance = axios.create({
    baseURL: API_BASE_URL
  });
  instance.interceptors.request.use(
    function(config) {
      if (localStorage.getItem("login_time")) {
        const previous = new Date(localStorage.getItem("login_time"));
        const now = new Date();

        if (now.getTime() - previous.getTime() >= 10 * 60 * 1000) {
          const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("refresh_token")}`
          };
          axios
            .post(`${API_BASE_URL}token/refresh`, {}, { headers })
            .then(res => {
              console.log(res);
              localStorage.setItem("login_time", new Date());
              localStorage.setItem("jwt", res.data.access_token);
            });
          // refreshApi.post("token/refresh").then(res => {
          //   console.log(res);
          // });
        }
      }
      return config;
    },
    function(error) {
      return Promise.reject(error);
    }
  );

  return instance;
};
const instance = makeInstance();

const makeAuthApi = api => {
  api.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
    "jwt"
  )}`;
  return api;
};

const makeRefreshApi = api => {
  api.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
    "refresh_token"
  )}`;
  return api;
};

export const authApi = makeAuthApi(instance);
export const refreshApi = makeRefreshApi(instance);
export default instance;
