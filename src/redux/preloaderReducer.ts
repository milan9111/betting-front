import {
  IPreloaderAction,
  IPreloaderActionTypes,
  IPreloaderState,
} from "../types/preloader";

export const initialState = {
  loading: false,
};

export const preloaderReducer = (
  state: IPreloaderState = initialState,
  action: IPreloaderAction
) => {
  switch (action.type) {
    case IPreloaderActionTypes.SET_PRELOADER:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
