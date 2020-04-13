import AxiosService from '../utils/axios';
import { SERVER_URL } from '../utils/constant';

export const getCourseList = () => {
  return AxiosService.get(`${SERVER_URL}/course`);
};

export const getCourseLecturerList = (_id) => {
  return AxiosService.get(`${SERVER_URL}/course/${_id}/teaching`);
};

export const getCourse = (_id) => {
  return AxiosService.get(`${SERVER_URL}/course/${_id}`);
};
