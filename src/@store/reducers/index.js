import { combineReducers } from "redux";
import yourStoreName from "../redux/reducer";

const createReducer = (asyncReducers) =>
  combineReducers({
    yourStoreName,
    ...asyncReducers,
  });

export default createReducer;
