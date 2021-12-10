import Btn from "../components/default/Btn";
import { variation as t } from "../components/default/Btn";

export default function Home() {
  function createRoom() {
    // TODO
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-main text-white">
      <div className="text-center w-2/3 flex flex-col">
        <h1 className="text-9xl font-black inline-block">skribbl</h1>
        <h2 className="text-4xl font-bold mb-8 text-center inline-block">
          <span className="text-blue-500 mr-2">you draw</span>
          the word that is given to you while the{" "}
          <span className="text-blue-500">others</span> try to{" "}
          <span className="text-blue-500">guess</span> it
        </h2>
        <div>
          <Btn
            type={t.Success}
            content="&rarr; create room"
            click={createRoom}
          />
        </div>
      </div>
      <footer className="absolute bottom-2">
        Made with &#9825; by
        <a
          href="https://github.com/JGStyle"
          className="ml-1 mr-1 text-blue-500 hover:underline"
        >
          Josef Schmid
        </a>
      </footer>
    </div>
  );
}
