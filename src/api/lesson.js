import AxiosService from '../utils/axios';
import { SERVER_URL } from '../utils/constant';

export const getLesson = (_id) => {
  return AxiosService.get(`${SERVER_URL}/lesson/${_id}`);
};

export const updateLesson = (lesson) => {
  return AxiosService.post(`${SERVER_URL}/lesson/update`, { ...lesson });
};

export const createLesson = (lesson) => {
  return AxiosService.post(`${SERVER_URL}/lesson/create`, { ...lesson });
};
