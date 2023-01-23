import { call, Effect, put, takeEvery } from "redux-saga/effects";
import { ChatApi } from "../../api";
import { notificationError } from "../../helpers/notificationError";
import { socket } from "../../sockets";
import { IChatAction, IChatActionTypes, IMessage } from "../../types/chat";

function* sageCreateMessage(action: IChatAction): Generator<Effect, void> {
  try {
    socket.emit("message", action.payload);
  } catch (error) {
    notificationError(error);
  }
}

function* sagaMessages(
  action: IChatAction
): Generator<Effect, void, IMessage[]> {
  try {
    const result = yield call(ChatApi.getMessages);
    yield put({
      type: IChatActionTypes.SET_MESSAGES,
      payload: result,
    });
  } catch (error) {
    notificationError(error);
  }
}

export function* watchChat(): Generator<Effect, void> {
  yield takeEvery(IChatActionTypes.CREATE_MESSAGE, sageCreateMessage);
  yield takeEvery(IChatActionTypes.GET_MESSAGES, sagaMessages);
}
