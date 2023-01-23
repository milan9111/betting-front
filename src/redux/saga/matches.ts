import { call, Effect, put, takeEvery } from "redux-saga/effects";
import { LeaguesApi, MatchesApi } from "../../api";
import { notificationError } from "../../helpers/notificationError";

import {
  IGetAction,
  ILeaguesActionTypes,
  ILeaguesInFederationState,
} from "../../types/leagues";
import {
  ICreatedGames,
  IFinishedTodayMatch,
  IGetMatchesAction,
  IMatchesActionTypes,
  IMatchesParams,
  IStandings,
  ITodayCreatedMatches,
  ITodayMatch,
  IUndistributedMatches,
} from "../../types/matches";
import { onLoading } from "../actions";

function* sagaGetLeagues(
  action: IGetAction
): Generator<Effect, void, ILeaguesInFederationState> {
  try {
    yield put(onLoading(true));
    const leagues = yield call(LeaguesApi.getLeagues, action.payload as string);
    yield put({
      type: ILeaguesActionTypes.SET_LEAGUE,
      payload: leagues.result,
    });
  } catch (error) {
    notificationError(error);
  } finally {
    yield put(onLoading(false));
  }
}

function* sagaGetMatches(
  action: IGetMatchesAction
): Generator<
  Effect,
  void,
  ITodayMatch[] | IFinishedTodayMatch[] | ITodayCreatedMatches[]
> {
  yield put(onLoading(true));
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
  } finally {
    yield put(onLoading(false));
  }
}

function* sagaGetStandings(
  action: IGetMatchesAction
): Generator<Effect, void, IStandings[]> {
  try {
    const standings = yield call(
      MatchesApi.getStandings,
      action.payload as string
    );
    yield put({
      type: IMatchesActionTypes.SET_STANDINGS,
      payload: standings,
    });
  } catch (error) {
    notificationError(error);
  }
}

function* sagaGetCreatedGames(
  action: IGetMatchesAction
): Generator<Effect, void, ICreatedGames> {
  yield put(onLoading(true));
  try {
    const games = yield call(MatchesApi.getCreatedGames);
    yield put({
      type: IMatchesActionTypes.SET_CREATED_GAMES,
      payload: games,
    });
  } catch (error) {
    notificationError(error);
  } finally {
    yield put(onLoading(false));
  }
}

function* sagaGetUndistributedMatches(
  action: IGetMatchesAction
): Generator<Effect, void, IUndistributedMatches> {
  yield put(onLoading(true));
  try {
    const matches = yield call(MatchesApi.getUndistributedMatches);
    yield put({
      type: IMatchesActionTypes.SET_UNDISTRIBUTED_MATCHES,
      payload: matches,
    });
  } catch (error) {
    notificationError(error);
  } finally {
    yield put(onLoading(false));
  }
}

export function* watchMatches(): Generator<Effect, void> {
  yield takeEvery(ILeaguesActionTypes.GET_LEAGUE, sagaGetLeagues);
  yield takeEvery(IMatchesActionTypes.GET_MATCHES, sagaGetMatches);
  yield takeEvery(IMatchesActionTypes.GET_STANDINGS, sagaGetStandings);
  yield takeEvery(IMatchesActionTypes.GET_CREATED_GAMES, sagaGetCreatedGames);
  yield takeEvery(
    IMatchesActionTypes.GET_UNDISTRIBUTED_MATCHES,
    sagaGetUndistributedMatches
  );
}
