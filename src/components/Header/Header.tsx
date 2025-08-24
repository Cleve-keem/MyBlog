import { useState } from "react";
import AuthButton from "./AuthButton";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import Navbar from "./Navbar";

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const close = () => setIsOpen(false);

  return (
    <header className="px-6 py-4 flex justify-between items-center sm:p-4">
      <Logo />
      <Navbar open={isOpen} />
      <div className="hidden sm:block">
        <AuthButton />
      </div>
      <Hamburger closeNav={close} />
    </header>
  );
}
