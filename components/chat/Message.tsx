import { stringify } from "postcss";
import { useEffect, useState } from "react";

export default function Message({
  author,
  content,
  self,
}: {
  author: string;
  content: string;
  self: boolean;
}) {
  return (
    <div
      className={`w-full rounded-3xl bg-white min-h-16 border-r-8 ${
        self === true ? "border-blue-400" : "border-pink-400"
      } py-2 px-4 mb-3`}
      id={author}
    >
      <h3 className="font-semibold">{author}</h3>
      <h4>{content}</h4>
    </div>
  );
}
