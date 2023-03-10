import { ethers } from "ethers";
import { IChatActionTypes } from "../../types/chat";
import { IEthersActionTypes } from "../../types/ethers";
import { ILeaguesActionTypes } from "../../types/leagues";
import {
  ICreatedGames,
  IFinishedTodayMatch,
  IMatchesActionTypes,
  ITodayMatch,
  IUndistributedMatches,
} from "../../types/matches";
import { INewsActionTypes } from "../../types/news";
import { IOwnerActionTypes } from "../../types/owner";
import { IPreloaderActionTypes } from "../../types/preloader";

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

export const getStandings = (leagueId: string) => {
  return {
    type: IMatchesActionTypes.GET_STANDINGS,
    payload: leagueId,
  };
};

export const showDistributePrizesModal = (value: boolean) => {
  return {
    type: IMatchesActionTypes.SHOW_DISTRIBUTE_PRIZES_MODAL,
    payload: value,
  };
};

export const showUnDistributedPrizesModal = (value: boolean) => {
  return {
    type: IMatchesActionTypes.SHOW_UNDISTRIBUTED_PRIZES_MODAL,
    payload: value,
  };
};

export const getItemDistributePizesModal = (item: IFinishedTodayMatch) => {
  return {
    type: IMatchesActionTypes.GET_ITEM_DISTRIBUTE_PRIZES_MODAL,
    payload: item,
  };
};

export const getItemUnDistributedPizesModal = (item: IUndistributedMatches) => {
  return {
    type: IMatchesActionTypes.GET_ITEM_UNDISTRIBUTED_PRIZES_MODAL,
    payload: item,
  };
};

export const distributePrizes = (
  _idMongo: string | undefined,
  ethIndex: number | undefined,
  winner: string | undefined,
  contract: ethers.Contract | null
) => {
  return {
    type: IMatchesActionTypes.DISTRIBUTE_PRIZES,
    payload: { _idMongo, ethIndex, winner, contract },
  };
};

export const unDistributedPrizes = (
  _idMongo: string | undefined,
  ethIndex: number | undefined,
  oddsId: number | undefined,
  contract: ethers.Contract | null
) => {
  return {
    type: IMatchesActionTypes.UNDISTRIBUTED_PRIZES,
    payload: { _idMongo, ethIndex, oddsId, contract },
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

export const bidMatch = (
  ethIndex: number | undefined,
  teamSelected: number,
  bidValue: string,
  contract: ethers.Contract | null
) => {
  return {
    type: IMatchesActionTypes.BID_MATCH,
    payload: { ethIndex, teamSelected, bidValue, contract },
  };
};

export const showBetModal = (value: boolean) => {
  return {
    type: IMatchesActionTypes.SHOW_BET_MODAL,
    payload: value,
  };
};

export const showShortBetModal = (value: boolean) => {
  return {
    type: IMatchesActionTypes.SHOW_SHORT_BET_MODAL,
    payload: value,
  };
};

export const getItemBetModal = (item: ITodayMatch) => {
  return {
    type: IMatchesActionTypes.GET_ITEM_BET_MODAL,
    payload: item,
  };
};

export const getItemShortBetModal = (item: ICreatedGames) => {
  return {
    type: IMatchesActionTypes.GET_ITEM_SHORT_BET_MODAL,
    payload: item,
  };
};

export const getUserAccount = () => {
  return {
    type: IEthersActionTypes.GET_USER_ACCOUNT,
  };
};

export const getUndistributedMatches = () => {
  return {
    type: IMatchesActionTypes.GET_UNDISTRIBUTED_MATCHES,
  };
};

export const getCreatedGames = () => {
  return {
    type: IMatchesActionTypes.GET_CREATED_GAMES,
  };
};

export const getNews = () => {
  return {
    type: INewsActionTypes.GET_NEWS,
  };
};

export const getMessages = () => {
  return {
    type: IChatActionTypes.GET_MESSAGES,
  };
};

export const createMessage = (message: string) => {
  return {
    type: IChatActionTypes.CREATE_MESSAGE,
    payload: message,
  };
};

export const onLoading = (value: boolean) => {
  return {
    type: IPreloaderActionTypes.GET_PRELOADER,
    payload: value,
  };
};

export const getOwner = (contract: ethers.Contract | null) => {
  return {
    type: IOwnerActionTypes.GET_OWNER_ACCOUNT,
    payload: contract,
  };
};

export const getBalance = (contract: ethers.Contract | null) => {
  return {
    type: IOwnerActionTypes.GET_BALANCE_CONTRACT,
    payload: contract,
  };
};

export const sendValueToContract = (
  value: string,
  contract: ethers.Contract | null
) => {
  return {
    type: IOwnerActionTypes.SEND_VALUE_TO_CONTRACT,
    payload: { value, contract },
  };
};

export const transferBalance = (contract: ethers.Contract | null) => {
  return {
    type: IOwnerActionTypes.TRANSFER_BALANCE,
    payload: contract,
  };
};

export const checkFailedAccountAdress = (
  failedAccountAddress: string,
  contract: ethers.Contract | null
) => {
  return {
    type: IOwnerActionTypes.GET_FAILED_ACCOUNT_ADDRESS,
    payload: { failedAccountAddress, contract },
  };
};
