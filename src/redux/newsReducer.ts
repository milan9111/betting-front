import { INewsAction, INewsActionTypes, INewsState } from "../types/news";

export const initialState = {
  news: [],
};

export const newsReducer = (
  state: INewsState = initialState,
  action: INewsAction
) => {
  switch (action.type) {
   
    case INewsActionTypes.SET_NEWS:
      return {
        ...state,
        news: action.payload,
      };
    default:
      return state;
  }
};
