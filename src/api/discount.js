import AxiosService from '../utils/axios';
import { SERVER_URL } from '../utils/constant';


export const updateDiscount = (discount) => {
  return AxiosService.post(`${SERVER_URL}/discount/update`, { ...discount });
};

export const createDiscount = (discount) => {
  return AxiosService.post(`${SERVER_URL}/discount/create`, { ...discount });
};
