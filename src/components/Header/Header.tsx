import { useState } from "react";
import AuthButton from "./AuthButton";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import Navbar from "./Navbar";

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const close = () => setIsOpen((prev) => !prev);

  return (
    <header className="px-6 py-4 flex justify-between items-center mb-4 sm:p-4 border-b border-gray-200">
      <Logo />
      <Navbar open={isOpen} />
      <div className="hidden sm:block">
        <AuthButton />
      </div>
      <Hamburger closeNav={close} />
    </header>
  );
}
