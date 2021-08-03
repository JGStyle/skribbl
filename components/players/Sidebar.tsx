import Profile from "./Profile";

interface Player {
  name: string;
  score: number;
  wins: number;
  status: string;
  id: string;
}

export default function Sidebar({ players }: { players: Array<Player> }) {
  return (
    <div
      className="flex flex-col bg-white bg-opacity-10 rounded-3xl p-4 max-w-sm"
      style={{ height: "720px" }}
    >
      <div className="overflow-y-auto h-full">
        {players.map((e: Player) => (
          <Profile key={e.id} player={e} admin={true} />
        ))}
      </div>
    </div>
  );
}
