import CanvasUI from "../../components/game/CanvasUI";
import Chat from "../../components/chat/Chat";
import Sidebar from "../../components/players/Sidebar";
import Topbar from "../../components/game/Topbar";
import Wordpicker from "../../components/game/Wordpicker";
import { useRef, useState } from "react";
import CanvasRef from "../../models/CanasRef";

export default function Home() {
  const [time, setTime] = useState(30);
  const [activeRound, setActiveRound] = useState(1);
  const [maxRound, setMaxRound] = useState(5);
  const [roomName, setRoomName] = useState("room name");
  const [disableCanvas, setDisableCanvas] = useState(false);
  const [activeWord, setActiveWord] = useState("activeword");
  const [selectWords, setSelectWord] = useState([]); //["hamburger", "apple", "ball"]
  const canvas = useRef<CanvasRef>(null);

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

  function loadCanvas(data: String, immediate: Boolean) {
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
            <Sidebar
              players={[
                {
                  name: "a",
                  id: "1",
                  score: 750,
                  wins: 2,
                  status: "",
                  guessed: false,
                },
                {
                  name: "j",
                  id: "2",
                  score: 750,
                  wins: 2,
                  status: "",
                  guessed: false,
                },
              ]}
              admin={true}
            />
          </div>
          {/* ts-ignore */}
          <CanvasUI disabled={disableCanvas} word={activeWord} ref={canvas} />
          <div className="ml-4">
            <Chat
              self="JGStyle"
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
        <button onClick={() => startTimer(30)}>action</button>
      </div>
    </div>
  );
}
