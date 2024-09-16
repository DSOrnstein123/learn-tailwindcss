interface InputProps {
  title: string;
  placeholder: string;
  type: "text" | "textarea";
}

export const Input: React.FC<InputProps> = ({
  title,
  placeholder,
  type,
}: InputProps) => {
  return (
    <div>
      <label className="mb-1 block text-sm font-semibold">{title}</label>
      {type === "text" && (
        <input
          id={title}
          placeholder={placeholder}
          className="w-full rounded-md border-2 p-3 font-poppins font-medium"
        />
      )}
      {type === "textarea" && (
        <textarea
          id={title}
          placeholder={placeholder}
          className="w-full rounded-md border-2 p-3 font-poppins font-medium"
        />
      )}
    </div>
  );
};
