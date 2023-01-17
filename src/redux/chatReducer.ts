import { IChatAction, IChatActionTypes, IChatState } from "../types/chat";

export const initialState = {
  messages: [],
};

export const chatReducer = (
  state: IChatState = initialState,
  action: IChatAction
) => {
  switch (action.type) {
    case IChatActionTypes.SET_MESSAGES:
      return {
        ...state,
        messages: action.payload,
      };
    default:
      return state;
  }
};
