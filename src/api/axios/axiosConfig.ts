import axios, { AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_BASE_URL,
};

export const axiosInstance = axios.create(config);
