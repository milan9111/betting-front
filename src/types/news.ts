export enum INewsActionTypes {
  GET_NEWS = "GET_NEWS",
  SET_NEWS = "SET_NEWS",
}

export interface INews {
  uuid: string;
  title: string;
  description: string;
  keywords: string;
  snippet: string;
  url: string;
  image_url: string;
  language: string;
  published_at: string;
  source: string;
  categories: string[];
  relevance_score: number;
}

export interface INewsReducer {
  newsReducer: INewsState;
}

export interface INewsState {
  news: INews[];
}


export interface INewsAction {
    type:
      | INewsActionTypes.GET_NEWS
      | INewsActionTypes.SET_NEWS;
    payload: INews[] | null;
}

