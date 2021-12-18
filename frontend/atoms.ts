import { atom } from "recoil";
import Message from "./models/Message";
import Player from "./models/Player";

export const userListAtom = atom<Player[]>({
  key: "userList",
  default: [],
});

export const messagesAtom = atom<Message[]>({
  key: "messages",
  default: [],
});

export const socketAtom = atom<WebSocket | null>({
  key: "socket",
  default: null,
});

export const selfAtom = atom<Player>({
  key: "self",
  default: {
    score: 0,
    name: "",
    wins: 0,
    status: "",
    guessed: false,
    color: "",
    profile: "",
    id: 0,
  },
});

export const canvasAtom = atom<object>({
  key: "canvas",
  default: {},
});
