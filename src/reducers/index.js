import { combineReducers } from 'redux';
import userState from './user';
import generalState from './general';

const reducer = combineReducers({
  userState,
  generalState,
});

export default reducer;
