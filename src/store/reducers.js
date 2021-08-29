import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";

const createRootReducer = history => {
  return combineReducers({
    router: connectRouter(history),
  });
};

export default createRootReducer;
