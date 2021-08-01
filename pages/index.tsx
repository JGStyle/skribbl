import CanvasUI from "../components/CanvasUI";
import Btn from "../components/default/Btn";
import { variation as t } from "../components/default/Btn";
import Input from "../components/default/Input";
import Message from "../components/chat/Message";
import Messageinput from "../components/chat/Messageinput";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-main">
      <h1 className="text-white">test</h1>
      <CanvasUI />
      <div>
        <Btn click={() => console.log("t")} type={t.Dark} content="dark"></Btn>
        <Btn
          click={() => console.log("t")}
          type={t.Light}
          content="light"
        ></Btn>
        <Btn
          click={() => console.log("t")}
          type={t.Success}
          content="success"
        ></Btn>
        <Btn
          click={() => console.log("t")}
          type={t.Danger}
          content="danger"
        ></Btn>
      </div>
      <Input placeholder="Input field" change={() => console.log("t")} />
      <Message
        author="hohe"
        content="A Crocodile? Bro this is some serious shit he is really old"
        self={false}
      />
      <Message author="You" content="Apple Ice cream" self={true} />
      <Message
        author="smorrin"
        content="Green swamp and a ball? Or is it something else this is just etxt to increase height"
        self={false}
      />
      <Messageinput />
    </div>
  );
}
