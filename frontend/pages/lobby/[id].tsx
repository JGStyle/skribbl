import { useEffect, useState } from "react";
import Sidebar from "../../components/players/Sidebar";
import Chat from "../../components/chat/Chat";
import Config from "../../components/lobby/Configuration";
import { messagesAtom, selfAtom, userListAtom } from "../../atoms";
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
  const router = useRouter();

  const { socket, setSocket } = useContext(SocketContext);

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
        author: self.id,
      })
    );
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
      id: author,
    });
    socket?.send(JSON.stringify(event));
    setJoin(false);
  }

  useEffect(() => {
    const { id } = router.query;
    // let url = "wss://skribb.herokuapp.com/ws";
    let url = "ws://localhost:8080/ws";
    url += `?room=${id}`;
    const ws = new WebSocket(url);
    setSocket(ws);
  }, []);

  const admin = false;

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
          <Sidebar
            players={[
              {
                name: self.name,
                score: self.score,
                wins: self.wins,
                status: self.status,
                id: self.id,
                guessed: self.guessed,
                color: self.color,
                profile: self.profile,
              },
              ...userList,
            ]}
            admin={admin}
          />
          <Config admin={admin} />
          <Chat messages={messages} sendMsg={sendMessage} />
          <Footer />
        </div>
      </div>
    );
  }
}
