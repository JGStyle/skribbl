import Input from "../default/Input";
import Btn from "../default/Btn";
import { variation as t } from "../default/Btn";
import { useEffect, useState } from "react";

export default function Messageinput({
  sendMessage,
}: {
  sendMessage: (m: string) => void;
}) {
  const [message, setMessage] = useState("");

  function send(msg: string) {
    sendMessage(msg);
    clear();
  }

  useEffect(() => {
    addEventListener("keypress", (e) => {
      if (e.code === "Enter") {
        sendMessage(message);
      }
    });
  }, []);

  function updateMessage(event: any) {
    setMessage(event.target.value);
  }
  function clear() {
    setMessage("");
  }

  return (
    <div className="flex mt-3">
      <Input placeholder="Message.." change={updateMessage} />
      <Btn type={t.Success} content="Send" click={() => send(message)} />
    </div>
  );
}
