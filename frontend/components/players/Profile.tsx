interface Player {
  name: string;
  score: number;
  wins: number;
  status: string;
  id: string;
}

export default function Profile({
  player,
  admin,
}: {
  player: Player;
  admin: boolean;
}) {
  const { name, score, wins, status } = player;
  return (
    <div className="bg-white flex w-full group items-center rounded-3xl h-16 py-2 px-4 mb-3 hover:h-32 transition-all">
      <div>
        <div className="h-10 w-10 group-hover:h-24 group-hover:w-24 transition-all bg-rose-600 mr-3 rounded-lg"></div>
      </div>
      <div className="w-full">
        <h3 className="font-semibold text-xl">{name}</h3>
        {score !== 0 && <h3 className="font-semibold ">score: {score}</h3>}
        {admin && (
          <button className="hidden group-hover:inline-block bg-black rounded-lg text-white py-1 px-2 hover:bg-gray-800">
            kick
          </button>
        )}
      </div>
      <div>
        {status !== "" && (
          <h4 className="rounded-full text-lg py-1 px-2 mr-3 bg-indigo-500 text-white">
            {status}
          </h4>
        )}
      </div>
      <div>
        <h3 className="font-semibold text-3xl">{wins}</h3>
      </div>
    </div>
  );
}
