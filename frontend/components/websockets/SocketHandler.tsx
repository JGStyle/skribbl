import { useRecoilState } from "recoil";
import { userListAtom, messagesAtom, selfAtom, canvasAtom } from "../../atoms";
import { SocketContext } from "./SocketContext";
import { FC, useEffect, useContext } from "react";
import colors from "../default/Colors";
import Player from "../../models/Player";

/**
 * {
 *  event: "o"
 *  payload:
 *  author: 0
 *  room: ""
 * }
 */

const SocketHandler: FC = ({ children }) => {
  const [userList, setUserList] = useRecoilState(userListAtom);
  const [messages, setMessages] = useRecoilState(messagesAtom);
  const [self, setSelf] = useRecoilState(selfAtom);
  const [canvas, setCanvas] = useRecoilState(canvasAtom);

  const { socket, setSocket } = useContext(SocketContext);

  useEffect(() => {
    if (socket) {
      socket.onmessage = (msg) => {
        if (typeof msg.data == "string") {
          const { data } = msg;
          const event = JSON.parse(data);
          switch (event.event) {
            case "lobby:join":
              let player = {
                id: event.author,
                name: event.payload.name,
                color: event.payload.color,
                profile: event.payload.profile,
                score: 0,
                wins: 0,
                guessed: false,
                typing: false,
                status: "",
              };
              setUserList((prev) => [...prev, player]);
              break;
            case "lobby:initial":
              const players: Player[] = JSON.parse(event.payload.players);
              const thomas = players.map((player) => ({
                ...player,
                status: "",
              }));
              setUserList(thomas);
              break;
            case "chat:msg":
              console.log(event);
              setMessages((prev) => [...prev, event.payload]);
              break;
            case "chat:guess":
              // TODO
              break;
            case "game:turnout":
              // TODO
              break;
            case "game:select":
              // TODO
              break;
            case "game:turn":
              // TODO
              break;
            case "game:leave":
              setUserList((prev) =>
                prev.filter((user) => user.id !== event.payload.user_id)
              );
              break;
            case "game:over":
              // TODO
              break;
          }
        } else {
          // canvas
          let arrayBuffer;
          let fileReader = new FileReader();
          fileReader.onload = (event) => {
            // @ts-ignore
            let a = new Uint16Array(event.target.result);
            let brushandcolor = a[0];
            let json = { brushColor: "", brushRadius: 0, points: [] };
            json.brushColor = colors[Math.floor(brushandcolor / 5)];
            json.brushRadius = ((brushandcolor % 5) + 1) * 3;
            let i = 0;
            for (let i = 1; i < a.length; i += 2) {
              // @ts-ignore
              json.points.push({ x: a[i], y: a[i + 1] });
            }
            setCanvas(json);
          };
          // @ts-ignore
          fileReader.readAsArrayBuffer(msg.data);
        }
      };
    }
  }, [socket]);

  return <>{children}</>;
};

function interpretByteBlob(blob: Blob) {
  // convert blob to uint16Array
}

function reconstructJSONFromUint16Array(a: Uint16Array) {}

export default SocketHandler;
