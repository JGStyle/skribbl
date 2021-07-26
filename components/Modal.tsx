export default function Modal({
  title,
  description,
  onConfirm,
}: {
  title: String;
  description: String;
  onConfirm: () => void;
}) {
  return (
    <div className="w-screen h-screen bg-white bg-opacity-10 backdrop-filter backdrop-blur-md fixed flex justify-center items-center">
      <div className="bg-white md:w-3/4 w-full rounded-xl h-1/3 z-50 shadow-lg px-6 flex flex-col justify-center">
        <h1 className="text-4xl font-bold text-black">{title}</h1>
        <h2 className="text-2xl font-semibold text-black">{description}</h2>
        <button
          className="mt-8 bg-black text-white px-4 py-2 rounded-xl"
          onClick={onConfirm}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
