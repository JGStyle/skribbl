import { useState } from "react";
import Input from "../default/Input";
import Btn from "../default/Btn";
import { variation as t } from "../default/Btn";

export default function Config({
  admin,
  start,
}: {
  admin: boolean;
  start: (payload: {}) => void;
}) {
  const [gamemode, setGamemode] = useState({
    s: false,
    n: true,
    r: false,
  });
  const [_rounds, setRounds] = useState({
    s: false,
    n: true,
    l: false,
  });
  const [roomname, setRoomname] = useState("");
  function updateRoomname(event: any) {
    setRoomname(event.target.value);
  }
  const [customwords, setCustomwords] = useState("");
  function updateCustomwords(event: any) {
    setCustomwords(event.target.value);
  }

  function startGame() {
    let rounds = 0;
    let timePerRound = 0;
    if (gamemode.s) {
      timePerRound = 40;
    } else if (gamemode.n) {
      timePerRound = 80;
    } else {
      timePerRound = 120;
    }
    if (_rounds.s) {
      rounds = 3;
    } else if (_rounds.n) {
      rounds = 6;
    } else {
      rounds = 9;
    }
    start({ rounds, name: roomname, timePerRound, words: customwords });
  }

  if (admin) {
    return (
      <div
        className="flex flex-col justify-between gap-y-3 h-full bg-white bg-opacity-10 rounded-3xl p-4 text-white"
        style={{ width: "350px" }}
      >
        <h1 className="font-semibold text-4xl">game config</h1>
        <div>
          <h2 className="text-xl mb-2">room name</h2>
          <Input
            placeholder="123theavengers"
            change={updateRoomname}
            value={roomname}
            onEnter={() => {}}
          />
        </div>
        <div>
          <h2 className="text-xl mb-2">rounds</h2>
          <div className="flex gap-x-1">
            <button
              className={`${
                _rounds.s
                  ? "bg-yellow-500 text-white scale-125 z-10"
                  : "bg-white text-black"
              } px-4 py-2.5 rounded-xl w-full transform transition-all`}
              onClick={() => setRounds({ s: true, n: false, l: false })}
            >
              3
            </button>
            <button
              className={`${
                _rounds.n
                  ? "bg-blue-500 text-white scale-125 z-10"
                  : "bg-white text-black"
              } px-4 py-2.5 rounded-xl w-full transform transition-all`}
              onClick={() => setRounds({ s: false, n: true, l: false })}
            >
              6
            </button>
            <button
              className={`${
                _rounds.l
                  ? "bg-purple-500 text-white scale-125 z-10"
                  : "bg-white text-black"
              } px-4 py-2.5 rounded-xl w-full transform transition-all`}
              onClick={() => setRounds({ s: false, n: false, l: true })}
            >
              9
            </button>
          </div>
        </div>
        <div>
          <h2 className="text-xl mb-2">game mode</h2>
          <div className="flex gap-x-1">
            <button
              className={`${
                gamemode.s
                  ? "bg-yellow-500 text-white scale-125 z-10"
                  : "bg-white text-black"
              } px-4 py-2.5 rounded-xl w-full transform transition-all`}
              onClick={() => setGamemode({ s: true, n: false, r: false })}
            >
              speedrun
            </button>
            <button
              className={`${
                gamemode.n
                  ? "bg-blue-500 text-white scale-125 z-10"
                  : "bg-white text-black"
              } px-4 py-2.5 rounded-xl w-full transform transition-all`}
              onClick={() => setGamemode({ s: false, n: true, r: false })}
            >
              normal
            </button>
            <button
              className={`${
                gamemode.r
                  ? "bg-purple-500 text-white scale-125 z-10"
                  : "bg-white text-black"
              } px-4 py-2.5 rounded-xl w-full transform transition-all`}
              onClick={() => setGamemode({ s: false, n: false, r: true })}
            >
              relaxed
            </button>
          </div>
        </div>
        <div className="mb-4">
          <h2 className="text-xl mb-2">custom words</h2>
          <Input
            placeholder="ferrari, porsche, tesla"
            change={updateCustomwords}
            value={customwords}
            onEnter={() => {}}
          />
        </div>
        <Btn type={t.Success} content="&rarr; start game" click={startGame} />
      </div>
    );
  } else {
    return (
      <div
        className="h-full runded-3xl flex flex-col justify-center items-center"
        style={{ width: "350px" }}
      >
        <h1 className="text-white text-2xl font-semibold text-center mb-4 px-16">
          waiting for host to start the game
        </h1>

        <div className="flex gap-2 animate-bounce">
          <div className="bg-white w-4 h-4 rounded-full"></div>
          <div className="bg-white w-4 h-4 rounded-full"></div>
          <div className="bg-white w-4 h-4 rounded-full"></div>
        </div>

        <h1 className="text-white text-2xl font-semibold text-center mb-16 mt-4">
          get ready
        </h1>
      </div>
    );
  }
}
