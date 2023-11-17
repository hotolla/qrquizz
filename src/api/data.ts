import { AxiosRequestConfig } from "axios";
import { api } from "@/api/api";

export const fetchData = (config?: AxiosRequestConfig) => {
  return api.get('/data', config).then(({ data }) => {
    return data;
  });
};
