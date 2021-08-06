import Profile from "./Profile";

interface Player {
  name: string;
  score: number;
  wins: number;
  status: string;
  id: string;
}

export default function Sidebar({
  players,
  admin,
}: {
  players: Array<Player>;
  admin: boolean;
}) {
  return (
    <div
      className="flex flex-col bg-white bg-opacity-10 rounded-3xl p-4 max-w-sm"
      style={{ maxHeight: "720px", height: "100%", width: "350px" }}
    >
      <div className="overflow-y-auto">
        {players.map((e: Player) => (
          <Profile key={e.id} player={e} admin={admin} />
        ))}
      </div>
    </div>
  );
}
