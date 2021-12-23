import { useEffect, useState } from "react";
import Sidebar from "../../components/players/Sidebar";
import Chat from "../../components/chat/Chat";
import Config from "../../components/lobby/Configuration";
import { messagesAtom, selfAtom, userListAtom, gameAtom } from "../../atoms";
import { useRecoilState } from "recoil";
import { useContext } from "react";
import { SocketContext } from "../../components/websockets/SocketContext";
import Createprofile from "../../components/players/Createprofile";
import { useRouter } from "next/router";
import Footer from "../../components/default/Footer";

export default function Lobby() {
  const [join, setJoin] = useState(true);
  const [messages, setMessages] = useRecoilState(messagesAtom);
  const [userList, setUserList] = useRecoilState(userListAtom);
  const [self, setSelf] = useRecoilState(selfAtom);
  const [game, setGame] = useRecoilState(gameAtom);
  const { socket, setSocket } = useContext(SocketContext);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (game.rounds != -1) {
      router.push("/game");
    }
  }, [game]);

  function startGame(payload: {}) {
    // console.log(payload);
    // router.push("/game");
  }

  function sendMessage(m: string) {
    setMessages([
      ...messages,
      {
        msg: m,
        author: self.name,
        color: self.color,
      },
    ]);
    socket?.send(
      JSON.stringify({
        event: "chat:msg",
        payload: { msg: m, author: self.name, color: self.color },
      })
    );
  }

  function sendTyping(t: boolean) {
    let event = {
      event: "chat:typing",
      payload: { typing: t },
    };
    socket?.send(JSON.stringify(event));
  }

  function joinLobby(event: {}): void {
    // @ts-ignore
    let { payload, author } = event;
    setSelf({
      name: payload.name,
      score: 0,
      wins: 0,
      status: "",
      guessed: false,
      color: payload.color,
      profile: payload.profile,
      typing: false,
      id: author,
    });
    socket?.send(JSON.stringify(event));
    setJoin(false);
  }

  useEffect(() => {
    if (id !== undefined) {
      let url = "wss://skribb.herokuapp.com/ws";
      // let url = "ws://localhost:8080/ws";
      console.log("ID-G" + id);
      url += `?room=${id}`;
      const ws = new WebSocket(url);
      setSocket(ws);
    }
  }, [id]);

  const admin = true;

  if (join) {
    return (
      <div className="flex justify-center items-center min-h-screen min-w-screen bg-main">
        <Createprofile onJoin={joinLobby}></Createprofile>
      </div>
    );
  } else {
    return (
      <div className="flex justify-center items-center min-h-screen min-w-screen bg-main">
        <div className="flex gap-x-2" style={{ height: "550px" }}>
          <Sidebar players={userList} />
          <Config admin={admin} start={startGame} />
          <Chat
            messages={messages}
            sendMsg={sendMessage}
            sendTyping={sendTyping}
          />
          <Footer />
        </div>
      </div>
    );
  }
}
