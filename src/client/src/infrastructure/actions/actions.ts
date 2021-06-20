import { IDrivesList } from "../store/state";
import * as ActionTypes from "./actionTypes";
// import { Coords, CurrentWeather, Location } from "../store/state";

export interface Action<T = {}> {
  type: string;
  payload?: T;
}

export class Action<T = {}> implements Action<T> {
  public type!: string;
  public payload?: T;
}

export const getDrives = (): Action => {
  return {
    type: ActionTypes.GET_DRIVES_REQUEST,
  };
};

export const getDrivesComplete = (payload: IDrivesList): Action => {
  return {
    type: ActionTypes.GET_DRIVES_SUCCESS,
    payload,
  };
};

export const getDrivesFailure = (): Action => {
  return {
    type: ActionTypes.GET_DRIVES_FAILURE,
  };
};
