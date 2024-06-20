interface ButtonProps {
  text: string;
}

export function Button({ text }: ButtonProps) {
  return (
    <button
      className="flexCenter bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      type="button">
      {text}
    </button>
  );
}