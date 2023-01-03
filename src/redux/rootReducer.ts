import { combineReducers } from "redux";
import { leagueReducer } from "./leagueReducer";
import { openedLeagueReducer } from "./openedLeagueReducer";

export const rootReducer = combineReducers({
    leagueReducer,
    openedLeagueReducer,
})