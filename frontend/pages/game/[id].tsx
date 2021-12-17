import CanvasUI from "../../components/game/CanvasUI";
import Chat from "../../components/chat/Chat";
import Sidebar from "../../components/players/Sidebar";
import Topbar from "../../components/game/Topbar";
import Wordpicker from "../../components/game/Wordpicker";
import { useEffect, useRef, useState } from "react";
import CanvasRef from "../../models/CanasRef";
import Player from "../../models/Player";
import colors from "../../components/default/Colors";
import MessageType from "../../models/Message";

export default function Home() {
  const [time, setTime] = useState(30);
  const [activeRound, setActiveRound] = useState(1);
  const [maxRound, setMaxRound] = useState(5);
  const [roomName, setRoomName] = useState("room name");
  const [disableCanvas, setDisableCanvas] = useState(false);
  const [activeWord, setActiveWord] = useState("activeword");
  const [selectWords, setSelectWord] = useState([]); //["hamburger", "apple", "ball"]
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [players, setPlayers] = useState([
    {
      name: "player a",
      id: 6,
      score: 100,
      wins: 4,
      status: "active",
      guessed: false,
      color: "#FFFFFF",
      profile: "abc",
    },
  ]);
  const canvas = useRef<CanvasRef>(null);
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [lastCanvas, setLastCanvas] = useState("");

  function addPlayer(player: Player) {
    setPlayers((prev) => [...prev, player]);
  }

  function removePlayer(id: number) {
    let cp = players.slice();
    for (let i = 0; i < cp.length; i++) {
      if (cp[i].id == id) {
        cp.splice(i, 1);
        break;
      }
    }
    setPlayers(cp);
  }

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
    canvas.current!.resetCanvas();
  }

  function loadCanvas(data: string, immediate: boolean) {
    canvas.current!.loadCanvas(data, immediate);
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

  function interpretByteBlob(blob: Blob) {
    // convert blob to uint16Array
    let arrayBuffer;
    let fileReader = new FileReader();
    fileReader.onload = (event) => {
      // @ts-ignore
      reconstructJSONFromUint16Array(new Uint16Array(event.target.result));
    };
    fileReader.readAsArrayBuffer(blob);
  }

  function reconstructJSONFromUint16Array(a: Uint16Array) {
    let brushandcolor = a[0];
    let json = { brushColor: "", brushRadius: 0, points: [] };
    json.brushColor = colors[Math.floor(brushandcolor / 5)];
    json.brushRadius = ((brushandcolor % 5) + 1) * 3;
    let i = 0;
    // @ts-ignore
    for (let i = 1; i < a.length; i += 2) {
      // @ts-ignore
      json.points.push({ x: a[i], y: a[i + 1] });
    }
    appendCanvasState(json);
  }

  function appendCanvasState(d: {}) {
    let c = JSON.parse(getCanvas());
    c.lines.push(d);
    loadCanvas(JSON.stringify(c), true);
  }

  function getCanvas(): string {
    return canvas.current!.getCanvas();
  }

  function addMessage(m: MessageType) {
    setMessages((prev) => [...prev, m]);
  }

  function sendMessage(m: string) {
    addMessage({
      msg: m,
      author: "you",
      color: "#f2a05a",
    });
    socket?.send(
      JSON.stringify({
        event: "chat:msg",
        payload: { msg: m, author: "user", color: "#4bc20f" },
        author: "user",
      })
    );
  }

  useEffect(() => {
    const ws = new WebSocket("wss://skribb.heroku.com/ws");
    setSocket(ws);

    function handleCanvas(event: any) {
      let data = getReducedCanvas();
      if (data !== lastCanvas) {
        ws.send(getBitArrayBuffer(data));
      }
    }

    addEventListener("mouseup", handleCanvas);
    addEventListener("touchend", handleCanvas);

    ws.onmessage = ({ data }) => {
      if (typeof data === "string") {
        addMessage(JSON.parse(data).payload);
      } else {
        interpretByteBlob(data);
      }
    };
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
            <Sidebar players={players} admin={true} />
          </div>
          <CanvasUI disabled={disableCanvas} word={activeWord} ref={canvas} />
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
