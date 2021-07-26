import { useState, useRef } from "react";
import CanvasDraw from "react-canvas-draw";

export default function CanvasUI() {
  const [activeColor, setActiveColor] = useState("#000000");
  const [activeSize, setActiveSize] = useState(9);

  const canvas = useRef<any>(null);

  const colors = [
    "#000000",
    "#6B7280",
    "#EF4444",
    "#F59E0B",
    "#10B981",
    "#3B82F6",
    "#6366F1",
    "#8B5CF6",
    "#EC4899",
  ];
  const sizes = [3, 6, 9, 12, 15];

  function resetCanvas(): void {
    canvas.current.clear();
  }

  function undoCanvas(): void {
    canvas.current.undo();
  }

  function getCanvas(): String {
    return canvas.current.getSaveData();
  }

  function loadCanvas(data: String, immediate: Boolean): void {
    canvas.current.loadSaveData(data, immediate);
  }

  return (
    <div className="flex">
      <div>
        <div className="rounded-xl overflow-hidden cursor-none">
          <CanvasDraw
            ref={canvas}
            brushColor={activeColor}
            catenaryColor={`${activeSize >= 9 ? "#fff" : "#000"}`}
            lazyRadius={0}
            brushRadius={activeSize}
          />
        </div>
        <div className="flex mt-2 justify-between">
          {colors.map((e) => (
            <button
              className="h-8 w-8 rounded-md hover:rounded-xl transition-all flex justify-center items-center"
              style={{ backgroundColor: e }}
              onClick={() => setActiveColor(e)}
            >
              {activeColor === e && (
                <div className="bg-white h-2 w-2 rounded-full"></div>
              )}
            </button>
          ))}
        </div>
      </div>
      <div className="ml-2 flex flex-col justify-between pb-10">
        <button
          className="h-8 w-8 rounded-xl hover:bg-gray-600 text-white text-xl font-bold flex justify-center items-center"
          onClick={undoCanvas}
        >
          &#8592;
        </button>
        <button
          className="h-8 w-8 rounded-xl hover:bg-gray-600 text-white text-xl font-bold flex justify-center items-center"
          onClick={resetCanvas}
        >
          &#8634;
        </button>
        {sizes.map((e) => (
          <button
            className={`${
              activeSize === e ? "bg-gray-500" : "bg-transparent"
            } hover:bg-gray-600 rounded-xl flex justify-center items-center w-8 h-8`}
            onClick={() => setActiveSize(e)}
          >
            <div
              className="rounded-full bg-white"
              style={{ height: e * 1.5, width: e * 1.5 }}
            ></div>
          </button>
        ))}
      </div>
    </div>
  );
}
