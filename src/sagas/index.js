import {
  takeLatest, call, put, delay, select,
} from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as actionTypes from '../utils/actionTypes';
import { showLoading, hideLoading } from '../actions/general';
import { getUser } from '../api/user';
import { getCourseList } from '../api/course';
import { fetchUserSuccess, fetchUserFailed } from '../actions/user';
import { fetchCourseListSuccess, fetchCourseListFailed } from '../actions/course';

function* rootSaga() {
  yield takeLatest(actionTypes.FETCH_USER, fetchUserSaga);
  yield takeLatest(actionTypes.FETCH_COURSE_LIST, fetchCourseListSaga);
}

function* fetchUserSaga({ email, password }) {
  yield put(showLoading());
  const { data } = yield call(getUser, email, password);
  if (data) {
    yield put(fetchUserSuccess(data));
    yield select(state => {
      const { firstName, lastName } = state.userState.user;
      toast.success(`Hi ${firstName} ${lastName},`);
    });
  } else {
    yield put(fetchUserFailed());
    toast.error('Sorry, something wrong!');
  }
  yield delay(1000);
  yield put(hideLoading());
}

function* fetchCourseListSaga() {
  yield put(showLoading());
  const { data } = yield call(getCourseList);
  if (data) {
    yield put(fetchCourseListSuccess(data));
  } else {
    yield put(fetchCourseListFailed());
    toast.error('Cannot fetch courses list!');
  }
  yield put(hideLoading());
}

export default rootSaga;
