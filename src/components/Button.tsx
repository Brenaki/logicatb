interface ButtonProps {
  text: string;
  icon?: string;
}

export function Button({ text, icon }: ButtonProps) {
  return (
    <button
      className="flexCenter hover:bg-gray-10 py-2 px-4 rounded"
      type="button">
      {text}
      <span className="ml-2">
        {icon}
      </span>
    </button>
  );
}