import AxiosService from '../utils/axios';
import { SERVER_URL } from '../utils/constant';


export const updateCart = (cart) => {
  return AxiosService.post(`${SERVER_URL}/cart/update`, { ...cart });
};

export const getCart = (_idUser) => {
  return AxiosService.get(`${SERVER_URL}/cart/${_idUser}`);
};
