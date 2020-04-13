/* eslint-disable no-underscore-dangle */
import {
  takeLatest,
  call,
  put,
  delay,
  select,
  takeEvery,
} from 'redux-saga/effects';
import { toast } from 'react-toastify';
import bcrypt from 'bcryptjs';
import * as actionTypes from '../utils/actionTypes';
import { AUTH_TOKEN } from '../utils/constant';
import { getUser, updateUser, getUserList } from '../api/user';
import { getCourseList, getCourseLecturerList, getCourse } from '../api/course';
import { getInvoiceLearnerList, getInvoiceLecturerList } from '../api/invoice';
import { getSubjectList } from '../api/subject';
import { showLoading, hideLoading } from '../actions/general';
import { fetchUserSuccess, fetchUserFailed, setIsLogin, fetchUserListSuccess, fetchUserListFailed } from '../actions/user';
import {
  fetchCourseListSuccess,
  fetchCourseListFailed,
  fetchCourseLecturerListSuccess,
  fetchCourseLecturerListFailed,
  fetchCourseSuccess,
  fetchCourseFailed,
} from '../actions/course';
import {
  fetchSubjectListSuccess,
  fetchSubjectListFailed,
} from '../actions/subject';

import {
  fetchInvoiceLearnerListSuccess,
  fetchInvoiceLearnerListFailed,
  fetchInvoiceLecturerListSuccess,
  fetchInvoiceLecturerListFailed,
} from '../actions/invoice';
import { getLesson } from '../api/lesson';
import { fetchLessonSuccess, fetchLessonFailed } from '../actions/lesson';

function* rootSaga() {
  yield takeEvery(actionTypes.FETCH_USER, fetchUserSaga);
  yield takeLatest(actionTypes.FETCH_LESSON, fetchLessonSaga);
  yield takeLatest(actionTypes.FETCH_USER_LIST, fetchUserListSaga);
  yield takeLatest(actionTypes.UPDATE_USER, updateUserSaga);
  yield takeLatest(actionTypes.CHANGE_PASSWORD, changePasswordSaga);
  yield takeLatest(actionTypes.FETCH_COURSE, fetchCourseSaga);
  yield takeLatest(actionTypes.FETCH_COURSE_LIST, fetchCourseListSaga);
  yield takeLatest(actionTypes.FETCH_SUBJECT_LIST, fetchSubjectListSaga);
  yield takeLatest(
    actionTypes.FETCH_INVOICE_LEARNER_LIST,
    fetchInvoiceLearnerListSaga,
  );
  yield takeLatest(
    actionTypes.FETCH_INVOICE_LECTURER_LIST,
    fetchInvoiceLecturerListSaga,
  );
  yield takeLatest(
    actionTypes.FETCH_COURSE_LECTURER_LIST,
    fetchCourseLecturerListSaga,
  );
}

function* fetchUserListSaga() {
  yield put(showLoading());
  const { data } = yield call(getUserList);
  if (data) {
    yield put(fetchUserListSuccess(data));
  } else {
    yield put(fetchUserListFailed());
    toast.error('Cannot fetch user list!');
  }
  yield put(hideLoading());
}

function* updateUserSaga({ user }) {
  yield put(showLoading());
  const { userState } = yield select();
  const { data } = yield call(updateUser, {
    _idUser: userState.user._id,
    password: userState.user.password,
    type: userState.user.type,
    ...user,
  });
  if (data) {
    yield put(fetchUserSuccess({ user: data }));
    toast.success('Updated successfully!');
  } else {
    toast.error('Something wrong!');
  }
  yield delay(1000);
  yield put(hideLoading());
}

function* changePasswordSaga({ currentPassword, password, rpassword }) {
  yield put(showLoading());
  const state = yield select();
  const { user } = state.userState;
  if (bcrypt.compareSync(currentPassword, user.password)) {
    if (password === rpassword) {
      const { data } = yield call(updateUser, {
        _idUser: user._id,
        password,
        type: user.type,
      });
      if (data) {
        yield put(fetchUserSuccess({ user: data }));
        toast.success('You changed password successfully!');
      }
    } else {
      toast.warn('Your new password does not match!');
    }
  } else {
    toast.warn('Your current password is wrong!');
  }
  yield delay(1000);
  yield put(hideLoading());
}

function* fetchUserSaga({ email, password }) {
  yield put(showLoading());
  const { data } = yield call(getUser, email, password);
  if (data) {
    yield put(fetchUserSuccess(data));
    yield put(setIsLogin());
    yield select((state) => {
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
    yield put(fetchCourseListSuccess(data.filter(e => !e.isDelete)));
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
    yield put(fetchSubjectListSuccess(data.filter(e => !e.isDelete)));
  } else {
    yield put(fetchSubjectListFailed());
    toast.error('Cannot fetch subject list!');
  }
  yield put(hideLoading());
}

function* fetchInvoiceLearnerListSaga({ _id }) {
  yield put(showLoading());
  const { data } = yield call(getInvoiceLearnerList, _id);
  if (data) {
    yield put(fetchInvoiceLearnerListSuccess(data.filter(e => !e.isDelete)));
  } else {
    yield put(fetchInvoiceLearnerListFailed());
    toast.error('Cannot fetch invoice learner list!');
  }
  yield put(hideLoading());
}

function* fetchInvoiceLecturerListSaga({ _id }) {
  yield put(showLoading());
  const { data } = yield call(getInvoiceLecturerList, _id);
  if (data) {
    yield put(fetchInvoiceLecturerListSuccess(data.filter(e => !e.isDelete)));
  } else {
    yield put(fetchInvoiceLecturerListFailed());
    toast.error('Cannot fetch invoice lecturer list!');
  }
  yield put(hideLoading());
}

function* fetchCourseLecturerListSaga({ _id }) {
  yield put(showLoading());
  const { data } = yield call(getCourseLecturerList, _id);
  if (data) {
    yield put(fetchCourseLecturerListSuccess(data.filter(e => !e.isDelete)));
  } else {
    yield put(fetchCourseLecturerListFailed());
    toast.error('Cannot fetch course lecturer list!');
  }
  yield put(hideLoading());
}

function* fetchCourseSaga({ _id }) {
  yield put(showLoading());
  const { data } = yield call(getCourse, _id);
  if (data) {
    yield put(fetchCourseSuccess(data));
  } else {
    yield put(fetchCourseFailed());
    toast.error('Sorry, fetch course failed!');
  }
  yield delay(1000);
  yield put(hideLoading());
}

function* fetchLessonSaga({ _id }) {
  yield put(showLoading());
  const { data } = yield call(getLesson, _id);
  if (data) {
    yield put(fetchLessonSuccess(data));
  } else {
    yield put(fetchLessonFailed());
    toast.error('Sorry, fetch lesson failed!');
  }
  yield delay(1000);
  yield put(hideLoading());
}


export default rootSaga;
