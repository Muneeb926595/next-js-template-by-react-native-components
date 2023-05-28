// in this file import all of reducers and combine them

import { combineReducers } from "redux";

import Sooq from "../redux/reducer";

const createReducer = (asyncReducers?: any) =>
  combineReducers({
    Sooq,
    ...asyncReducers,
  });

export default createReducer;
