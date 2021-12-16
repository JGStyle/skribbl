import CanvasUI from "../../components/game/CanvasUI";
import Chat from "../../components/chat/Chat";
import Sidebar from "../../components/players/Sidebar";
import Topbar from "../../components/game/Topbar";
import Wordpicker from "../../components/game/Wordpicker";
import { useEffect, useRef, useState } from "react";
import CanvasRef from "../../models/CanasRef";
import Player from "../../models/Player";

export default function Home() {
  const [time, setTime] = useState(30);
  const [activeRound, setActiveRound] = useState(1);
  const [maxRound, setMaxRound] = useState(5);
  const [roomName, setRoomName] = useState("room name");
  const [disableCanvas, setDisableCanvas] = useState(false);
  const [activeWord, setActiveWord] = useState("activeword");
  const [selectWords, setSelectWord] = useState([]); //["hamburger", "apple", "ball"]
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

  function addPlayer(player: Player) {
    setPlayers((prev) => [...prev, player]);
  }

  function removePlayer(id: number) {
    let cp = players.slice();
    for (let i = 0; i < cp.length; i++) {
      console.log(cp[i].id);
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

  function getCanvas(): String {
    return canvas.current!.getCanvas();
  }
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
            <Chat
              messages={[
                {
                  msg: "test message",
                  author: "Player",
                  color: "#000000",
                },
              ]}
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
