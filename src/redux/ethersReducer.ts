import {
  IEthersAction,
  IEthersActionTypes,
  IEthersState,
} from "../types/ethers";

export const initialState = {
  userAccount: "",
  userBalance: "0",
};

export const ethersReducer = (
  state: IEthersState = initialState,
  action: IEthersAction
) => {
  switch (action.type) {
    case IEthersActionTypes.SET_USER_ACCOUNT:
      return {
        ...state,
        userAccount: action.payload?.userAccount,
        userBalance: action.payload?.userBalance,
      };
    default:
      return state;
  }
};
