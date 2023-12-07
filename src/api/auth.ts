import { api } from '@/api/api';

export const login = () => {
  return api.get('/users').then(({ data }) => {
    console.log(data)
    return data;
  });
};

export const redirect = () => {
  return api.get('/loginUrl').then(({ data }) => {
    return data;
  });
};
