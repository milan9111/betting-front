import { combineReducers } from "redux";
import { ethersReducer } from "./ethersReducer";
import { leagueReducer } from "./leagueReducer";
import { newsReducer } from "./newsReducer";
import { matchesReducer } from "./matchesReducer";
import { chatReducer } from "./chatReducer";

export const rootReducer = combineReducers({
  leagueReducer,
  matchesReducer,
  ethersReducer,
  newsReducer,
  chatReducer,
});
