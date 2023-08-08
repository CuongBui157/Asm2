import { combineReducers } from "redux";
import { productReducer } from "../slices/product";

const rootReducer = combineReducers({
  product: productReducer,
});

export default rootReducer;
