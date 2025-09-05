import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";

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
  const [showPassword, setShowPassword] = useState<boolean>(false);

  function handleTogglePasswordVisibility() {
    setShowPassword((prev) => !prev);
  }

  if (type === "password") {
    return (
      <div className="mb-3 w-full">
        <label htmlFor={name} className="block mb-1 font-normal">
          {label}
        </label>
        <div className="relative">
          <input
            type={!showPassword ? type : "text"}
            name={name}
            id={name}
            className="w-full border border-gray-300 outline-none h-[40px] px-2 rounded"
          />
          <span
            role="button"
            className="absolute right-3 top-1/2 -translate-y-1/2"
            onClick={handleTogglePasswordVisibility}
          >
            {!showPassword ? <FaEyeSlash /> : <IoEyeSharp />}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-3 w-full">
      <label htmlFor={name} className="block mb-1 font-normal">
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
