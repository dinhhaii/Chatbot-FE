import { takeLatest, call, put, delay } from 'redux-saga/effects';
import * as actionTypes from '../utils/actionTypes';
import { showLoading, hideLoading } from '../actions/general';
import { getUser } from '../api/user';
import { fetchUserSuccess, fetchUserFailed } from '../actions/user';

function* rootSaga() {
  yield takeLatest(actionTypes.FETCH_USER, fetchUserSaga);
}

function* fetchUserSaga({ username, password }) {
  yield put(showLoading());
  const { data } = yield call(getUser, username, password);
  if (data) {
    yield put(fetchUserSuccess(data));
  }
  else {
    yield put(fetchUserFailed());
  }
  yield delay(1000);
  yield put(hideLoading());
}

export default rootSaga;
