import AxiosService from '../utils/axios';
import { SERVER_URL } from '../utils/constant';


export const updateComment = (comment) => {
  return AxiosService.post(`${SERVER_URL}/comment/update`, { ...comment });
};

export const createComment = (comment) => {
  return AxiosService.post(`${SERVER_URL}/comment/create`, { ...comment });
};
