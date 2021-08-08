import Sidebar from "../../components/players/Sidebar";
import Chat from "../../components/chat/Chat";
import Config from "../../components/lobby/Configuration";

export default function Lobby() {
  const admin = true;
  return (
    <div className="flex justify-center items-center min-h-screen min-w-screen bg-main">
      <div className="flex gap-x-2" style={{ height: "550px" }}>
        <Sidebar
          players={[
            { name: "smorrin", score: 0, wins: 0, status: "host", id: "1" },
            { name: "hohe", score: 0, wins: 0, status: "", id: "1" },
            { name: "josef", score: 0, wins: 0, status: "", id: "1" },
          ]}
          admin={admin}
        />
        <Config admin={admin} />
        <Chat
          messages={[{ msg: "get ready to lose", author: "peter" }]}
          self="jgs"
        />
      </div>
    </div>
  );
}
