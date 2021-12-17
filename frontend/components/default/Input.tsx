export default function Input({
  placeholder,
  change,
  value,
  onEnter,
}: {
  placeholder: string;
  change: (event: any) => void;
  onEnter: () => void;
  value: string;
}) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={change}
      onKeyPress={(event) => {
        if (event.key === "Enter") {
          onEnter();
        }
      }}
      value={value}
      className="px-4 py-2 w-full rounded-xl focus:ring-4 focus:ring-blue-600 focus:border-transparent border border-transparent text-black"
    />
  );
}
