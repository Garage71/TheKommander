import { combineReducers } from "redux";
import drivesListReducer from "./drivesReducer";
export default combineReducers({
  drivesList: drivesListReducer,
});
