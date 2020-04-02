import AxiosService from '../utils/axios';
import { SERVER_URL } from '../utils/constant';

export const getUser = (email, password) => {
  return AxiosService.post(`${SERVER_URL}/user/login`, { email, password });
};
