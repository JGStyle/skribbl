import CanvasUI from "../components/game/CanvasUI";
import Btn from "../components/default/Btn";
import { variation as t } from "../components/default/Btn";
import Chat from "../components/chat/Chat";
import Sidebar from "../components/players/Sidebar";
import Messageinput from "../components/chat/Messageinput";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen min-w-screen bg-main">
      <div className="flex flex-col">
        <div className="flex items-center bg-white text-white bg-opacity-10 justify-between rounded-2xl mb-4 py-2 px-8">
          <div className="flex items-center">
            <h3 className="font-semibold text-xl mr-3 p-2 bg-blue-500 rounded-full">
              45s
            </h3>
            <h3 className="font-semibold text-xl">Round 4/5</h3>
          </div>
          <h3 className="font-bold text-2xl">Insert Project name</h3>
          <Btn
            type={t.Danger}
            content="Leave"
            click={() => {
              console.log("leave");
            }}
          ></Btn>
        </div>
        <div className="flex justify-center">
          <div className="mr-4 lg:block hidden">
            <Sidebar
              players={[
                { name: "smorrin", id: "1", score: 750, wins: 2, status: "" },
              ]}
            />
          </div>
          <CanvasUI />
          <div className="ml-4">
            <Chat
              self="JGStyle"
              messages={[{ msg: "A rCoddodile", author: "Thomas" }]}
            ></Chat>
          </div>
        </div>
      </div>
    </div>
  );
}
