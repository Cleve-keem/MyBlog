interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: string;
  disabled?: boolean;
}

export default function Button({
  children,
  className,
  variant,
  disabled,
}: ButtonProps) {
  const base: string = "rounded-[5px]";

  const variants: Record<string, string> = {
    primary: base + " bg-slate-100 px-3 py-1",
    secondary: base + " bg-black text-white px-2 py-1",
    outline: base + " border",
    danger: base + " bg-red-500 text-white",
  };

  return (
    <button
      className={`${className} ${variant ? variants[variant] : base}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
