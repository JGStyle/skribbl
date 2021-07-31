import CanvasUI from "../components/CanvasUI";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-main">
      <h1 className="text-white">test</h1>
      <CanvasUI />
      <div className="col-span-1">test</div>
    </div>
  );
}
