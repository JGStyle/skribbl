import CanvasUI from "../../components/game/CanvasUI";
import Chat from "../../components/chat/Chat";
import Sidebar from "../../components/players/Sidebar";
import Topbar from "../../components/game/Topbar";
import Wordpicker from "../../components/game/Wordpicker";
import { useState } from "react";

export default function Home() {
  const [time, setTime] = useState(30);
  const [activeRound, setActiveRound] = useState(1);
  const [maxRound, setMaxRound] = useState(5);

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
  return (
    <div className="flex justify-center items-center min-h-screen min-w-screen bg-main">
      <div className="flex flex-col">
        <Topbar
          roomname="Peters raum"
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
                  guessed: true,
                },
                {
                  name: "j",
                  id: "1",
                  score: 750,
                  wins: 2,
                  status: "",
                  guessed: false,
                },
              ]}
              admin={true}
            />
          </div>
          <CanvasUI disabled={false} word="banana" />
          <div className="ml-4">
            <Chat
              self="JGStyle"
              messages={[
                {
                  msg: "Cooles Spiel",
                  author: "Alisia",
                  color: "#000",
                },
              ]}
            />
          </div>
        </div>
        {/* uncomment to show wordpicker */}
        {/* <Wordpicker
          words={["hamburger", "apple", "ball"]}
          chooseWord={(w) => {
            console.log(w);
          }}
        /> */}
      </div>
    </div>
  );
}
