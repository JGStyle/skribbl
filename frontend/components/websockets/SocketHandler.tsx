import { useRecoilState } from "recoil";
import { userListAtom, messagesAtom, selfAtom, canvasAtom } from "../../atoms";
import { SocketContext } from "./SocketContext";
import { FC, useEffect, useContext } from "react";
import colors from "../default/Colors";

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
      console.log(socket);
      socket.onmessage = (msg) => {
        if (typeof msg.data == "string") {
          const { data } = msg;
          const message = JSON.parse(data);
          switch (message.event) {
            case "lobby:join":
              setUserList([...userList, message.payload]);
              break;
            case "chat:msg":
              setMessages((prev) => [...prev, message.payload]);
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
            case "game:kick":
              // TODO
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
