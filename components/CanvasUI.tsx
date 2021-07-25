import { useState } from "react";
import CanvasDraw from "react-canvas-draw";

export default function CanvasUI() {
  const [activeColor, setActiveColor] = useState("#000000");
  const [activeSize, setActiveSize] = useState(9);

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

  return (
    <div className="flex">
      <div>
        <div className="rounded-xl overflow-hidden">
          <CanvasDraw
            brushColor={activeColor}
            catenaryColor="#fff"
            lazyRadius={0}
            brushRadius={activeSize}
          />
        </div>
        <div className="flex mt-2 justify-between">
          {colors.map((e) => (
            <div
              className="h-8 w-8 rounded-sm hover:rounded-xl transition-all flex justify-center items-center"
              style={{ backgroundColor: e }}
              onClick={() => setActiveColor(e)}
            >
              {activeColor === e && (
                <div className="bg-white h-2 w-2 rounded-full"></div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="ml-2 h-1/2 flex flex-col justify-between">
        {sizes.map((e) => (
          <div
            className={`${
              activeSize === e ? "bg-gray-600" : "bg-transparent"
            } hover:bg-gray-600 rounded-xl flex justify-center items-center w-8 h-8`}
            onClick={() => setActiveSize(e)}
          >
            <div
              className="rounded-full bg-white"
              style={{ height: e, width: e }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}
