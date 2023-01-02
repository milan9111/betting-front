import { combineReducers } from "redux";
import { leagueReducer } from "./leagueReducer";

export const rootReducer = combineReducers({
    leagueReducer,
})