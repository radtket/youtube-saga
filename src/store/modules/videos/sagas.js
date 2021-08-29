import { fork } from "redux-saga/effects";
import categories from "./categories/sagas";
import trending from "./trending/sagas";

export default [fork(categories), fork(trending)];
