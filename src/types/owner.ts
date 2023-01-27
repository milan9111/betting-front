import { ethers } from "ethers";

export enum IOwnerActionTypes {
  GET_OWNER_ACCOUNT = "GET_OWNER_ACCOUNT",
  SET_OWNER_ACCOUNT = "SET_OWNER_ACCOUNT",
  GET_BALANCE_CONTRACT = "GET_BALANCE_CONTRACT",
  SET_BALANCE_CONTRACT = "SET_BALANCE_CONTRACT",
  SEND_VALUE_TO_CONTRACT = "SEND_VALUE_TO_CONTRACT",
  TRANSFER_BALANCE = "TRANSFER_BALANCE",
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

export interface IOwnerSendValueToContract {
  value: string;
  contract: ethers.Contract;
}

export interface IOwnerAction {
  type:
    | IOwnerActionTypes.GET_OWNER_ACCOUNT
    | IOwnerActionTypes.SET_OWNER_ACCOUNT
    | IOwnerActionTypes.GET_BALANCE_CONTRACT
    | IOwnerActionTypes.SET_BALANCE_CONTRACT
    | IOwnerActionTypes.SEND_VALUE_TO_CONTRACT;
  payload:
    | IOwnerAccount
    | ethers.Contract
    | string
    | IOwnerSendValueToContract
    | null;
}
