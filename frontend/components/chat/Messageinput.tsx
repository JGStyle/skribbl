import Input from "../default/Input";
import Btn from "../default/Btn";
import { variation as t } from "../default/Btn";
import { useEffect, useRef, useState } from "react";

export default function Messageinput({
  sendMessage,
}: {
  sendMessage: (m: string) => void;
}) {
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (message.length == 1) {
      // send typing event
    } else if (message.length == 0) {
      // send stop typing event
    }
  }, [message]);

  function send(msg: string) {
    if (msg !== "") {
      sendMessage(msg);
      setMessage("");
    }
  }

  function updateMessage(event: any) {
    setMessage(event.target.value);
  }

  return (
    <div className="flex mt-3">
      <Input
        placeholder="Message.."
        change={updateMessage}
        value={message}
        onEnter={() => send(message)}
      />
      <Btn type={t.Success} content="Send" click={() => send(message)} />
    </div>
  );
}
