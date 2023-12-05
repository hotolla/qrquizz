import { AxiosRequestConfig } from 'axios';
import { api } from '@/api/api';
import {IUser} from "@/modules/users";

export interface ILoginData {
  name?: string | null,
  email: string | null,
}

export const login = (config?: IUser | null) => {
  return api.get('/users').then(({ data }) => {
    console.log(data)
    return data;
  });
};

