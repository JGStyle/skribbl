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
  useEffect(updateScroll, [messages]);

  function updateScroll() {
    document
      .getElementById("shadow-chat-element")
      ?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div
      className="flex flex-col bg-white bg-opacity-10 rounded-3xl p-4 max-w-sm h-full"
      style={{ maxHeight: "590px" }}
    >
      <div className="overflow-y-auto h-full">
        {messages.map((e: MessageType, index) => (
          <Message
            key={e.msg}
            message={e}
            id={index === messages.length - 1 ? "shadow-chat-element" : ""}
          />
        ))}
      </div>
      <Messageinput
        sendMessage={(m) => {
          sendMsg(m);
        }}
      />
    </div>
  );
}
