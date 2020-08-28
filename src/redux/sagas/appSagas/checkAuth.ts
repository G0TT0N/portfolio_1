import {saveCurrentUser} from "Redux/actions/appActions";
import {put, call} from "redux-saga/effects";
import {IHttpSuccessResponse} from "Ts/interfaces/appInterfaces/http";
import {sendHttpReq} from "Utils/sendHttpReq";

export function* checkAuth() {
  const userInfo = yield call(fetchUserInfo);

  if (userInfo) {
    yield put(saveCurrentUser(userInfo));
  }
}

async function fetchUserInfo() {
  const token = localStorage.getItem("token");

  if (token) {
    const res: IHttpSuccessResponse = await sendHttpReq("post", "/authApi/checkToken", {prevToken: token});
    const userId = res.data.userId;

    if (userId) {
      const res = await sendHttpReq("post", "/userApi/getUserInfo", {userId});

      return {id: userId, ...res.data};
    } else {
      localStorage.removeItem("token");
    }
  }
}
