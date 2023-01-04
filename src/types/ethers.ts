import { ethers } from "ethers";

export enum IEthersActionTypes {
  GET_USER_ACCOUNT = "GET_USER_ACCOUNT",
  SET_USER_ACCOUNT = "SET_USER_ACCOUNT",
}

export interface IEthersState {
  userAccount: string;
  userBalance: string;
  contract: ethers.Contract | null;
}

export interface IEthersReducer {
  ethersReducer: IEthersState;
}

export interface IEthersAccount {
  userAccount: string;
  userBalance: string;
  contract: ethers.Contract | null;
}

export interface IEthersAction {
  type:
    | IEthersActionTypes.GET_USER_ACCOUNT
    | IEthersActionTypes.SET_USER_ACCOUNT;
  payload: IEthersAccount | null;
}

export type ILeagueAction = IEthersAction;
