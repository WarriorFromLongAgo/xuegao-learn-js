import { IResponse, ILogin } from './type';
import { axiosInstance } from './api';

/**
 * @description: 用户登录
 * @params {ILogin} params
 * @return {Promise}
 */
export const login = (params: ILogin): Promise<IResponse> => {
  return axiosInstance.post('user/login', params).then(res => res.data);
};

/**
 * @description: 用户登录
 * @params {ILogin} params
 * @return {Promise}
 */
export const loginAsync = async (params: ILogin): Promise<IResponse> => {
  const res = await axiosInstance.post('user/login', params);
  return res.data;
};

export const getTest1 = (params: ILogin): Promise<IResponse> => {
  return axiosInstance.post('/vue/get1', params).then(res => res.data);
};

export const postTest1 = (params: ILogin): Promise<IResponse> => {
  return axiosInstance.post('/vue/post1', params).then(res => res.data);
};

