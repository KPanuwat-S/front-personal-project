import axios from "axios";
import { BACKEND_URL } from "../config/env";
import { getAccessToken } from "../utils/localStorage";

axios.defaults.baseURL = BACKEND_URL;

axios.interceptors.request.use(
  (config) => {
    console.log("interceptors");
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log("config", config);
    return config;
  },
  (err) => Promise.reject(err)
);

export default axios;
