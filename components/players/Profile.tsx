export default function Message({
  name,
  score,
  wins,
  status,
}: {
  name: string;
  score: number;
  wins: number;
  status: string;
}) {
  return (
    <div className="bg-white flex items-center w-96 rounded-3xl min-h-16 py-2 px-4 mt-3">
      <div>
        <div className="h-7 w-7 bg-rose-600 mr-3 rounded-lg transform -skew-x-12"></div>
      </div>
      <div className="w-full">
        <h3 className="font-semibold text-xl">{name}</h3>
        <h3 className="font-semibold ">score: {score}</h3>
      </div>
      {status !== "" && (
        <div>
          <h4 className="rounded-full text-lg py-1 px-2 mr-3 bg-indigo-500 text-white">
            {status}
          </h4>
        </div>
      )}
      <div>
        <h3 className="font-semibold text-3xl">{wins}</h3>
      </div>
    </div>
  );
}
