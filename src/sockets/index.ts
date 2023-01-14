import { io } from "socket.io-client";

const host = 'https://nestjs-prod-nestjs-7cc7w2.mo4.mogenius.io/';

export const socket = io(host);

