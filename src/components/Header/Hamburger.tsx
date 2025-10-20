interface HamburgerProps {
  close: () => void;
  variant: "open" | "close";
}

export default function Hamburger({ close, variant }: HamburgerProps) {
  return (
    <button
      className="space-y-[6px] transition-all duration-300 hover:text-blue-400 p-1.5 w-fit"
      onClick={close}
    >
      <span
        className={`block bg-black w-5 h-0.5 rounded ${
          variant === "close" ? "rotate-45 origin-center translate-y-[5px]" : ""
        }`}
      ></span>
      <span
        className={`block bg-black h-0.5 rounded ${
          variant === "close"
            ? "w-5 -rotate-45 origin-center -translate-y-0.5"
            : "w-3"
        }`}
      ></span>
    </button>
  );
}
