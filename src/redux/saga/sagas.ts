import { call, Effect, put, takeEvery } from "redux-saga/effects";
import { ChatApi, LeaguesApi, MatchesApi, NewsApi } from "../../api";
import { notificationError } from "../../helpers/notificationError";
import { notificationSuccess } from "../../helpers/notificationSuccess";
import { IChatAction, IChatActionTypes, IMessage } from "../../types/chat";
import { IEthersAction, IEthersActionTypes } from "../../types/ethers";
import {
  IGetAction,
  ILeaguesActionTypes,
  ILeaguesInFederationState,
} from "../../types/leagues";
import {
  IBidMatchAction,
  ICreateGameAction,
  IDistributePrizesAction,
  IFinishedTodayMatch,
  IGetItemModalsAction,
  IGetMatchesAction,
  IMatchesActionTypes,
  IMatchesParams,
  IShowModalsAction,
  ITodayCreatedMatches,
  ITodayMatch,
  IUndistributedMatches,
  IUnDistributedPrizesAction,
} from "../../types/matches";
import { INews, INewsAction, INewsActionTypes } from "../../types/news";
import { betMatchInContract } from "../../web3/betMatch";
import { connectWallet } from "../../web3/connectWallet";
import { createGameInContract } from "../../web3/createGame";
import { distributePrizesInContract } from "../../web3/distributePrizes";

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
    notificationError(error);
  }
}

function* sagaGetMatches(
  action: IGetMatchesAction
): Generator<
  Effect,
  void,
  ITodayMatch[] | IFinishedTodayMatch[] | ITodayCreatedMatches[]
> {
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
    notificationError(error);
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
    notificationSuccess(tx);
  } catch (error) {
    notificationError(error);
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

function* sagaBidMatch(action: IBidMatchAction): Generator<Effect, void> {
  try {
    const tx = yield call(betMatchInContract, action.payload);
    notificationSuccess(tx);
  } catch (error) {
    notificationError(error);
  }
}

function* sagaDistributePrizes(
  action: IDistributePrizesAction
): Generator<Effect, void> {
  try {
    const tx = yield call(distributePrizesInContract, action.payload);
    notificationSuccess(tx);
  } catch (error) {
    notificationError(error);
  }
}

function* sagaGetUserAccount(action: IEthersAction): Generator<Effect, void> {
  try {
    const accountUser = yield call(connectWallet);
    yield put({
      type: IEthersActionTypes.SET_USER_ACCOUNT,
      payload: accountUser,
    });
  } catch (error) {
    notificationError(error);
  }
}

function* sagaGetUndistributedMatches(
  action: IGetMatchesAction
): Generator<Effect, void, IUndistributedMatches> {
  try {
    const matches = yield call(MatchesApi.getUndistributedMatches);
    yield put({
      type: IMatchesActionTypes.SET_UNDISTRIBUTED_MATCHES,
      payload: matches,
    });
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
  }
}

function* sagaNews(action: INewsAction):Generator<Effect, void, INews[]> {
  try{
    const result = yield call(NewsApi.getNews);
    yield put({
      type: INewsActionTypes.SET_NEWS,
      payload: result,
    });
  }catch(error) {
    notificationError(error);
  }
}

function* sagaMessages(action: IChatAction):Generator<Effect, void, IMessage[]> {
  try{
    const result = yield call(ChatApi.getMessages);
    yield put({
      type: IChatActionTypes.SET_MESSAGES,
      payload: result,
    })
  } catch(error) {
    notificationError(error);
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
  yield takeEvery(IMatchesActionTypes.GET_ITEM_BET_MODAL, sagaGetItemBetModal);
  yield takeEvery(IMatchesActionTypes.BID_MATCH, sagaBidMatch);
  yield takeEvery(IEthersActionTypes.GET_USER_ACCOUNT, sagaGetUserAccount);
  yield takeEvery(
    IMatchesActionTypes.GET_UNDISTRIBUTED_MATCHES,
    sagaGetUndistributedMatches
  );
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
  yield takeEvery(
    INewsActionTypes.GET_NEWS,
    sagaNews
  );
  yield takeEvery(
    IChatActionTypes.GET_MESSAGES,
    sagaMessages
  );
}
