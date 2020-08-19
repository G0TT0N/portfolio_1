import {CHANGE_TOWN} from "../types/appTypes";

export function changeTown(town) {
  return {type: CHANGE_TOWN, payload: town};
}
