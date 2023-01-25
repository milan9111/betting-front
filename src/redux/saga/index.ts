import { spawn } from "redux-saga/effects";
import { watchAccount } from "./account";
import { watchChat } from "./chat";
import { watchMatches } from "./matches";
import { watchModals } from "./modals";
import { watchNews } from "./news";
import { watchOwner } from "./owner";
import { watchPreloader } from "./preloader";

export function* rootWatcher() {
  yield spawn(watchMatches);
  yield spawn(watchChat);
  yield spawn(watchModals);
  yield spawn(watchAccount);
  yield spawn(watchNews);
  yield spawn(watchPreloader);
  yield spawn(watchOwner);
}
