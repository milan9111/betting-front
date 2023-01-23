export enum IPreloaderActionTypes {
  GET_PRELOADER = "GET_PRELOADER",
  SET_PRELOADER = "SET_PRELOADER",
}

export interface IPreloaderReducer {
  preloaderReducer: IPreloaderState;
}

export interface IPreloaderState {
  loading: boolean;
}

export interface IPreloaderAction {
  type: IPreloaderActionTypes.GET_PRELOADER | IPreloaderActionTypes.SET_PRELOADER;
  payload: boolean;
}


