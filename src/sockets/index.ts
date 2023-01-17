import { io } from "socket.io-client";

const host = process.env.REACT_APP_WEBSOCKETS as string;

export const socket = io(host);
