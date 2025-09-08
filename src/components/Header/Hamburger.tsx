interface HamburgerProps {
  closeNav: () => void;
  type?: string;
}

export default function Hamburger({ closeNav, type }: HamburgerProps) {
  return (
    <button
      className="space-y-1 transition-all duration-300 hover:text-blue-400"
      onClick={closeNav}
    >
      <span
        className={`block bg-black w-6 h-0.5 rounded ${
          type === "close" ? "rotate-50 origin-center translate-y-1" : ""
        }`}
      ></span>
      <span
        className={`block bg-black w-6 h-0.5 rounded ${
          type === "close" ? "-rotate-50 origin-center -translate-y-0.5" : ""
        }`}
      ></span>
    </button>
  );
}
