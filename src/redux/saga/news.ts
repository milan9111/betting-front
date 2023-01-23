import { call, Effect, put, takeEvery } from "redux-saga/effects";
import { NewsApi } from "../../api";
import { notificationError } from "../../helpers/notificationError";
import { INews, INewsAction, INewsActionTypes } from "../../types/news";
import { onLoading } from "../actions";

function* sagaNews(action: INewsAction): Generator<Effect, void, INews[]> {
  yield put(onLoading(true));
  try {
    const result = yield call(NewsApi.getNews);
    yield put({
      type: INewsActionTypes.SET_NEWS,
      payload: result,
    });
  } catch (error) {
    notificationError(error);
  } finally {
    yield put(onLoading(false));
  }
}

export function* watchNews(): Generator<Effect, void> {
  yield takeEvery(INewsActionTypes.GET_NEWS, sagaNews);
}
