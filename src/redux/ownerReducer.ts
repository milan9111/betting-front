import { IOwnerAction, IOwnerActionTypes, IOwnerState } from "../types/owner";

export const initialState = {
  ownerAccount: "",
  contractBalance: "0",
  failedDebt: null,
};

export const ownerReducer = (
  state: IOwnerState = initialState,
  action: IOwnerAction
) => {
  switch (action.type) {
    case IOwnerActionTypes.SET_OWNER_ACCOUNT:
      return {
        ...state,
        ownerAccount: action.payload,
      };
    case IOwnerActionTypes.SET_BALANCE_CONTRACT:
      return {
        ...state,
        contractBalance: action.payload,
      };
    case IOwnerActionTypes.SET_FAILED_ACCOUNT_ADDRESS:
      return {
        ...state,
        failedDebt: action.payload,
      };
    default:
      return state;
  }
};
