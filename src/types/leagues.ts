export enum ILeaguesActionTypes {
  GET_LEAGUE = "GET_LEAGUE",
  SET_LEAGUE = "SET_LEAGUE",
  // CREATE_BID = "CREATE_BID",
  // COMPLETE_BID = "COMPLETE_BID",
  // DISTRIBUTE_PRIZES = "DISTRIBUTE_PRIZES",
}

export interface ILeagueInFederation {
  league_key: number;
  league_name: string;
  country_key: number;
  country_name: string;
  league_logo: string;
  country_logo: string;
  key?: number;
}

export interface ILeaguesInFederationState {
  result: ILeagueInFederation[];
}

export interface ILeagueReducer {
  leagueReducer: ILeaguesInFederationState;
}

export interface IGetAction {
  type:
    | ILeaguesActionTypes.GET_LEAGUE
    | ILeaguesActionTypes.SET_LEAGUE;
  payload: string | ILeagueInFederation;
}

export type ILeagueAction = IGetAction;
