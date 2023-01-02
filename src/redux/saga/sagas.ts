import { call, Effect, put, takeEvery } from 'redux-saga/effects';
import { LeaguesApi } from '../../api';
import { IGetAction, ILeaguesActionTypes, ILeaguesInFederationState } from "../../types/leagues";

function* sagaGetLeagues (action: IGetAction): Generator<Effect, void, ILeaguesInFederationState> {
    try {
        const leagues = yield call(LeaguesApi.getLeagues, action.payload);
        
        yield put({ type: ILeaguesActionTypes.GET_LEAGUE_SUCCESS, payload: leagues.result });

    } catch (error) {
        console.log(error);
    }
}


export function* sagaWatcher(): Generator<Effect, void> {
    yield takeEvery(ILeaguesActionTypes.GET_LEAGUE, sagaGetLeagues);
}