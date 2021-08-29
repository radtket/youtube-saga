import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { routerMiddleware } from "connected-react-router";
import createRootReducer from "./reducers";
import sagas from "./sagas";

const configureStore = history => {
  const enhancers = [];
  const middleware = [createSagaMiddleware(sagas), routerMiddleware(history)];

  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-underscore-dangle
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
    if (typeof devToolsExtension === "function") {
      enhancers.push(devToolsExtension());
    }
  }

  const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
  );

  const store = createStore(createRootReducer(history), composedEnhancers);

  return store;
};

export default configureStore;
