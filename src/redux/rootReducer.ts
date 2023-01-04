import { combineReducers } from "redux";
import { ethersReducer } from "./ethersReducer";
import { leagueReducer } from "./leagueReducer";
import { openedLeagueReducer } from "./openedLeagueReducer";

export const rootReducer = combineReducers({
    leagueReducer,
    openedLeagueReducer,
    ethersReducer,
})