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
      className={`w-96 rounded-3xl bg-white min-h-16 border-r-8 ${
        self === true ? "border-blue-400" : "border-pink-400"
      } py-2 px-4 mt-3`}
    >
      <h3 className="font-semibold">{author}</h3>
      <h4>{content}</h4>
    </div>
  );
}
