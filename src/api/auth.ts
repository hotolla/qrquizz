import { api } from '@/api/api';

export const login = () => {
  return api.get('/users').then(({ data }) => {
    console.log(data)
    return data;
  });
};

export const redirect = (method: string) => {
  return api.get(`/oauth2authorization`).then(({ data }) => {
    return data;
  });
};
