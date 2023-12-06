import { api } from '@/api/api';

export const login = () => {
  return api.get('/users').then(({ data }) => {
    console.log(data)
    return data;
  });
};

export const redirect = () => {
  return api.get('/login-url').then(( data ) => {
    console.log(data)
    return data;
  });
};

export const redirect2 = (type: string) => {
  return api.get(`/login-url/type=${type}`).then(( data ) => {
    console.log(type)
    return data;
  });
};