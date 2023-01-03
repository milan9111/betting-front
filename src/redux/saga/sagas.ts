import { call, Effect, put, takeEvery } from "redux-saga/effects";
import { LeaguesApi, MatchesApi } from "../../api";
import {
  IGetAction,
  ILeaguesActionTypes,
  ILeaguesInFederationState,
} from "../../types/leagues";
import {
  IFinishedTodayMatch,
  IGetItemModalsAction,
  IGetMatchesAction,
  IMatchesActionTypes,
  IMatchesParams,
  IShowModalsAction,
  ITodayMatch,
} from "../../types/matches";

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
): Generator<Effect, void, ITodayMatch[] | IFinishedTodayMatch[]> {
  try {
    const todayMatches = yield call(
      MatchesApi.getTodayMatches,
      action.payload as IMatchesParams
    );
    const todayOdds: any = yield call(
      MatchesApi.getTodayOdds,
      action.payload as IMatchesParams
    );
    yield put({
      type: IMatchesActionTypes.SET_MATCHES,
      payload: { todayMatches, todayOdds },
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
}
