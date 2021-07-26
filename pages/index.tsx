import CanvasUI from "../components/CanvasUI";

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col h-screen bg-main">
      <h1 className="text-white">Draw</h1>
      <CanvasUI />
    </div>
  );
}
