import { combineReducers } from 'redux';
import userState from './user';
import generalState from './general';
import courseState from './course';
import subjectState from './subject';
import invoiceState from './invoice';
import lessonState from './lesson';

const reducer = combineReducers({
  userState,
  generalState,
  courseState,
  subjectState,
  invoiceState,
  lessonState,
});

export default reducer;
