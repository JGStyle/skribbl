import Profile from "./Profile";

interface Player {
  name: string;
  score: number;
  wins: number;
  status: string;
  id: string;
}

export default function Chat({ players }: { players: Array<Player> }) {
  return (
    <div>
      <div className="bg-white h-16 rounded-3xl flex items-center bg-opacity-20">
        <h3 className="ml-4 text-2xl font-semibold text-white">
          &#8593; Round 4/5
        </h3>
      </div>
      <div className="flex flex-col overflow-y-auto bg-white bg-opacity-10 rounded-3xl p-4">
        {players.map((e: Player) => (
          <Profile
            key={e.id}
            name={e.name}
            score={e.score}
            wins={e.wins}
            status={e.status}
          />
        ))}
      </div>
    </div>
  );
}
