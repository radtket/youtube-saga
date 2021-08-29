import { combineReducers } from "redux";
import categories from "./categories/reducer";
import trending from "./trending/reducer";

export default combineReducers({
  trending,
  categories,
});
