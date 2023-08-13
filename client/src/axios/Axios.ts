import axios, { AxiosInstance } from "axios";

const BASE_API = "http://localhost:3001";

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_API,
});
