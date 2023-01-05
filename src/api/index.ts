import axios from "axios";
import { ILeaguesInFederationState } from "../types/leagues";
import {
  IFinishedTodayMatch,
  IMatchesParams,
  ITodayCreatedMatches,
  ITodayMatch,
} from "../types/matches";

const APIkey =
  "f86061908f5a153edb0b8b9061abd5c144d96290fddb64dea59d106e84ebee5a";
const host = "http://localhost:5000/";

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

  static async getTodayCreatedMatches(): Promise<ITodayCreatedMatches[]> {
    const res = await axios.get(`${host}matches`);
    return res.data;
  }

  static async getTodayOdds(params: IMatchesParams) {
    const res = await axios.get(
      `https://apiv2.allsportsapi.com/football/?met=Odds&APIkey=${APIkey}&from=${params.date}&to=${params.date}&countryId=${params.countryId}&leagueId=${params.leagueId}`
    );
    return res.data.result;
  }

  static async createGame(
    item: ITodayMatch,
    userAccount: string,
    ethIndex: string
  ): Promise<any> {
    try {
      const payload = {
        odds_id: item.event_key,
        eth_index: ethIndex,
        home_team: item.event_home_team,
        away_team: item.event_away_team,
        event_date: item.event_date,
        event_time: item.event_time,
        finished: false,
        odd_1: item.odds_1,
        odd_x: item.odds_x,
        odd_2: item.odds_2,
        creator: userAccount,
      };
      const res = await axios.post(`${host}matches`, payload);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
}
