import { useEffect, useRef, useState } from "react";
import Message from "./Message";
import Messageinput from "./Messageinput";
import MessageType from "../../models/Message";

export default function Chat({
  messages,
  self,
}: {
  messages: Array<MessageType>;
  self: string;
}) {
  const [chat, setChat] = useState([]);

  useEffect(() => {
    // @ts-ignore
    setChat(messages);
  }, [messages]);

  function addMessage(msg: MessageType) {
    // @ts-ignore
    setChat((prev) => [...prev, msg]);
    updateScroll();
  }

  const chatend = useRef<HTMLDivElement>(null);

  function updateScroll() {
    chatend.current!.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div
      className="flex flex-col bg-white bg-opacity-10 rounded-3xl p-4 max-w-sm h-full"
      style={{ maxHeight: "590px" }}
    >
      <div className="overflow-y-auto h-full">
        {chat.map((e: MessageType) => (
          <Message key={e.msg} message={e} />
        ))}
        {/* @ts-ignore */}
        <div style={{ float: "left", clear: "both" }} ref={chatend}></div>
      </div>
      <Messageinput
        sendMessage={(m) => {
          addMessage({ msg: m, author: "you", color: "#2f8a7f" });
        }}
      />
    </div>
  );
}
