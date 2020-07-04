import AxiosService from '../utils/axios';
import { SERVER_URL } from '../utils/constant';

export const getCourseList = (props) => {
  return AxiosService.post(`${SERVER_URL}/course`, { ...props });
};

export const getCourseLecturerList = (_id) => {
  return AxiosService.get(`${SERVER_URL}/course/${_id}/teaching`);
};

export const getCourse = (_id) => {
  return AxiosService.get(`${SERVER_URL}/course/${_id}`);
};

export const getCourseByLessonId = (_id) => {
  return AxiosService.get(`${SERVER_URL}/course/lesson/${_id}`);
};

export const createCourse = (course) => {
  return AxiosService.post(`${SERVER_URL}/course/create`, { ...course });
};

export const updateCourse = (course) => {
  return AxiosService.post(`${SERVER_URL}/course/update`, { ...course });
};

export const getSuggestCourses = (_idUser, searchHistory) => {
  return AxiosService.post(`${SERVER_URL}/course/suggestion`, { _idUser, searchHistory });
};
