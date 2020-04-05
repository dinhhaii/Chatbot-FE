import { combineReducers } from 'redux';
import userState from './user';
import generalState from './general';
import courseState from './course';
import subjectState from './subject';

const reducer = combineReducers({
  userState,
  generalState,
  courseState,
  subjectState,
});

export default reducer;
