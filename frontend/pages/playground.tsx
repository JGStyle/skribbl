import { useRef, useState } from "react";
import CanvasUI from "../components/game/CanvasUI";
import CanvasRef from "../models/CanasRef";
import Input from "../components/default/Input";

export default function Playground() {
  const canvas = useRef<CanvasRef>(null);
  const [input, setInput] = useState("");

  function getCanvas(): string {
    return canvas.current!.getCanvas();
  }

  function loadCanvas(d: string, i: boolean) {
    canvas.current!.loadCanvas(d, i);
  }

  function updateInput(event: any) {
    let input2 = event.target.value;
    setInput(input2);
  }

  function startLogging() {
    const i = setInterval(() => {
      console.log(getCanvas());
    }, 1000);
  }

  function getReduced(d: string): string {
    let data = JSON.parse(d);
    return data.lines[data.lines.length - 1];
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-main text-white">
      <h1 className="text-9xl font-black">playground</h1>
      <h2 className="text-4xl font-bold mb-8">try out before you play</h2>
      <CanvasUI disabled={false} word="a" ref={canvas} />
      <div className="my-8">
        <Input
          change={updateInput}
          placeholder="input json"
          value={input}
        ></Input>
      </div>
      <button
        className="hover:text-sky-400"
        onClick={() => loadCanvas(input, false)}
      >
        load Canvas
      </button>
      <button
        className="hover:text-sky-400"
        onClick={() => {
          let data = getCanvas();
          console.log(data);
        }}
      >
        get Canvas
      </button>
      <button
        className="hover:text-sky-400"
        onClick={() => {
          let d = getCanvas();
          console.log(d);
          let data = JSON.parse(d);
          for (let i = 0; i < data.lines[0].points.length; i++) {
            Math.floor(data.lines[0].points[i].x);
            Math.floor(data.lines[0].points[i].y);
          }
        }}
      >
        simplify
      </button>
      <button
        className="hover:text-sky-400"
        onClick={() => {
          startLogging();
        }}
      >
        start Logging every 1s
      </button>
      <button
        className="hover:text-sky-400"
        onClick={() => {
          let data = getCanvas();
          console.log(data);
          console.log(getReduced(data));
        }}
      >
        get newest only
      </button>
    </div>
  );
}
