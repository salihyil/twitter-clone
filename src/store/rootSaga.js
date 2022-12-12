import { all } from "redux-saga/effects";

import { authSaga } from "store/auth";

export default function* rootSaga() {
  yield all([authSaga()]);
}
