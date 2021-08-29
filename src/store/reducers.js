import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import videos from "./modules/videos/reducer";

const createRootReducer = history => {
  return combineReducers({
    router: connectRouter(history),
    videos,
  });
};

export default createRootReducer;
