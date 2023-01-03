import { ILeaguesActionTypes } from "../../types/leagues";
import { IFinishedTodayMatch, IMatchesActionTypes } from "../../types/matches";

export const getLeagues = (countryId: string) => {
  return {
    type: ILeaguesActionTypes.GET_LEAGUE,
    payload: countryId,
  };
};

export const getMatches = (
  date: string,
  countryId: string,
  leagueId: string
) => {
  return {
    type: IMatchesActionTypes.GET_MATCHES,
    payload: { date, countryId, leagueId },
  };
};

export const showDistributePrizesModal = (value: boolean) => {
  return {
    type: IMatchesActionTypes.SHOW_DISTRIBUTE_PRIZES_MODAL,
    payload: value,
  }
}

export const getItemDistributePizesModal = (item: IFinishedTodayMatch) => {
  return {
    type: IMatchesActionTypes.GET_ITEM_DISTRIBUTE_PRIZES_MODAL,
    payload: item,
  }
}
