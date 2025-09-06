// import { useState } from "react";
import AuthButton from "./AuthButton";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import Navbar from "./Navbar";
import { CiSearch } from "react-icons/ci";

export default function Header() {
  // const [isOpen, setIsOpen] = useState<boolean>(false);

  // const close = () => setIsOpen((prev) => !prev);

  return (
    <header className="fixed left-0 right-0 top-1.5 px-6 py-4 flex justify-between items-center mb-4 sm:p-4 lg:w-[90%] mx-auto rounded border hover:bg-white hover:scale-x-50">
      <div className="flex gap-5 items-center">
        <Hamburger closeNav={close} />
        <Logo />
        <Navbar />
      </div>
      <div className="flex items-center gap-4">
        <CiSearch className="text-2xl" />
        <div className="hidden sm:block">
          <AuthButton />
        </div>
      </div>
    </header>
  );
}
