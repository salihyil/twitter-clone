import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import { REDUCERS } from "constants/reducers";
import { authReducer } from "store/auth";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = configureStore({
  reducer: {
    [REDUCERS.AUTH]: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(middlewares),
});

store.runSaga = sagaMiddleware.run;
export default store;
