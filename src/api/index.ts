import axios from "axios";
import { ILeaguesInFederationState } from "../types/leagues";
import {
  IFinishedTodayMatch,
  IMatchesParams,
  ITodayMatch,
} from "../types/matches";

const APIkey =
  "f86061908f5a153edb0b8b9061abd5c144d96290fddb64dea59d106e84ebee5a";

export class LeaguesApi {
  static async getLeagues(
    countryId: string
  ): Promise<ILeaguesInFederationState> {
    const res = await axios.get(
      `https://apiv2.allsportsapi.com/football/?met=Leagues&APIkey=${APIkey}&countryId=${countryId}`
    );
    return res.data;
  }
}

export class MatchesApi {
  static async getTodayMatches(
    params: IMatchesParams
  ): Promise<ITodayMatch[] | IFinishedTodayMatch[]> {
    const res = await axios.get(
      `https://apiv2.allsportsapi.com/football/?met=Fixtures&APIkey=${APIkey}&from=${params.date}&to=${params.date}&countryId=${params.countryId}&leagueId=${params.leagueId}`
    );
    return res.data.result;
  }
}
