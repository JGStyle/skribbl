import { stringify } from "postcss";
import { useEffect, useState } from "react";
import MessageType from "../../models/Message";

export default function Message({ message }: { message: MessageType }) {
  const { author, msg, color } = message;
  return (
    <div
      className={`w-full rounded-3xl bg-white min-h-16 border-r-8 py-2 px-4 mb-3`}
      style={{ borderColor: color }}
      id={author}
    >
      <h3 className="font-semibold">{author}</h3>
      <h4>{msg}</h4>
    </div>
  );
}
