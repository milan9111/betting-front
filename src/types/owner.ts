import { ethers } from "ethers";

export enum IOwnerActionTypes {
  GET_OWNER_ACCOUNT = "GET_OWNER_ACCOUNT",
  SET_OWNER_ACCOUNT = "SET_OWNER_ACCOUNT",
}

export interface IOwnerState {
  ownerAccount: string;
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
    | IOwnerActionTypes.SET_OWNER_ACCOUNT;
  payload: IOwnerAccount | ethers.Contract | null;
}
