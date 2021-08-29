import { put, call, takeLatest, all } from "redux-saga/effects";
import CATEGORIES from "./actions";
import API from "../../../../utils/api";

function* handleGetCategories() {
  try {
    const data = yield call(API.VIDEOS.categories);

    yield put(CATEGORIES.actions.success({ data }));
  } catch (e) {
    yield put(CATEGORIES.actions.failure({ error: { ...e } }));
  }
}

function* watchGetCategoriesSagas() {
  yield all([takeLatest(CATEGORIES.types.REQUEST, handleGetCategories)]);
}

export default watchGetCategoriesSagas;
