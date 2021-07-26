import CanvasUI from "../components/CanvasUI";
import Modal from "../components/Modal";

export default function Playground() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-main text-white">
      <h1 className="text-9xl font-black">Playground</h1>
      <h2 className="text-4xl font-bold mb-8">Try out before you play</h2>
      <CanvasUI />
      <button className="mt-8 bg-white text-black px-4 py-2 rounded-xl">
        Save Artwork
      </button>
      <Modal
        title="Confirm deletion"
        description="Do you reall want to delete your beautiful artwork?"
        onConfirm={() => console.log("t")}
      ></Modal>
    </div>
  );
}
