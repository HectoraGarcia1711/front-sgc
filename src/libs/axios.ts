import axios, { AxiosHeaders } from "axios";
import { useAuthStore } from "../store/auth";

const authApi = axios.create({
  baseURL: "http://localhost:8081",
  withCredentials: true,
});

authApi.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().token;

    if (token && config.headers) {
      (config.headers as AxiosHeaders).set("Authorization", `Bearer ${token}`);
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default authApi;
