import { stringify } from "postcss";
import { useEffect, useState } from "react";
import MessageType from "../../models/Message";

export default function Message({
  message,
  id,
}: {
  message: MessageType;
  id: string;
}) {
  const { author, msg, color } = message;

  const isItalic = (msg: string) => msg.startsWith("_") && msg.endsWith("_");
  const isBold = (msg: string) => msg.startsWith("*") && msg.endsWith("*");

  return (
    <div
      className={`w-full rounded-3xl bg-white min-h-16 border-r-8 py-2 px-4 mb-3`}
      style={{ borderColor: color }}
      id={id}
    >
      <h3 className="font-semibold">{author}</h3>
      <h4
        className={`${
          isItalic(msg) ? "italic" : isBold(msg) ? "font-bold" : ""
        }`}
      >
        {isItalic(msg)
          ? msg.split("_").join("")
          : isBold(msg)
          ? msg.split("*").join("")
          : msg}
      </h4>
    </div>
  );
}
