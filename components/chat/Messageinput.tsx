import Input from "../default/Input";
import Btn from "../default/Btn";
import { variation as t } from "../default/Btn";
import { useEffect, useRef, useState } from "react";

export default function Messageinput({
  sendMessage,
}: {
  sendMessage: (m: string) => void;
}) {
  const [message, _setMessage] = useState("");
  const msgRef = useRef(message);

  // @ts-ignore
  const setMessage = (data) => {
    msgRef.current = data;
    _setMessage(data);
  };

  function send(msg: string) {
    sendMessage(msg);
  }

  useEffect(() => {
    addEventListener("keypress", (e) => {
      if (e.code === "Enter") {
        console.log(msgRef.current);
        sendMessage(msgRef.current);
      }
    });
  }, []);

  function updateMessage(event: any) {
    setMessage(event.target.value);
  }

  return (
    <div className="flex mt-3">
      <Input placeholder="Message.." change={updateMessage} />
      <Btn type={t.Success} content="Send" click={() => send(message)} />
    </div>
  );
}
