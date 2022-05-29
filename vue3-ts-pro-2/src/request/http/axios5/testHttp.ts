import { IResponse, ILogin } from './type';
import { axiosInstance } from './api';

const API_URL = "/api"

export const getTest1 = (): Promise<IResponse> => {
  console.log('getTest1 ====');
  return axiosInstance.get(API_URL + '/vue/get1').then(res => res.data);
};

export const postTest1 = (params: ILogin): Promise<IResponse> => {
  console.log('postTest1 ====', params);
  return axiosInstance.post(API_URL + '/vue/post1', params).then(res => res.data);
};


/**
 * @description: 用户登录
 * @params {ILogin} params
 * @return {Promise}
 */
 export const login = (params: ILogin): Promise<IResponse> => {
  console.log('login ====', params);
  return axiosInstance.post(API_URL + '/user/login', params).then(res => res.data);
};

/**
 * @description: 用户登录
 * @params {ILogin} params
 * @return {Promise}
 */
export const loginAsync = async (params: ILogin): Promise<IResponse> => {
  console.log('loginAsync ========', params);
  const res = await axiosInstance.post(API_URL + '/user/login', params);
  return res.data;
};