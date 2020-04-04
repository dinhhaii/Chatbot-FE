import AxiosService from '../utils/axios';
import { SERVER_URL } from '../utils/constant';

export const getUser = (email, password) => {
  return AxiosService.post(`${SERVER_URL}/user/login`, { email, password });
};

export const registerUser = (firstName, lastName, email, password, role) => {
  return AxiosService.post(`${SERVER_URL}/user/register`, {
    firstName,
    lastName,
    email,
    password,
    role,
  });
};

export const forgotPasswordUser = (email) => {
  return AxiosService.post(`${SERVER_URL}/user/forgotpassword`, { email });
};
