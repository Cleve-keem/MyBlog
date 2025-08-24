interface HamburgerProps {
  closeNav: () => void;
}

export default function Hamburger({ closeNav }: HamburgerProps) {
  return (
    <button className="space-y-1 sm:hidden" onClick={closeNav}>
      <span className="block bg-black w-7 h-0.5 rounded"></span>
      <span className="block bg-black w-6 h-0.5 rounded"></span>
      <span className="block bg-black w-7 h-0.5 rounded"></span>
    </button>
  );
}
