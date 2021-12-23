import Player from "../../models/Player";
import CanvasDraw from "react-canvas-draw";
import { useEffect, useRef } from "react";

export default function Profile({ player }: { player: Player }) {
  const { name, score, wins, status, guessed, color, profile, typing } = player;
  return (
    <div
      className={`${
        guessed
          ? "bg-gradient-to-r from-white via-white to-green-600"
          : "bg-white"
      } flex w-full group items-center rounded-3xl h-16 py-2 px-4 mb-3 hover:h-32 transition-all`}
    >
      <div>
        <div
          className="h-10 w-10 group-hover:h-24 group-hover:w-24 transition-all mr-3 rounded-lg"
          style={{ border: `solid 4px ${color}` }}
        >
          <ProfileCanvas profile={profile} />
        </div>
      </div>
      <div className="w-full">
        <h3 className="font-semibold text-xl">{name}</h3>
        {score !== 0 && <h3 className="font-semibold">score: {score}</h3>}
      </div>
      <div>
        <StatusIndicator typing={typing} status={status} />
      </div>
      <div>
        <h3
          className={`${
            guessed ? "text-white" : "text-black"
          } font-semibold text-3xl`}
        >
          {score !== 0 && wins}
        </h3>
      </div>
    </div>
  );
}

function ProfileCanvas({ profile }: { profile: string }) {
  useEffect(() => {}, []);
  return <img className="rounded-lg" src={profile} alt="profile" />;
}

function StatusIndicator({
  typing,
  status,
}: {
  typing: boolean;
  status: string;
}) {
  if (typing) {
    return (
      <div style={{ transform: "translateY(2px)" }}>
        <div className="rounded-full text-lg py-1 px-2 mr-3 h-8 bg-blueGray-600 text-white flex justify-center items-center">
          <div className="bg-white rounded-full h-2 w-2 mr-1 animate-pulse"></div>
          <div
            className="bg-white rounded-full h-2 w-2 mr-1 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div className="bg-white rounded-full h-2 w-2 animate-pulse"></div>
        </div>
        <div
          className="w-0 h-0 border-4 border-blueGray-600 transform"
          style={{
            borderRightColor: "transparent",
            borderBottomColor: "transparent",
            transform: "translateX(8px) translateY(-2px)",
          }}
        ></div>
      </div>
    );
  } else {
    if (status !== "") {
      return (
        <h4 className="rounded-full text-lg py-1 px-2 mr-3 bg-indigo-500 text-white">
          {status}
        </h4>
      );
    } else {
      return <></>;
    }
  }
}
