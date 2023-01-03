import { call, Effect, put, takeEvery } from "redux-saga/effects";
import { LeaguesApi, MatchesApi } from "../../api";
import {
  IGetAction,
  ILeaguesActionTypes,
  ILeaguesInFederationState,
} from "../../types/leagues";
import { IFinishedTodayMatch, IGetMatchesAction, IMatchesActionTypes, IMatchesParams, ITodayMatch } from "../../types/matches";

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
) : Generator<Effect, void, ITodayMatch[] | IFinishedTodayMatch[]> {
  try{
    const todayMatches = yield call(MatchesApi.getTodayMatches, action.payload as IMatchesParams); 
    yield put({
      type: IMatchesActionTypes.SET_MATCHES,
      payload: todayMatches,
    });

  } catch(error) {
    console.log(error);
    
  }
}

export function* sagaWatcher(): Generator<Effect, void> {
  yield takeEvery(ILeaguesActionTypes.GET_LEAGUE, sagaGetLeagues);
  yield takeEvery(IMatchesActionTypes.GET_MATCHES, sagaGetMatches);
}
