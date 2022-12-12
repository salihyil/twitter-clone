/* import { put, call, takeLatest } from 'redux-saga/effects';

import { LOCAL_STORAGE } from 'constants/localStorage';
import { authService } from 'services';
import history from 'utils/history';
import { ROUTES } from 'constants/routes';

import { authActions } from './slice';

function* loginUser({ payload }) {
  try {
    const {
      data: { token }
    } = yield call(authService.loginUser, { username: payload.email, password: payload.password });

    yield put(authActions.loginSuccess({ token }));
    localStorage.setItem(LOCAL_STORAGE.BO_GW_TOKEN, token);
  } catch (error) {
    yield put(authActions.loginError(error.message));
  }
}

function* createPassword({ payload }) {
  try {
    yield call(authService.createPassword, payload);
    yield put(authActions.createPasswordSuccess());
    yield put(authActions.logout());
    yield history.push(ROUTES.ROOT);
  } catch (error) {
    yield put(authActions.createPasswordError(error.message));
  }
} */

export default function* authWatcher() {
  /*  yield takeLatest(authActions.loginRequest, loginUser);
  yield takeLatest(authActions.createPasswordRequest, createPassword); */
}
