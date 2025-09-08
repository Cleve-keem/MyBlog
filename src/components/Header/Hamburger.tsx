interface HamburgerProps {
  closeNav: () => void;
  type?: string;
}

export default function Hamburger({ closeNav, type }: HamburgerProps) {
  return (
    <button
      className="space-y-[6px] transition-all duration-300 hover:text-blue-400"
      onClick={closeNav}
    >
      <span
        className={`block bg-black w-5 h-0.5 rounded ${
          type === "close" ? "rotate-45 origin-center translate-y-[5px]" : ""
        }`}
      ></span>
      <span
        className={`block bg-black h-0.5 rounded ${
          type === "close"
            ? "w-5 -rotate-45 origin-center -translate-y-0.5"
            : "w-3"
        }`}
      ></span>
    </button>
  );
}
