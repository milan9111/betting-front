import { ILeaguesActionTypes } from "../../types/leagues";
import { IMatchesActionTypes } from "../../types/matches";

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
