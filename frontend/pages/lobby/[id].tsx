import { useEffect } from "react";
import Sidebar from "../../components/players/Sidebar";
import Chat from "../../components/chat/Chat";
import Config from "../../components/lobby/Configuration";
import { messagesAtom } from "../../atoms";
import { useRecoilState } from "recoil";
import { useContext } from "react";
import { SocketContext } from "../../components/websockets/SocketContext";

export default function Lobby() {
  const [messages, setMessages] = useRecoilState(messagesAtom);

  const { socket, setSocket } = useContext(SocketContext);

  function sendMessage(m: string) {
    setMessages([
      ...messages,
      {
        msg: m,
        author: "you",
        color: "#f2a05a",
      },
    ]);
    socket?.send(
      JSON.stringify({
        event: "chat:msg",
        payload: { msg: m, author: "user", color: "#4bc20f" },
        author: "user",
      })
    );
  }

  useEffect(() => {
    // const ws = new WebSocket("wss://skribb.herokuapp.com/ws");
    const ws = new WebSocket("ws://localhost:8080/ws");
    setSocket(ws);
  }, []);

  const admin = true;
  return (
    <div className="flex justify-center items-center min-h-screen min-w-screen bg-main">
      <div className="flex gap-x-2" style={{ height: "550px" }}>
        <Sidebar
          players={[
            {
              name: "smorrin",
              score: 0,
              wins: 0,
              status: "host",
              id: 1,
              guessed: false,
              color: "#ffffff",
              profile: "abc",
            },
          ]}
          admin={admin}
        />
        <Config admin={admin} />
        <Chat messages={messages} sendMsg={sendMessage} />
      </div>
    </div>
  );
}
