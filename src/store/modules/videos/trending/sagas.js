import { put, call, takeLatest, all } from "redux-saga/effects";
import TRENDING from "./actions";
import API from "../../../../utils/api";

function* handleGetTrending() {
  try {
    const data = yield call(API.VIDEOS.trending);
    yield put(TRENDING.actions.success(data));
  } catch (e) {
    yield put(TRENDING.actions.failure({ error: { ...e } }));
  }
}

function* watchGetTrendingSagas() {
  yield all([takeLatest(TRENDING.types.REQUEST, handleGetTrending)]);
}

export default watchGetTrendingSagas;
