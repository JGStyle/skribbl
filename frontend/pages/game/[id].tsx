import CanvasUI from "../../components/game/CanvasUI";
import Chat from "../../components/chat/Chat";
import Sidebar from "../../components/players/Sidebar";
import Topbar from "../../components/game/Topbar";
import Wordpicker from "../../components/game/Wordpicker";
import { useEffect, useRef, useState, useContext } from "react";
import { useRecoilState } from "recoil";
import { userListAtom, messagesAtom, selfAtom, canvasAtom } from "../../atoms";
import { SocketContext } from "../../components/websockets/SocketContext";
import CanvasRef from "../../models/CanasRef";
import Player from "../../models/Player";
import colors from "../../components/default/Colors";
import MessageType from "../../models/Message";

export default function Game() {
  const [time, setTime] = useState(30);
  const [activeRound, setActiveRound] = useState(1);
  const [maxRound, setMaxRound] = useState(5);
  const [roomName, setRoomName] = useState("room name");
  const [disableCanvas, setDisableCanvas] = useState(false);
  const [activeWord, setActiveWord] = useState("activeword");
  const [selectWords, setSelectWord] = useState([]); //["hamburger", "apple", "ball"]
  const canvasRef = useRef<CanvasRef>(null);
  const [lastCanvas, setLastCanvas] = useState("");

  const { socket, setSocket } = useContext(SocketContext);
  const [userList, setUserList] = useRecoilState(userListAtom);
  const [messages, setMessages] = useRecoilState(messagesAtom);
  const [self, setSelf] = useRecoilState(selfAtom);
  const [canvas, setCanvas] = useRecoilState(canvasAtom);

  useEffect(() => {
    if (Object.keys(canvas).length !== 0) {
      appendCanvasState(canvas);
    }
  }, [canvas]);

  function startTimer(seconds: number) {
    let timer = seconds;
    setTime(timer);
    const i = setInterval(() => {
      if (timer <= 0) {
        clearInterval(i);
      } else {
        timer -= 1;
        setTime(timer);
      }
    }, 1000);
  }

  function clearCanvas() {
    canvasRef.current!.resetCanvas();
  }

  function loadCanvas(data: string, immediate: boolean) {
    canvasRef.current!.loadCanvas(data, immediate);
  }

  function getReducedCanvas() {
    let data = JSON.parse(getCanvas());
    // @ts-ignore
    return data.lines[data.lines.length - 1];
  }

  function getBitArrayBuffer(data: {
    points: [{ x: number; y: number }];
    brushColor: string;
    brushRadius: number;
  }): Uint16Array {
    let amount = (data.points.length * 2 + 1) * 2;

    let buffer = new ArrayBuffer(amount);
    let view = new Uint16Array(buffer);

    let base = colors.indexOf(data.brushColor) * 5;
    base += data.brushRadius / 3 - 1;

    view[0] = base;
    for (let i = 1; i < view.length; i++) {
      let n = data.points[Math.floor((i - 1) / 2)];
      let j = 0;
      if (i % 2 == 1) {
        j = Math.floor(n.x);
      } else {
        j = Math.floor(n.y);
      }
      view[i] = j;
    }
    return view;
  }

  function appendCanvasState(d: {}) {
    let c = JSON.parse(getCanvas());
    c.lines.push(d);
    loadCanvas(JSON.stringify(c), true);
  }

  function getCanvas(): string {
    return canvasRef.current!.getCanvas();
  }

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
    function handleCanvas(event: any) {
      let data = getReducedCanvas();
      if (data !== lastCanvas) {
        socket?.send(getBitArrayBuffer(data));
      }
      setLastCanvas(data);
    }

    addEventListener("mouseup", handleCanvas);
    addEventListener("touchend", handleCanvas);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen min-w-screen bg-main">
      <div className="flex flex-col">
        <Topbar
          roomname={roomName}
          time={time}
          round={`${activeRound}/${maxRound}`}
        />
        <div className="flex justify-center">
          <div className="mr-4 lg:block hidden">
            <Sidebar players={userList} admin={true} />
          </div>
          <CanvasUI
            disabled={disableCanvas}
            word={activeWord}
            ref={canvasRef}
          />
          <div className="ml-4">
            <Chat sendMsg={sendMessage} messages={messages} />
          </div>
        </div>
        {selectWords.length > 0 && (
          <Wordpicker
            words={selectWords}
            chooseWord={(w) => {
              console.log(w);
            }}
          />
        )}
        <button
          onClick={() => console.log(getCanvas())}
          className="text-blue-400"
        >
          event
        </button>
      </div>
    </div>
  );
}
