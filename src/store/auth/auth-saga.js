import { takeLatest } from "redux-saga/effects";
import handleAuthLogin from "./auth-handler";
import { authLogin } from "./auth-slice";

export default function* authSaga() {
  yield takeLatest(authLogin.type, handleAuthLogin);
}
