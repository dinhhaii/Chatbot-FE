import AxiosService from '../utils/axios';
import { SERVER_URL } from '../utils/constant';

export const getCourseList = (email, password) => {
  return AxiosService.get(`${SERVER_URL}/course`);
};