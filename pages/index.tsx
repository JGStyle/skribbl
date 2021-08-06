import CanvasUI from "../components/game/CanvasUI";
import Chat from "../components/chat/Chat";
import Sidebar from "../components/players/Sidebar";
import Topbar from "../components/game/Topbar";
import Wordpicker from "../components/game/Wordpicker";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen min-w-screen bg-main">
      <div className="flex flex-col">
        <Topbar roomname="Peters raum" time={30} round="3/5" />
        <div className="flex justify-center">
          <div className="mr-4 lg:block hidden">
            <Sidebar
              players={[
                { name: "smorrin", id: "1", score: 750, wins: 2, status: "" },
              ]}
              admin={true}
            />
          </div>
          <CanvasUI disabled={false} word="banana" />
          <div className="ml-4">
            <Chat
              self="JGStyle"
              messages={[{ msg: "A rCoddodile", author: "Thomas" }]}
            ></Chat>
          </div>
        </div>
        {/* uncomment to show wordpicker */}
        {/* <Wordpicker
          words={["hamburger", "applple", "ballapple"]}
          chooseWord={(w) => {
            console.log(w);
          }}
        /> */}
      </div>
    </div>
  );
}
