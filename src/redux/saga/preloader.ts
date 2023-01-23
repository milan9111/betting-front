import { Effect, put, takeEvery } from "redux-saga/effects";
import { notificationError } from "../../helpers/notificationError";
import { IPreloaderAction, IPreloaderActionTypes } from "../../types/preloader";

function* sagaPreloader(action: IPreloaderAction): Generator<Effect, void> {
  try {
    yield put({
      type: IPreloaderActionTypes.SET_PRELOADER,
      payload: action.payload,
    });
  } catch (error) {
    notificationError(error);
  }
}

export function* watchPreloader(): Generator<Effect, void> {
  yield takeEvery(IPreloaderActionTypes.GET_PRELOADER, sagaPreloader);
}