import {CHANGE_TOWN, SAVE_CURRENT_USER} from "Redux/types/appTypes";
import {sendHttpReq} from "Utils/sendHttpReq";

export const changeTown = (town) => {
  return {type: CHANGE_TOWN, payload: town};
};

export const saveCurrentUser = (userId) => async (dispatch) => {
  console.log("saveCurrentUser", userId);

  const res = await sendHttpReq("post", "/userApi/getUserInfo", {userId});

  dispatch({
    type: SAVE_CURRENT_USER,
    payload: {
      id: userId,
      ...res.data,
    },
  });
};
