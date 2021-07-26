import CanvasUI from "../components/CanvasUI";

export default function Home() {
  return (
    <div className="grid justify-center items-center lg:grid-cols-4 grid-cols-3 grid-rows-1 h-screen bg-main">
      <div className="hidden lg:inline-block">test</div>
      <div className="col-span-2">
        <h1 className="text-white">test</h1>
        <CanvasUI />
      </div>
      <div className="col-span-1">test</div>
    </div>
  );
}
