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
  return (
    <div
      className="flex flex-col bg-white bg-opacity-10 rounded-3xl p-4"
      style={{ height: "720px" }}
    >
      <div className="overflow-y-auto h-full">
        {messages.map((e: Message) => (
          <Message
            key={e.msg}
            content={e.msg}
            author={e.author}
            self={e.author === self}
          />
        ))}
      </div>
      <Messageinput />
    </div>
  );
}
