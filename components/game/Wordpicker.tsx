import { useEffect } from "react";
import Btn from "../default/Btn";
import { variation as t } from "../default/Btn";

export default function Wordpicker({
  words,
  chooseWord,
}: {
  words: Array<string>;
  chooseWord: (w: string) => void;
}) {
  useEffect(() => {
    console.log(words);
  }, []);

  return (
    <div>
      <div
        className="fixed min-w-80 h-72 top-1/2 left-1/2 p-11 transform -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-main bg-opacity-40 "
        style={{ width: "400px", zIndex: 19 }}
      ></div>
      <div
        className="fixed min-w-80 h-72 top-1/2 left-1/2 p-11 transform -translate-x-1/2 -translate-y-1/2 rounded-3xl backdrop-filter backdrop-blur-xl shadow-xl"
        style={{ width: "400px", zIndex: 20 }}
      >
        <h3 className="font-bold text-white text-3xl">
          Choose the word you want to draw.
        </h3>
        <div className="flex gap-2 mt-7">
          {words.map((e) => (
            <Btn
              key={e}
              content={e}
              type={t.Light}
              click={() => chooseWord(e)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
