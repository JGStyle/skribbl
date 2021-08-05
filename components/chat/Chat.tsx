import { useEffect, useState } from "react";
import Message from "./Message";
import Messageinput from "./Messageinput";

interface Message {
  msg: string;
  author: string;
}

export default function Chat({
  messages,
  self,
}: {
  messages: Array<Message>;
  self: string;
}) {
  const [chat, setChat] = useState([]);

  useEffect(() => {
    // @ts-ignore
    setChat(messages);
  }, []);

  function addMessage(msg: Message) {
    // @ts-ignore
    setChat((prev) => [...prev, msg]);
  }

  useEffect(() => {
    console.log("chat state changed: ", chat);
  }, [chat]);

  return (
    <div
      className="flex flex-col bg-white bg-opacity-10 rounded-3xl p-4 max-w-sm h-full"
      style={{ maxHeight: "720px" }}
    >
      <div className="overflow-y-auto h-full">
        {chat.map((e: Message) => (
          <Message
            key={e.msg}
            content={e.msg}
            author={e.author}
            self={e.author === self}
          />
        ))}
      </div>
      <Messageinput
        sendMessage={(m) => {
          addMessage({ msg: m, author: "You" });
        }}
      />
    </div>
  );
}
