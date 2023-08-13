import axios, { AxiosInstance } from "axios";

const BASE_API = "http://localhost:3000";

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_API,
});
