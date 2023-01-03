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
      // const liveTodayMatch!
      allTodayMatches.todayMatches?.forEach((item: any) => {
        if (!item.event_status) {
          nextTodayMatches.push(item);
        } else {
          finishedTodayMatches.push(item);
        }
      });
      return {
        ...state,
        todayMatches: nextTodayMatches,
        finishedTodayMatches: finishedTodayMatches,
        // liveTodayMatches,
        oddsTodayMatches: { ...oddsTodayMatches.todayOdds },
      };
    default:
      return state;
  }
};
