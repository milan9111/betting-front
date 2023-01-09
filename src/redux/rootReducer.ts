import { combineReducers } from "redux";
import { ethersReducer } from "./ethersReducer";
import { leagueReducer } from "./leagueReducer";
import { newsReducer } from "./newsReducer";
import { openedLeagueReducer } from "./openedLeagueReducer";

export const rootReducer = combineReducers({
    leagueReducer,
    openedLeagueReducer,
    ethersReducer,
    newsReducer,
})