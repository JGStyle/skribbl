import CanvasUI from "../components/game/CanvasUI";
import Chat from "../components/chat/Chat";
import Sidebar from "../components/players/Sidebar";
import Topbar from "../components/game/Topbar";
import Wordpicker from "../components/game/Wordpicker";
import { useEffect, useRef, useState, useContext } from "react";
import { useRecoilState } from "recoil";
import {
  userListAtom,
  messagesAtom,
  selfAtom,
  canvasAtom,
  gameAtom,
} from "../atoms";
import { SocketContext } from "../components/websockets/SocketContext";
import CanvasRef from "../models/CanasRef";
import colors from "../components/default/Colors";
import Footer from "../components/default/Footer";

export default function Game() {
  const [time, setTime] = useState(30);
  const [activeRound, setActiveRound] = useState(1);
  const [game, setGame] = useRecoilState(gameAtom);
  const [disableCanvas, setDisableCanvas] = useState(false);
  const [selectWords, setSelectWord] = useState([]);
  const [lastCanvas, setLastCanvas] = useState("");
  const { socket, setSocket } = useContext(SocketContext);
  const [userList, setUserList] = useRecoilState(userListAtom);
  const [messages, setMessages] = useRecoilState(messagesAtom);
  const [self, setSelf] = useRecoilState(selfAtom);
  const [canvas, setCanvas] = useRecoilState(canvasAtom);
  const canvasRef = useRef<CanvasRef>(null);

  useEffect(() => {
    if (Object.keys(canvas).length !== 0) {
      console.log(canvas);
      if ("trigger-reset" in canvas) {
        clearCanvas();
      } else if ("trigger-undo" in canvas) {
        undoCanvas();
      } else {
        appendCanvasState(canvas);
      }
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

  function sendTyping(t: boolean) {
    let event = {
      event: "chat:typing",
      payload: { typing: t },
    };
    socket?.send(JSON.stringify(event));
  }

  function clearCanvas() {
    canvasRef.current!.plainReset();
  }

  function undoCanvas() {
    canvasRef.current!.plainUndo();
  }

  function sendUndo() {
    socket?.send(JSON.stringify({ event: "canvas:undo" }));
  }

  function sendReset() {
    socket?.send(JSON.stringify({ event: "canvas:reset" }));
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

  function handleCanvasChange(event: any) {
    setLastCanvas((prev) => {
      let data = getReducedCanvas();
      let stringdata = JSON.stringify(data);
      if (stringdata !== prev) {
        console.log("called");
        socket?.send(getBitArrayBuffer(data));
      }
      return stringdata;
    });

    // let data = getReducedCanvas();
    // let stringdata = JSON.stringify(data);
    // console.log("seperator-------------------");
    // console.log(stringdata);
    // console.log(lastCanvas);
    // console.log(data == lastCanvas);
    // if (stringdata !== lastCanvas) {
    //   socket?.send(getBitArrayBuffer(data));
    // }
    // setLastCanvas(stringdata);
  }

  useEffect(() => {
    console.log("changed:", lastCanvas);
  }, [lastCanvas]);

  useEffect(() => {
    addEventListener("mouseup", handleCanvasChange);
    addEventListener("touchend", handleCanvasChange);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen min-w-screen bg-main">
      <div className="flex flex-col">
        <Topbar
          roomname={game.name}
          time={time}
          round={`${activeRound}/${game.rounds}`}
        />
        <div className="flex justify-center">
          <div className="mr-4 lg:block hidden">
            <Sidebar players={userList} />
          </div>
          <CanvasUI
            disabled={disableCanvas}
            word={game.activeWord}
            sendReset={sendReset}
            sendUndo={sendUndo}
            ref={canvasRef}
          />
          <div className="ml-4">
            <Chat
              sendMsg={sendMessage}
              messages={messages}
              sendTyping={sendTyping}
            />
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
        <Footer />
      </div>
    </div>
  );
}
