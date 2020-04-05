import {
  takeLatest, call, put, delay, select,
} from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as actionTypes from '../utils/actionTypes';
import { showLoading, hideLoading } from '../actions/general';
import { getUser } from '../api/user';
import { getCourseList } from '../api/course';
import { getSubjectList } from '../api/subject';
import { fetchUserSuccess, fetchUserFailed, setIsLogin } from '../actions/user';
import { fetchCourseListSuccess, fetchCourseListFailed } from '../actions/course';
import { fetchSubjectListSuccess, fetchSubjectListFailed } from '../actions/subject';
import { AUTH_TOKEN } from '../utils/constant';

function* rootSaga() {
  yield takeLatest(actionTypes.FETCH_USER, fetchUserSaga);
  yield takeLatest(actionTypes.FETCH_COURSE_LIST, fetchCourseListSaga);
  yield takeLatest(actionTypes.FETCH_SUBJECT_LIST, fetchSubjectListSaga);
}

function* fetchUserSaga({ email, password }) {
  yield put(showLoading());
  const { data } = yield call(getUser, email, password);
  if (data) {
    yield put(fetchUserSuccess(data));
    yield put(setIsLogin());
    yield select(state => {
      const { firstName, lastName } = state.userState.user;
      localStorage.setItem(AUTH_TOKEN, state.userState.token);
      toast.success(`Hi ${firstName} ${lastName}`);
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

function* fetchSubjectListSaga() {
  yield put(showLoading());
  const { data } = yield call(getSubjectList);
  if (data) {
    yield put(fetchSubjectListSuccess(data));
  } else {
    yield put(fetchSubjectListFailed());
    toast.error('Cannot fetch subject list!');
  }
  yield put(hideLoading());
}

export default rootSaga;
