import { IResponse, ILogin } from './type';
import { axiosInstance } from './api';

export const getTest1 = (): Promise<IResponse> => {
  console.log('getTest1 ====');
  return axiosInstance.get('/vue/get1').then(res => res.data);
};

export const postTest1 = (params: ILogin): Promise<IResponse> => {
  console.log('postTest1 ====', params);
  return axiosInstance.post('/vue/post1', params).then(res => res.data);
};

/**
 * @description: 用户登录
 * @params {ILogin} params
 * @return {Promise}
 */
export const imLogin = (): Promise<IResponse> => {
  console.log('imLogin ====');
  return axiosInstance.get('/im/login').then(res => res.data);
};

/**
 * @description: 用户登录
 * @params {ILogin} params
 * @return {Promise}
 */
export const login = (params: ILogin): Promise<IResponse> => {
  console.log('login ====', params);
  return axiosInstance.post('/user/login', params).then(res => res.data);
};

/**
 * @description: 用户登录
 * @params {ILogin} params
 * @return {Promise}
 */
export const loginAsync = async (params: ILogin): Promise<IResponse> => {
  console.log('loginAsync ========', params);
  const res = await axiosInstance.post('/user/login', params);
  return res.data;
};