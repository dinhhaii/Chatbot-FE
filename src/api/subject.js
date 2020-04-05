import AxiosService from '../utils/axios';
import { SERVER_URL } from '../utils/constant';

export const getSubjectList = () => {
  return AxiosService.get(`${SERVER_URL}/subject`);
};