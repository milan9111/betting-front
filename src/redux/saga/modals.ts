import { call, Effect, put, takeEvery } from "redux-saga/effects";
import { MatchesApi } from "../../api";
import { notificationError } from "../../helpers/notificationError";
import { notificationSuccess } from "../../helpers/notificationSuccess";
import {
  IBidMatchAction,
  ICreateGameAction,
  IDistributePrizesAction,
  IGetItemModalsAction,
  IMatchesActionTypes,
  IShowModalsAction,
  IUnDistributedPrizesAction,
} from "../../types/matches";
import { betMatchInContract } from "../../web3/betMatch";
import { createGameInContract } from "../../web3/createGame";
import { distributePrizesInContract } from "../../web3/distributePrizes";
import { onLoading } from "../actions";

function* sagaShowDistributePrizesModal(
  action: IShowModalsAction
): Generator<Effect, void> {
  yield put({
    type: IMatchesActionTypes.SET_DISTRIBUTE_PRIZES_MODAL,
    payload: action.payload,
  });
}

function* sagaGetItemDistributePizesModal(
  action: IGetItemModalsAction
): Generator<Effect, void> {
  yield put({
    type: IMatchesActionTypes.SET_ITEM_DISTRIBUTE_PRIZES_MODAL,
    payload: action.payload,
  });
}

function* sagaDistributePrizes(
  action: IDistributePrizesAction
): Generator<Effect, void> {
  yield put(onLoading(true));
  try {
    const tx = yield call(distributePrizesInContract, action.payload);
    notificationSuccess(tx);
  } catch (error) {
    yield put(onLoading(false));
    notificationError(error);
  }
}

function* sagaShowCreateGameModal(
  action: IShowModalsAction
): Generator<Effect, void> {
  yield put({
    type: IMatchesActionTypes.SET_CREATE_GAME_MODAL,
    payload: action.payload,
  });
}

function* sagaGetItemCreateGameModal(
  action: IGetItemModalsAction
): Generator<Effect, void> {
  yield put({
    type: IMatchesActionTypes.SET_ITEM_CREATE_GAME_MODAL,
    payload: action.payload,
  });
}

function* sagaCreateGame(action: ICreateGameAction): Generator<Effect, void> {
  yield put(onLoading(true));
  try {
    const tx = yield call(createGameInContract, action.payload);
    notificationSuccess(tx);
  } catch (error) {
    notificationError(error);
    yield put(onLoading(false));
  }
}

function* sagaShowBetModal(action: IShowModalsAction): Generator<Effect, void> {
  yield put({
    type: IMatchesActionTypes.SET_BET_MODAL,
    payload: action.payload,
  });
}

function* sagaShowShortBetModal(
  action: IShowModalsAction
): Generator<Effect, void> {
  yield put({
    type: IMatchesActionTypes.SET_SHORT_BET_MODAL,
    payload: action.payload,
  });
}

function* sagaGetItemBetModal(
  action: IGetItemModalsAction
): Generator<Effect, void> {
  yield put({
    type: IMatchesActionTypes.SET_ITEM_BET_MODAL,
    payload: action.payload,
  });
}

function* sagaGetItemShortBetModal(
  action: IGetItemModalsAction
): Generator<Effect, void> {
  yield put({
    type: IMatchesActionTypes.SET_ITEM_SHORT_BET_MODAL,
    payload: action.payload,
  });
}

function* sagaBidMatch(action: IBidMatchAction): Generator<Effect, void> {
  try {
    const tx = yield call(betMatchInContract, action.payload);
    notificationSuccess(tx);
  } catch (error) {
    notificationError(error);
  }
}

function* sagaShowUnDistributedPrizesModal(
  action: IShowModalsAction
): Generator<Effect, void> {
  yield put({
    type: IMatchesActionTypes.SET_UNDISTRIBUTED_PRIZES_MODAL,
    payload: action.payload,
  });
}

function* sagaGetItemUnDistributedPizesModal(
  action: IGetItemModalsAction
): Generator<Effect, void> {
  yield put({
    type: IMatchesActionTypes.SET_ITEM_UNDISTRIBUTED_PRIZES_MODAL,
    payload: action.payload,
  });
}

function* sagaUnDistributePrizes(
  action: IUnDistributedPrizesAction
): Generator<Effect, void, string> {
  yield put(onLoading(true));
  try {
    const resultMatch = yield call(
      MatchesApi.getResultUndistributedMatch,
      action.payload.oddsId
    );
    const params = {
      _idMongo: action.payload._idMongo,
      ethIndex: action.payload.ethIndex,
      winner: resultMatch,
      contract: action.payload.contract,
    };
    const tx = yield call(distributePrizesInContract, params);
    notificationSuccess(tx);
  } catch (error) {
    notificationError(error);
    yield put(onLoading(false));
  }
}

export function* watchModals(): Generator<Effect, void> {
  yield takeEvery(
    IMatchesActionTypes.SHOW_DISTRIBUTE_PRIZES_MODAL,
    sagaShowDistributePrizesModal
  );
  yield takeEvery(
    IMatchesActionTypes.GET_ITEM_DISTRIBUTE_PRIZES_MODAL,
    sagaGetItemDistributePizesModal
  );
  yield takeEvery(IMatchesActionTypes.DISTRIBUTE_PRIZES, sagaDistributePrizes);
  yield takeEvery(
    IMatchesActionTypes.SHOW_CREATE_GAME_MODAL,
    sagaShowCreateGameModal
  );
  yield takeEvery(
    IMatchesActionTypes.GET_ITEM_CREATE_GAME_MODAL,
    sagaGetItemCreateGameModal
  );
  yield takeEvery(IMatchesActionTypes.CREATE_GAME, sagaCreateGame);
  yield takeEvery(IMatchesActionTypes.SHOW_BET_MODAL, sagaShowBetModal);
  yield takeEvery(
    IMatchesActionTypes.SHOW_SHORT_BET_MODAL,
    sagaShowShortBetModal
  );
  yield takeEvery(IMatchesActionTypes.GET_ITEM_BET_MODAL, sagaGetItemBetModal);
  yield takeEvery(
    IMatchesActionTypes.GET_ITEM_SHORT_BET_MODAL,
    sagaGetItemShortBetModal
  );
  yield takeEvery(IMatchesActionTypes.BID_MATCH, sagaBidMatch);
  yield takeEvery(
    IMatchesActionTypes.SHOW_UNDISTRIBUTED_PRIZES_MODAL,
    sagaShowUnDistributedPrizesModal
  );
  yield takeEvery(
    IMatchesActionTypes.GET_ITEM_UNDISTRIBUTED_PRIZES_MODAL,
    sagaGetItemUnDistributedPizesModal
  );
  yield takeEvery(
    IMatchesActionTypes.UNDISTRIBUTED_PRIZES,
    sagaUnDistributePrizes
  );
}
