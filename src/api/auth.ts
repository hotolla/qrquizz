import { api } from '@/api/api';

export const login = () => {
  return api.get('/users').then(({ data }) => {
    console.log(data)
    return data;
  });
};

export const redirect = () => {
  return api.get('/authType').then(( data ) => {
    console.log(data)
    return data;
  });
};

export const redirect2 = (method: string) => {
  return api.get('/authType').then(( data ) => {
    console.log(method)
    return data;
  });
};