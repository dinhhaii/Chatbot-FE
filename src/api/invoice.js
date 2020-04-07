import AxiosService from '../utils/axios';
import { SERVER_URL } from '../utils/constant';

export const getInvoiceList = () => {
  return AxiosService.get(`${SERVER_URL}/invoice`);
};

export const getInvoiceLearnerList = (_id) => {
  return AxiosService.get(`${SERVER_URL}/course/${_id}/enrolled`);
};
