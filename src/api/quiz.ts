import { AxiosRequestConfig } from "axios";
import { api } from "@/api/api";

export const fetchQuizData = (config?: AxiosRequestConfig) => {
  return api.get('/quiz', config).then(({ data }) => {
    return data;
  });
};
