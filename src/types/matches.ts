export enum IMatchesActionTypes {
  GET_MATCHES = "GET_MATCHES",
  SET_MATCHES = "SET_MATCHES",
  SHOW_DISTRIBUTE_PRIZES_MODAL = "SHOW_DISTRIBUTE_PRIZES_MODAL",
  SET_DISTRIBUTE_PRIZES_MODAL = "SET_DISTRIBUTE_PRIZES_MODAL",
  GET_ITEM_DISTRIBUTE_PRIZES_MODAL = "GET_ITEM_DISTRIBUTE_PRIZES_MODAL",
  SET_ITEM_DISTRIBUTE_PRIZES_MODAL = "SET_ITEM_DISTRIBUTE_PRIZES_MODAL",
  SHOW_CREATE_GAME_MODAL = "SHOW_CREATE_GAME_MODAL",
  SET_CREATE_GAME_MODAL = "SET_CREATE_GAME_MODAL",
  GET_ITEM_CREATE_GAME_MODAL = "GET_ITEM_CREATE_GAME_MODAL",
  SET_ITEM_CREATE_GAME_MODAL = "SET_ITEM_CREATE_GAME_MODAL",
  SHOW_BET_MODAL = "SHOW_BET_MODAL",
  SET_BET_MODAL = "SET_BET_MODAL",
  GET_ITEM_BET_MODAL = "GET_ITEM_BET_MODAL",
  SET_ITEM_BET_MODAL = "SET_ITEM_BET_MODAL",
}

export interface ITodayMatch {
  event_key: number;
  event_date: string;
  event_time: string;
  event_home_team: string;
  home_team_key: number;
  event_away_team: string;
  away_team_key: number;
  event_halftime_result: string;
  event_final_result: string;
  event_ft_result: string;
  event_penalty_result: string;
  event_status: string;
  country_name: string;
  league_name: string;
  league_key: number;
  league_round: string;
  league_season: string;
  event_live: string;
  event_stadium: string;
  event_referee: string;
  home_team_logo: string;
  away_team_logo: string;
  event_country_key: number;
  league_logo: string;
  country_logo: string;
  event_home_formation: string;
  event_away_formation: string;
  fk_stage_key: number;
  stage_name: string;
  league_group: null | string;
  goalscorers: [];
  substitutes: [];
  cards: [];
  lineups: {
    home_team: {
      starting_lineups: [];
      substitutes: [];
      coaches: [];
      missing_players: [];
    };
    away_team: {
      starting_lineups: [];
      substitutes: [];
      coaches: [];
      missing_players: [];
    };
  };
  statistics: [];
}

export interface IGoalscorers {
  time: string;
  home_scorer: string;
  home_scorer_id: string;
  home_assist: string;
  home_assist_id: string;
  score: string;
  away_scorer: string;
  away_scorer_id: string;
  away_assist: string;
  away_assist_id: string;
  info: string;
  info_time: string;
}

export interface ISubstitutes {
  time: string;
  home_scorer: [];
  home_assist: null;
  score: string;
  away_scorer: {
    in: string;
    out: string;
    in_id: number;
    out_id: number;
  };
  away_assist: null;
  info: null;
  info_time: string;
}

export interface ICards {
  time: string;
  home_fault: string;
  card: string;
  away_fault: string;
  info: string;
  home_player_id: string;
  away_player_id: string;
  info_time: string;
}

export interface ILineups {
  player: string;
  player_number: number;
  player_position: number;
  player_country: null | string;
  player_key: number;
  info_time: number;
}

export interface IStartSubtitutes {
  player: string;
  player_number: number;
  player_position: number;
  player_country: null | string;
  player_key: number;
  info_time: string;
}

export interface ICoaches {
  coache: string;
  coache_country: null | string;
}

export interface IStatistic {
  type: string;
  home: string;
  away: string;
}

