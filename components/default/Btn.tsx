export enum variation {
  Dark = 0,
  Light = 1,
  Success = 2,
  Danger = 3,
}

export default function Btn({
  content,
  click,
  type,
}: {
  content: String;
  click: () => void;
  type: variation;
}) {
  switch (type) {
    case 0:
      return (
        <button
          className="mt-8 bg-black text-white hover:bg-gray-800 px-4 py-2.5 rounded-xl"
          onClick={click}
        >
          {content}
        </button>
      );
      break;

    case 1:
      return (
        <button
          className="mt-8 bg-white text-black hover:bg-gray-300 px-4 py-2.5 rounded-xl"
          onClick={click}
        >
          {content}
        </button>
      );
      break;

    case 2:
      return (
        <button
          className="mt-8 bg-green-500 hover:bg-green-400 text-white px-4 py-2.5 rounded-xl"
          onClick={click}
        >
          {content}
        </button>
      );
      break;

    case 3:
      return (
        <button
          className="mt-8 bg-red-500 hover:bg-red-400 text-white px-4 py-2.5 rounded-xl"
          onClick={click}
        >
          {content}
        </button>
      );
      break;

    default:
      return <button>wrong type</button>;
  }
}
