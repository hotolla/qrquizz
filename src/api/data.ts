import { AxiosRequestConfig } from "axios";
import { api } from "@/api/api";

export const fetchEventData = (config?: AxiosRequestConfig) => {
  return api.get('/eventData', config).then(({ data }) => {
    return data;
  });
};