export interface IFinishedTodayMatch {
  event_key: number;
  event_date: string;
  event_time: string;
  event_home_team: string;
  home_team_key: number;
  event_away_team: string;
  away_team_key: number;
  event_halftime_result: string;
  event_final_result: string;
  event_ft_result: string;
  event_penalty_result: string;
  event_status: string;
  country_name: string;
  league_name: string;
  league_key: string;
  league_round: string;
  league_season: string;
  event_live: string;
  event_stadium: string;
  event_referee: string;
  home_team_logo: string;
  away_team_logo: string;
  event_country_key: number;
  league_logo: string;
  country_logo: string;
  event_home_formation: string;
  event_away_formation: string;
  fk_stage_key: number;
  stage_name: string;
  league_group: null | string;
  goalscorers: IGoalscorers[] | [];
  substitutes: ISubstitutes[] | [];
  cards: ICards[] | [];
  lineups: {
    home_team: {
      starting_lineups: ILineups[];
      substitutes: IStartSubtitutes[];
      coaches: ICoaches[];
      missing_players: [];
    };
    away_team: {
      starting_lineups: ILineups[];
      substitutes: IStartSubtitutes[];
      coaches: ICoaches[];
      missing_players: [];
    };
  };
  statistics: IStatistic[];
}

export interface ITodayOdd {
  odd_1: number;
  odd_2: number;
  odd_x: number;
}

export interface ITodayOdds {
  [index: string]: ITodayOdd[];
}

export interface IMatchesState {
  todayMatches: ITodayMatch[];
  finishedTodayMatches: IFinishedTodayMatch[];
  liveTodayMatches: IFinishedTodayMatch[];
  oddsTodayMatches: ITodayOdds;
  isDistributePrizesModal: boolean;
  itemDistributePizesModal: IFinishedTodayMatch | null;
  isCreateGameModal: boolean;
  itemCreateGameModal: ITodayMatch | null;
  isBetModal: boolean;
  itemBetModal: ITodayMatch | null;
}

export interface IMatchesParams {
  date: string;
  countryId: string;
  leagueId: string;
}

export interface IOpenedLeagueState {
  todayMatches: ITodayMatch[];
  finishedTodayMatches: IFinishedTodayMatch[];
  liveTodayMatches: IFinishedTodayMatch[];
  oddsTodayMatches: ITodayOdds;
  isDistributePrizesModal: boolean;
  itemDistributePizesModal: IFinishedTodayMatch | null;
  isCreateGameModal: boolean;
  itemCreateGameModal: ITodayMatch | null;
  isBetModal: boolean;
  itemBetModal: ITodayMatch | null;
}

export interface IOpenedLeagueReducer {
  openedLeagueReducer: IOpenedLeagueState;
}

export interface IGetMatchesAction {
  type: IMatchesActionTypes.GET_MATCHES | IMatchesActionTypes.SET_MATCHES;
  payload: IMatchesParams | ITodayMatch[] | IFinishedTodayMatch[];
}

export interface IShowModalsAction {
  type:
    | IMatchesActionTypes.SHOW_DISTRIBUTE_PRIZES_MODAL
    | IMatchesActionTypes.SET_DISTRIBUTE_PRIZES_MODAL
    | IMatchesActionTypes.SHOW_CREATE_GAME_MODAL
    | IMatchesActionTypes.SET_CREATE_GAME_MODAL
    | IMatchesActionTypes.SHOW_BET_MODAL
    | IMatchesActionTypes.SET_BET_MODAL;
  payload: boolean;
}

export interface IGetItemModalsAction {
  type:
    | IMatchesActionTypes.GET_ITEM_DISTRIBUTE_PRIZES_MODAL
    | IMatchesActionTypes.SET_ITEM_DISTRIBUTE_PRIZES_MODAL
    | IMatchesActionTypes.GET_ITEM_CREATE_GAME_MODAL
    | IMatchesActionTypes.SET_ITEM_CREATE_GAME_MODAL
    | IMatchesActionTypes.GET_ITEM_BET_MODAL
    | IMatchesActionTypes.SET_ITEM_BET_MODAL;
  payload: IFinishedTodayMatch;
}

export type IMatchesAction =
  | IGetMatchesAction
  | IShowModalsAction
  | IGetItemModalsAction;
