import { call, put } from "redux-saga/effects";

import { requestAuthSignIn } from "./auth-request";
import { authLogin } from "./auth-slice";

export default function* handleAuthLogin(action) {
  try {
    const response = yield call(requestAuthSignIn, action.payload);
    console.log(response.data.data);
    if (response.data.data.access_token) {
      localStorage.setItem("user", JSON.stringify(response.data.data));
      yield put(authLogin(response.data.data));
    }
  } catch (error) {}
}
