export enum IChatActionTypes {
  CREATE_MESSAGE = "CREATE_MESSAGE",
  GET_MESSAGES = "GET_MESSAGES",
  SET_MESSAGES = "SET_MESSAGES",
}

export interface IMessage {
  _id: string;
  name: string;
  message: string;
}

export interface IChatState {
  messages: IMessage[];
}

export interface IChatReducer {
  chatReducer: IChatState;
}

export interface IChatAction {
  type:
    | IChatActionTypes.GET_MESSAGES
    | IChatActionTypes.SET_MESSAGES
    | IChatActionTypes.CREATE_MESSAGE;
  payload: IMessage | IMessage[];
}
