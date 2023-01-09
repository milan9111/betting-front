import {
  IFinishedTodayMatch,
  IMatchesAction,
  IMatchesActionTypes,
  IMatchesState,
  ITodayMatch,
} from "../types/matches";

export const initialState = {
  todayMatches: [],
  todayCreatedMatches: [],
  finishedTodayMatches: [],
  liveTodayMatches: [],
  oddsTodayMatches: {},
  unDistributedMatches: [],
  isDistributePrizesModal: false,
  itemDistributePizesModal: null,
  isCreateGameModal: false,
  itemCreateGameModal: null,
  isBetModal: false,
  itemBetModal: null,
  isUnDistributebPrizesModal: false,
  itemUnDistributedPizesModal: null,
};

export const openedLeagueReducer = (
  state: IMatchesState = initialState,
  action: IMatchesAction
) => {
  switch (action.type) {
    case IMatchesActionTypes.SET_MATCHES:
      const allTodayMatches: any = action.payload;
      const oddsTodayMatches: any = action.payload;
      const nextTodayMatches: ITodayMatch[] = [];
      const nextTodayCreatedMatches: any = action.payload;
      const finishedTodayMatches: IFinishedTodayMatch[] = [];
      const liveTodayMatches: IFinishedTodayMatch[] = [];
      allTodayMatches.todayMatches?.forEach((item: any) => {
        if (!item.event_status) {
          nextTodayMatches.push(item);
        } else if (item.event_status === "Finished") {
          finishedTodayMatches.push(item);
        } else {
          liveTodayMatches.push(item);
        }
      });
      return {
        ...state,
        todayMatches: nextTodayMatches,
        todayCreatedMatches: nextTodayCreatedMatches.todayCreatedMatches,
        finishedTodayMatches: finishedTodayMatches,
        liveTodayMatches: liveTodayMatches,
        oddsTodayMatches: { ...oddsTodayMatches.todayOdds },
      };
    case IMatchesActionTypes.SET_UNDISTRIBUTED_MATCHES:
      return { ...state, unDistributedMatches: action.payload};
    case IMatchesActionTypes.SET_DISTRIBUTE_PRIZES_MODAL:
      return { ...state, isDistributePrizesModal: action.payload };
    case IMatchesActionTypes.SET_ITEM_DISTRIBUTE_PRIZES_MODAL:
      return { ...state, itemDistributePizesModal: action.payload };
    case IMatchesActionTypes.SET_CREATE_GAME_MODAL:
      return { ...state, isCreateGameModal: action.payload };
    case IMatchesActionTypes.SET_ITEM_CREATE_GAME_MODAL:
      return { ...state, itemCreateGameModal: action.payload };
    case IMatchesActionTypes.SET_BET_MODAL:
      return { ...state, isBetModal: action.payload };
    case IMatchesActionTypes.SET_ITEM_BET_MODAL:
      return { ...state, itemBetModal: action.payload };
    case IMatchesActionTypes.SET_UNDISTRIBUTED_PRIZES_MODAL:
        return { ...state, isUnDistributebPrizesModal: action.payload };
    case IMatchesActionTypes.SET_ITEM_UNDISTRIBUTED_PRIZES_MODAL:
          return { ...state, itemUnDistributedPizesModal: action.payload };
    default:
      return state;
  }
};
