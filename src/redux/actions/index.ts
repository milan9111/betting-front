import { ethers } from "ethers";
import { IEthersActionTypes } from "../../types/ethers";
import { ILeaguesActionTypes } from "../../types/leagues";
import {
  IFinishedTodayMatch,
  IMatchesActionTypes,
  ITodayMatch,
} from "../../types/matches";

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
  };
};

export const getItemDistributePizesModal = (item: IFinishedTodayMatch) => {
  return {
    type: IMatchesActionTypes.GET_ITEM_DISTRIBUTE_PRIZES_MODAL,
    payload: item,
  };
};

export const showCreateGameModal = (value: boolean) => {
  return {
    type: IMatchesActionTypes.SHOW_CREATE_GAME_MODAL,
    payload: value,
  };
};

export const getItemCreateGameModal = (item: ITodayMatch) => {
  return {
    type: IMatchesActionTypes.GET_ITEM_CREATE_GAME_MODAL,
    payload: item,
  };
};

export const createGame = (
  item: ITodayMatch,
  contract: ethers.Contract,
  userAccount: string
) => {
  return {
    type: IMatchesActionTypes.CREATE_GAME,
    payload: { item, contract, userAccount },
  };
};

export const showBetModal = (value: boolean) => {
  return {
    type: IMatchesActionTypes.SHOW_BET_MODAL,
    payload: value,
  };
};

export const getItemBetModal = (item: ITodayMatch) => {
  return {
    type: IMatchesActionTypes.GET_ITEM_BET_MODAL,
    payload: item,
  };
};

export const getUserAccount = () => {
  return {
    type: IEthersActionTypes.GET_USER_ACCOUNT,
  };
};
