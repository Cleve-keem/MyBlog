export interface FormFieldProps {
  label: string;
  type: string;
  name: string;
}

export default function FormField({
  label,
  type = "text",
  name,
}: FormFieldProps) {
  return (
    <div className="mb-3 w-full">
      <label htmlFor={name} className="block mb-1">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        className="w-full border border-gray-300 outline-none h-[40px] px-2 rounded"
      />
    </div>
  );
}
