import { IOwnerAction, IOwnerActionTypes, IOwnerState } from "../types/owner";

export const initialState = {
  ownerAccount: "",
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
    default:
      return state;
  }
};
