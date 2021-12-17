import { atom } from "recoil";
import Message from "./models/Message";
import Player from "./models/Player";

export const userList = atom<Player[]>({
  key: "userList",
  default: [],
});

export const messages = atom<Message[]>({
  key: "messages",
  default: [],
});

export const socket = atom<WebSocket | null>({
  key: "socket",
  default: null,
});
