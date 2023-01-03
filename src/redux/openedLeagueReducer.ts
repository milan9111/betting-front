import {
  IFinishedTodayMatch,
  IMatchesAction,
  IMatchesActionTypes,
  IMatchesState,
  ITodayMatch,
} from "../types/matches";

export const initialState = {
  todayMatches: [],
  finishedTodayMatches: [],
  liveTodayMatches: [],
  oddsTodayMatches: {},
  isDistributePrizesModal: false,
  itemDistributePizesModal: null,
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
        finishedTodayMatches: finishedTodayMatches,
        liveTodayMatches: liveTodayMatches,
        oddsTodayMatches: { ...oddsTodayMatches.todayOdds },
      };
    case IMatchesActionTypes.SET_DISTRIBUTE_PRIZES_MODAL:
      return { ...state, isDistributePrizesModal: action.payload };
    case IMatchesActionTypes.SET_ITEM_DISTRIBUTE_PRIZES_MODAL:
      return { ...state, itemDistributePizesModal: action.payload };
    default:
      return state;
  }
};
