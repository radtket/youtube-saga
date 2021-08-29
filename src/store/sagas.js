import { all } from "redux-saga/effects";
import video from "./modules/videos/sagas";

function* rootSaga() {
  yield all([...video]);
}

export default rootSaga;
