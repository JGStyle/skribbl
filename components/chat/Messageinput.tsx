import Input from "../default/Input";
import Btn from "../default/Btn";
import { variation as t } from "../default/Btn";
import { useState } from "react";

export default function Messageinput() {
  const [message, setMessage] = useState("");

  function updateMessage(event: any) {
    setMessage(event.target.value);
  }

  function sendMessage() {
    console.log(message);
  }

  return (
    <div className="flex mt-3">
      <Input placeholder="Message.." change={updateMessage} />
      <Btn type={t.Success} content="Send" click={sendMessage} />
    </div>
  );
}
