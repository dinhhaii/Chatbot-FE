import AxiosService from '../utils/axios';
import { SERVER_URL } from '../utils/constant';


export const makePayment = (token, courses) => {
  return AxiosService.post(`${SERVER_URL}/payment`, { 
    token, 
    courses,
  });
};
