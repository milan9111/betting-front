import { call, Effect, put, takeEvery } from "redux-saga/effects";
import { LeaguesApi, MatchesApi } from "../../api";
import { IEthersAction, IEthersActionTypes } from "../../types/ethers";
import {
  IGetAction,
  ILeaguesActionTypes,
  ILeaguesInFederationState,
} from "../../types/leagues";
import {
  ICreateGameAction,
  IFinishedTodayMatch,
  IGetItemModalsAction,
  IGetMatchesAction,
  IMatchesActionTypes,
  IMatchesParams,
  IShowModalsAction,
  ITodayCreatedMatches,
  ITodayMatch,
} from "../../types/matches";
import { connectWallet } from "../../web3/connectWallet";
import { createGameInContract } from "../../web3/createGame";

function* sagaGetLeagues(
  action: IGetAction
): Generator<Effect, void, ILeaguesInFederationState> {
  try {
    const leagues = yield call(LeaguesApi.getLeagues, action.payload as string);

    yield put({
      type: ILeaguesActionTypes.SET_LEAGUE,
      payload: leagues.result,
    });
  } catch (error) {
    console.log(error);
  }
}

function* sagaGetMatches(
  action: IGetMatchesAction
): Generator<Effect, void, ITodayMatch[] | IFinishedTodayMatch[] | ITodayCreatedMatches[]> {
  try {
    const todayMatches = yield call(
      MatchesApi.getTodayMatches,
      action.payload as IMatchesParams
    );
    const todayOdds: any = yield call(
      MatchesApi.getTodayOdds,
      action.payload as IMatchesParams
    );
    const todayCreatedMatches = yield call(MatchesApi.getTodayCreatedMatches);
    yield put({
      type: IMatchesActionTypes.SET_MATCHES,
      payload: { todayMatches, todayOdds, todayCreatedMatches },
    });
  } catch (error) {
    console.log(error);
  }
}

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
  try {
    const tx = yield call(createGameInContract, action.payload);
    console.log(tx); // alert
  } catch (error) {
    console.log(error);
  }
}

function* sagaShowBetModal(action: IShowModalsAction): Generator<Effect, void> {
  yield put({
    type: IMatchesActionTypes.SET_BET_MODAL,
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

function* sagaGetUserAccount(action: IEthersAction): Generator<Effect, void> {
  try {
    const accountUser = yield call(connectWallet);
    yield put({
      type: IEthersActionTypes.SET_USER_ACCOUNT,
      payload: accountUser,
    });
  } catch (error) {
    console.log(error);
  }
}

export function* sagaWatcher(): Generator<Effect, void> {
  yield takeEvery(ILeaguesActionTypes.GET_LEAGUE, sagaGetLeagues);
  yield takeEvery(IMatchesActionTypes.GET_MATCHES, sagaGetMatches);
  yield takeEvery(
    IMatchesActionTypes.SHOW_DISTRIBUTE_PRIZES_MODAL,
    sagaShowDistributePrizesModal
  );
  yield takeEvery(
    IMatchesActionTypes.GET_ITEM_DISTRIBUTE_PRIZES_MODAL,
    sagaGetItemDistributePizesModal
  );
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
  yield takeEvery(IMatchesActionTypes.GET_ITEM_BET_MODAL, sagaGetItemBetModal);
  yield takeEvery(IEthersActionTypes.GET_USER_ACCOUNT, sagaGetUserAccount);
}
