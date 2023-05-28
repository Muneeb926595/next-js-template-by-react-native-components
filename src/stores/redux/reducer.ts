import { combineReducers } from "redux";

import auth from "../auth/AuthReducers";
import product from "../product/ProductReducers";
import customer from "../customer/CustomerReducers";

const Sooq = combineReducers({
  auth,
  product,
  customer,
});

export default Sooq;
