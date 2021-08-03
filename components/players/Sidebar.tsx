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
    <div
      className="flex flex-col overflow-y-auto bg-white bg-opacity-10 rounded-3xl p-4"
      style={{ height: "720px" }}
    >
      {players.map((e: Player) => (
        <Profile key={e.id} player={e} admin={true} />
      ))}
    </div>
  );
}
