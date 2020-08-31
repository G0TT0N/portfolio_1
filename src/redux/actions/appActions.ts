import {CHANGE_TOWN, SAVE_TOWNS_LIST, SAVE_CURRENT_USER} from "Redux/types/appTypes";
import {sendHttpReq} from "Utils/sendHttpReq";
import {IHttpSuccessResponse} from "Ts/interfaces/appInterfaces/http";

export const saveTownsInfo = () => async (dispatch) => {
  const savedTown: string | null = localStorage.getItem("town");

  const res: IHttpSuccessResponse = await sendHttpReq("get", "/townApi/getTownList");

  const townsList = res.data.map((townData: {name: string}) => townData.name);

  dispatch({type: SAVE_TOWNS_LIST, payload: townsList});

  dispatch(changeTown(savedTown ? savedTown : townsList[0]));
};

export const changeTown = (town) => {
  localStorage.setItem("town", town);

  return {type: CHANGE_TOWN, payload: town};
};

export const saveCurrentUser = (userInfo) => {
  return {
    type: SAVE_CURRENT_USER,
    payload: userInfo,
  };
};
