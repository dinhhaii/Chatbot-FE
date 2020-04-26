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
  return AxiosService.post(`${SERVER_URL}/user/forgot-password`, { email });
};

export const authorizeUser = (token) => {
  return AxiosService.get(`${SERVER_URL}/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const requestVerificationEmail = (_id, email) => {
  return AxiosService.post(`${SERVER_URL}/user/verify`, { _id, email });
};

export const getHashedPassword = (password) => {
  return AxiosService.post(`${SERVER_URL}/hashed-password`, { password });
};

export const updateUser = (props) => {
  return AxiosService.post(`${SERVER_URL}/user/update`, { ...props });
};

export const getUserList = () => {
  return AxiosService.get(`${SERVER_URL}/user`);
};
