import { ethers } from "ethers";

export enum IOwnerActionTypes {
  GET_OWNER_ACCOUNT = "GET_OWNER_ACCOUNT",
  SET_OWNER_ACCOUNT = "SET_OWNER_ACCOUNT",
  GET_BALANCE_CONTRACT = "GET_BALANCE_CONTRACT",
  SET_BALANCE_CONTRACT = "SET_BALANCE_CONTRACT",
}

export interface IOwnerState {
  ownerAccount: string;
  contractBalance: string;
}

export interface IOwnerReducer {
  ownerReducer: IOwnerState;
}

export interface IOwnerAccount {
  ownerAccount: string;
}


export interface IOwnerAction {
  type:
    | IOwnerActionTypes.GET_OWNER_ACCOUNT
    | IOwnerActionTypes.SET_OWNER_ACCOUNT
    | IOwnerActionTypes.GET_BALANCE_CONTRACT
    | IOwnerActionTypes.SET_BALANCE_CONTRACT;
  payload: IOwnerAccount | ethers.Contract | string | null;
}
