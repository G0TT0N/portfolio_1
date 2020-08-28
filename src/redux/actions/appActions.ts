import {CHANGE_TOWN, SAVE_CURRENT_USER} from "Redux/types/appTypes";

export const changeTown = (town) => {
  return {type: CHANGE_TOWN, payload: town};
};

export const saveCurrentUser = (userInfo) => {
  return {
    type: SAVE_CURRENT_USER,
    payload: userInfo,
  };
};
