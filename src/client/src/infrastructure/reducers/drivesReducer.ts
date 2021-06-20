import * as ActionTypes from "../actions/actionTypes";
import { Action } from "../actions/actions";
import { initialState } from "../store/initialState";
import { IDrivesList } from "../store/state";

const drivesReducer = (
  state = initialState.drivesList,
  action: Action
): IDrivesList => {
  switch (action.type) {
    case ActionTypes.GET_DRIVES_SUCCESS:
      const drivesList = action.payload as IDrivesList;
      return drivesList;
    default:
      return state;
  }
};

export default drivesReducer;
