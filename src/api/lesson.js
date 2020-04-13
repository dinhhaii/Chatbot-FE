import AxiosService from '../utils/axios';
import { SERVER_URL } from '../utils/constant';

export const getLesson = (_id) => {
  return AxiosService.get(`${SERVER_URL}/lesson/${_id}`);
};
