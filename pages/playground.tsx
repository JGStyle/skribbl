import CanvasUI from "../components/CanvasUI";
import Modal from "../components/default/Modal";

export default function Playground() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-main text-white">
      <h1 className="text-9xl font-black">Playground</h1>
      <h2 className="text-4xl font-bold mb-8">Try out before you play</h2>
      <CanvasUI />
    </div>
  );
}
