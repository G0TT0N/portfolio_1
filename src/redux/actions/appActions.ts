import {CHANGE_TOWN, SAVE_CURRENT_USER} from "../types/appTypes";

export const changeTown = (town: string) => {
  return {type: CHANGE_TOWN, payload: town};
};

export const saveCurrentUser = (userId: string) => {
  return {type: SAVE_CURRENT_USER, payload: userId};
};
