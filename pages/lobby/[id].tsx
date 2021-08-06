import Sidebar from "../../components/players/Sidebar";
import Chat from "../../components/chat/Chat";

export default function Lobby() {
  return (
    <div className="flex justify-center items-center min-h-screen min-w-screen bg-main">
      <div className="flex" style={{ height: "550px" }}>
        <Sidebar
          players={[
            { name: "smorrin", score: 0, wins: 0, status: "host", id: "1" },
            { name: "hohe", score: 0, wins: 0, status: "", id: "1" },
            { name: "josef", score: 0, wins: 0, status: "", id: "1" },
          ]}
          admin={true}
        />
        <div className="flex flex-col justify-center items-center p-7">
          <h1 className="text-white text-2xl font-semibold text-center mb-4">
            waiting for host to start game
          </h1>

          <div className="flex gap-2 animate-bounce">
            <div className=" bg-white w-4 h-4 rounded-full"></div>
            <div className="bg-white w-4 h-4 rounded-full"></div>
            <div className="bg-white w-4 h-4 rounded-full"></div>
          </div>

          <h1 className="text-white text-2xl font-semibold text-center mb-16 mt-4">
            get ready
          </h1>
        </div>
        <Chat
          messages={[{ msg: "get ready to lose", author: "peter" }]}
          self="jgs"
        />
      </div>
    </div>
  );
}
