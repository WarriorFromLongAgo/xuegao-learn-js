import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { BASE_URL } from "@/request/http/base"

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    timestamp: new Date().getTime()
  }
});

// axios实例拦截请求
axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    console.log("config ==", config);
    return config;
  },
  (error: unknown) => {
    return Promise.reject(error);
  }
)


