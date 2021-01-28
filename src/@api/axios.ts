import axios, { AxiosRequestConfig } from "axios";

const RequestInterceptor = (config: AxiosRequestConfig) => {
  config.headers.authorization = localStorage.getItem("accessToken");
  return config;
};

export const instance = axios.create({
  baseURL: "http://localhost:8003/api/v1",
});
instance.interceptors.request.use(RequestInterceptor);

