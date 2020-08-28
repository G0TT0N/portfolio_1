import {CHECK_AUTH} from "Redux/types/appTypes";
import {takeEvery} from "redux-saga/effects";
import {checkAuth} from "./appSagas/checkAuth";

export function* sagaWatcher() {
  yield takeEvery(CHECK_AUTH, checkAuth);
}
