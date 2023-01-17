import axios from "axios";
import { notificationError } from "../helpers/notificationError";
import { IMessage } from "../types/chat";
import { ILeaguesInFederationState } from "../types/leagues";
import {
  IFinishedTodayMatch,
  IMatchesParams,
  ITodayCreatedMatches,
  ITodayMatch,
  IUndistributedMatches,
} from "../types/matches";
import { INews } from "../types/news";

const APIkey = `${process.env.REACT_APP_API_KEY}`;
const ApiTokenNews = `${process.env.REACT_APP_API_TOKEN_NEWS}`;
const host = `${process.env.REACT_APP_BASE_URL}`;

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
    ethIndex: number
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
      notificationError(error);
    }
  }

  static async distributePrizes(
    _idMongo: string,
    winner: string,
    indexResult: number,
    success: boolean
  ): Promise<any> {
    try {
      const payload = {
        final_time: Date.now(),
        final_result: winner,
        penalties_result: "", //in developing
        team_winner: indexResult,
        finished: success,
        creator_bonus: "", //in developing
        winners: [], //in developing
      };
      const res = await axios.put(`${host}matches/${_idMongo}`, payload);
      return res.data;
    } catch (error) {
      notificationError(error);
    }
  }

  static async getUndistributedMatches(): Promise<IUndistributedMatches[]> {
    const res = await axios.get(`${host}matches`);
    const msInDay = 86400000;
    const unDistributedMatches = res.data.filter(
      (item: IUndistributedMatches) =>
        item.finished !== true &&
        new Date(item.event_date).getTime() + msInDay < Date.now()
    );
    return unDistributedMatches;
  }

  static async getResultUndistributedMatch(oddsId: number): Promise<string> {
    const res = await axios.get(
      `https://apiv2.allsportsapi.com/football/?met=Fixtures&APIkey=${APIkey}&matchId=${oddsId}`
    );
    return res.data.result[0].event_final_result;
  }
}

export class NewsApi {
  static async getNews(): Promise<INews[]> {
    const date = new Date().toISOString().split("T")[0];
    const res = await axios.get(
      `https://api.thenewsapi.com/v1/news/all?api_token=${ApiTokenNews}&language=en&categories=sports&limit=5&published_on=${date}&search=football`
    );
    return res.data.data;
  }
}

export class ChatApi {
  static async getMessages(): Promise<IMessage[]> {
    const res = await axios.get(`${host}chat`);
    return res.data;
  }
}
