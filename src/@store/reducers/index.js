import { combineReducers } from "redux";

import cart__reducer from "../Cart/Cart.Reducer"

const createReducer = (asyncReducers) =>
  combineReducers({
    cartreducer:cart__reducer,
    ...asyncReducers,
  });

export default createReducer;
