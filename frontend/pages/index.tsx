import Btn from "../components/default/Btn";
import { variation as t } from "../components/default/Btn";
import Footer from "../components/default/Footer";

export default function Home() {
  function createRoom() {
    // TODO
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-main text-white">
      <div className="text-center w-2/3 flex flex-col">
        <h1
          style={{ color: "transparent" }}
          className="text-9xl block font-black bg-gradient-to-r bg-clip-text text-tran from-pink-400 via-purple-400 to-indigo-500"
        >
          skribbl
        </h1>
        <h2 className="text-4xl font-bold mb-8 text-center inline-block">
          <span
            className="bg-gradient-to-r bg-clip-text text-tran from-pink-400 via-purple-400 to-indigo-500"
            style={{ color: "transparent" }}
          >
            you draw
          </span>{" "}
          the word that is given to you while the{" "}
          <span
            className="bg-gradient-to-r bg-clip-text text-tran from-pink-400 via-purple-400 to-indigo-500"
            style={{ color: "transparent" }}
          >
            others
          </span>{" "}
          try to{" "}
          <span
            className="bg-gradient-to-r bg-clip-text text-tran from-pink-400 via-purple-400 to-indigo-500"
            style={{ color: "transparent" }}
          >
            guess
          </span>{" "}
          it
        </h2>
        <div>
          <Btn
            type={t.Success}
            content="&rarr; create room"
            click={createRoom}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
