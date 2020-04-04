import { combineReducers } from 'redux';
import userState from './user';
import generalState from './general';
import courseState from './course';

const reducer = combineReducers({
  userState,
  generalState,
  courseState,
});

export default reducer;
