import AxiosService from '../utils/axios';
import { SERVER_URL } from '../utils/constant';


export const updateFeedback = (feedback) => {
  return AxiosService.post(`${SERVER_URL}/feedback/update`, { ...feedback });
};

export const createFeedback = (feedback) => {
  return AxiosService.post(`${SERVER_URL}/feedback/create`, { ...feedback });
};
