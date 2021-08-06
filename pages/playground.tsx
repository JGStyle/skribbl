import CanvasUI from "../components/game/CanvasUI";
import Modal from "../components/default/Modal";

export default function Playground() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-main text-white">
      <h1 className="text-9xl font-black">playground</h1>
      <h2 className="text-4xl font-bold mb-8">try out before you play</h2>
      <CanvasUI disabled={false} word="banana" />
    </div>
  );
}
