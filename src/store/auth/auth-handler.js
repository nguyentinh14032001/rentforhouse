import { call } from "redux-saga/effects";
import { saveToken } from "utils/auth";
import { requestAuthSignIn } from "./auth-request";
export default function* handleAuthLogin(action) {
  try {
    const response = yield call(requestAuthSignIn, action.payload);
    console.log(response.data.data);
    if (response.data.data.access_token) {
      saveToken(response.data.data.access_token);
      localStorage.setItem("user", JSON.stringify(response.data.data));
    }
  } catch (error) {}
}
