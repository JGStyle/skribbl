import { useEffect, useRef, useState } from "react";
import Messageinput from "./Messageinput";
import MessageType from "../../models/Message";
import Message from "./Message";

export default function Chat({
  messages,
  sendMsg,
}: {
  messages: MessageType[];
  sendMsg: (m: string) => void;
}) {
  function sendMessage(m: string) {
    sendMsg(m);
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
        {messages.map((e: MessageType) => (
          <Message key={e.msg} message={e} />
        ))}
        <div style={{ float: "left", clear: "both" }} ref={chatend}></div>
      </div>
      <Messageinput
        sendMessage={(m) => {
          sendMessage(m);
        }}
      />
    </div>
  );
}
