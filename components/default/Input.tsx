export default function Input({
  placeholder,
  change,
}: {
  placeholder: string;
  change: (event: any) => void;
}) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={change}
      className="px-4 py-2 w-full rounded-xl focus:ring-4 focus:ring-blue-600 focus:border-transparent border border-transparent text-black"
    />
  );
}
