import { useEffect, useRef, useState } from "react";
import CanvasDraw from "react-canvas-draw";
import Input from "../default/Input";
import Btn from "../default/Btn";
import { variation as t } from "../default/Btn";

export default function Createprofile({
  onJoin,
}: {
  onJoin: (event: {}) => void;
}) {
  const [username, setUsername] = useState("");
  function updateUsername(event: any) {
    let name = event.target.value;
    if (name.length < 13) {
      setUsername(name);
    }
  }

  const [color, setColor] = useState("#fff");
  const colors = [
    "#000000",
    "#EF4444",
    "#972d1f",
    "#F59E0B",
    "#755620",
    "#afa515",
    "#10B981",
    "#3dc744",
    "#3B82F6",
    "#103c85",
    "#6366F1",
    "#8B5CF6",
    "#EC4899",
  ];

  useEffect(() => {
    setColor(colors[Math.floor(Math.random() * colors.length)]);
  }, []);

  const canvas = useRef<any>(null);

  function join() {
    const id = genId();
    const profile = getData();
    const event = {
      event: "lobby:join",
      author: id,
      payload: { name: username, color: color, profile: profile },
    };
    onJoin(event);
  }

  function reset() {
    canvas.current.clear();
  }

  function getData(): string {
    // @ts-ignore
    let c = document.getElementById("canvac").firstChild.firstChild.nextSibling;
    // @ts-ignore
    return c.toDataURL();
  }

  function genId(): number {
    return parseInt(
      new Date().getTime().toString() +
        Math.floor(Math.random() * 1000).toString()
    );
  }

  return (
    <div className="flex">
      <div>
        <div
          className="rounded-xl overflow-hidden"
          style={{ width: "200px", height: "200px" }}
          id="canvac"
        >
          <CanvasDraw
            ref={canvas}
            brushColor={color}
            lazyRadius={0}
            brushRadius={9}
            canvasWidth={200}
            canvasHeight={200}
          />
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center h-11">
          <div
            className="h-6 w-6 rounded-full mr-2 transform -translate-y-1"
            style={{ backgroundColor: color }}
          ></div>
          <h2 className="text-white font-semibold text-3xl mb-2">{username}</h2>
        </div>
        <Input
          placeholder="username"
          change={updateUsername}
          value={username}
          onEnter={() => {}}
        />
        <div className="mt-6">
          <div className="flex gap-x-2">
            <Btn click={reset} content="reset" type={t.Dark} />
            <Btn click={join} content="&rarr; join" type={t.Success} />
          </div>
          <p className="text-gray-300">draw your profile on the left</p>
        </div>
      </div>
    </div>
  );
}
