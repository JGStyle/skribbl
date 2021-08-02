import CanvasUI from "../components/CanvasUI";
import Btn from "../components/default/Btn";
import { variation as t } from "../components/default/Btn";
import Chat from "../components/chat/Chat";
import Sidebar from "../components/players/Sidebar";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-main">
      <div className="mr-4">
        <Sidebar
          players={[
            { name: "smorrin", id: "1", score: 750, wins: 2, status: "" },
            { name: "JGStyle", id: "2", score: 250, wins: 1, status: "you" },
            { name: "Hohe", id: "3", score: 300, wins: 2, status: "drawing" },
            { name: "Thomas", id: "4", score: -300, wins: 0, status: "" },
            { name: "Martin", id: "4", score: 1250, wins: 4, status: "" },
          ]}
        />
      </div>
      <CanvasUI />
      <div className="ml-4">
        <Chat
          self="JGStyle"
          messages={[
            {
              msg: "Green swamp ball and a snake? Or is it something else",
              author: "smorrin",
            },
            { msg: "A Crocodile", author: "Hohe" },
            { msg: "Apple Ice cream", author: "JGStyle" },
            {
              msg: "Green swamp ball and a snake?",
              author: "smorrin",
            },
            { msg: "A Crocodile", author: "Hohe" },
            { msg: "A Crocodile", author: "Mardin" },
            { msg: "Apple Ice cream", author: "JGStyle" },
            {
              msg: "Green swamp ball and a snake? waller Or is it something else",
              author: "smorrin",
            },
            { msg: "A Crocodile", author: "Thomas" },
          ]}
        ></Chat>
      </div>
    </div>
  );
}
