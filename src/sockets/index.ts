import { io } from "socket.io-client";

const host = 'http://localhost:5000';

export const socket = io(host);

