import AxiosService from '../utils/axios';
import { SERVER_URL } from '../utils/constant';


export const makePayment = (token, course) => {
  return AxiosService.post(`${SERVER_URL}/payment`, { 
    token, 
    course,
  });
};
