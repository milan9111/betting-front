import { ILeagueAction, ILeaguesActionTypes, ILeaguesInFederationState } from "../types/leagues"

export const initialState = {
    result: [],
}

export const leagueReducer = (state: ILeaguesInFederationState = initialState, action: ILeagueAction) => {
    switch(action.type) {
        case ILeaguesActionTypes.GET_LEAGUE_SUCCESS:
            return {...state, result: action.payload};
        default: 
            return state;
    }
}