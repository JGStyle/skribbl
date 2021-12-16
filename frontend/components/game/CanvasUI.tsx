import { useState, useRef, Ref, useImperativeHandle, forwardRef } from "react";
import CanvasDraw from "react-canvas-draw";
import CanvasRef from "../../models/CanasRef";
import colors from "../default/Colors";

export default forwardRef(function CanvasUI(
  {
    disabled,
    word,
  }: {
    disabled: boolean;
    word: string;
  },
  ref: Ref<CanvasRef>
) {
  const [activeColor, setActiveColor] = useState("#000000");
  const [activeSize, setActiveSize] = useState(9);

  useImperativeHandle(ref, () => ({ getCanvas, loadCanvas, resetCanvas }));

  const canvas = useRef<any>(null);

  const sizes = [3, 6, 9, 12, 15];

  function resetCanvas(): void {
    if (!disabled) {
      canvas.current.clear();
    }
  }

  function undoCanvas(): void {
    if (!disabled) {
      canvas.current.undo();
    }
  }

  function getCanvas(): string {
    return canvas.current.getSaveData();
  }

  function loadCanvas(data: string, immediate: boolean): void {
    canvas.current.loadSaveData(data, immediate);
  }

  return (
    <div>
      <div className="flex">
        {!disabled && (
          <h1 className="absolute px-2 py-1 rounded-br-lg bg-main text-white z-30">
            {word}
          </h1>
        )}
        <div>
          <div
            className={`rounded-xl overflow-hidden ${
              disabled ? "cursor-not-allowed" : "cursor-none"
            }`}
          >
            <CanvasDraw
              disabled={disabled}
              ref={canvas}
              brushColor={activeColor}
              catenaryColor={`${activeSize >= 9 ? "#fff" : "#000"}`}
              lazyRadius={0}
              brushRadius={activeSize}
              canvasWidth={700}
              canvasHeight={550}
              loadTimeOffset={20}
            />
          </div>
          <div className="flex mt-2 justify-between">
            {colors.map((e) => (
              <button
                key={e}
                className="h-8 w-8 rounded-md hover:rounded-xl transition-all flex justify-center items-center"
                style={{ backgroundColor: e }}
                onClick={() => setActiveColor(e)}
                title="Change brush color"
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
            title="Undo last line"
          >
            &#8592;
          </button>
          {sizes.map((e) => (
            <button
              key={e}
              className={`${
                activeSize === e ? "bg-gray-500" : "bg-transparent"
              } hover:bg-gray-600 rounded-xl flex justify-center items-center w-8 h-8`}
              onClick={() => setActiveSize(e)}
              title="Change brush width"
            >
              <div
                className="rounded-full bg-white"
                style={{ height: e * 1.5, width: e * 1.5 }}
              ></div>
            </button>
          ))}
          <button
            className="h-8 w-8 rounded-xl hover:bg-gray-600 text-white text-xl font-bold flex justify-center items-center"
            onClick={resetCanvas}
            title="Reset canvas"
          >
            &#8634;
          </button>
        </div>
      </div>
    </div>
  );
});
