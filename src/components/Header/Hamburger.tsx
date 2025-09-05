interface HamburgerProps {
  closeNav: () => void;
}

export default function Hamburger({ closeNav }: HamburgerProps) {
  return (
    <button
      className="space-y-1 transition-all duration-300 hover:text-blue-400"
      onClick={closeNav}
    >
      <span className="block bg-black w-6 h-0.5 rounded"></span>
      <span className="block bg-black w-4 hover:w-6 h-0.5 rounded"></span>
    </button>
  );
}
