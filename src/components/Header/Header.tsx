import { useState } from "react";
import { motion } from "framer-motion";
import AuthButton from "./AuthButton";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import Navbar from "./Navbar";
import { CiSearch } from "react-icons/ci";

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const closeActiveMenu = (menu: number | null) => setActiveMenu(menu);

  const close = () => setIsOpen((prev) => !prev);

  return (
    <motion.header
      className={`fixed left-0 right-0 top-0 md:top-1.5 px-6 py-4 flex md:justify-between sm:px-2 lg:w-[90%] mx-auto rounded hover:bg-white/60 hover:backdrop-blur-md hover:shadow-md hover:scale-[1.01] bg-white ${
        activeMenu
          ? "hover:backdrop-blur-md hover:shadow-md hover:scale-[1.01]"
          : ""
      }`}
    >
      <div className="flex gap-5 w-full justify-between items-center">
        <Hamburger closeNav={close} type="open" />
        <Logo />
        <Navbar
          activeMenu={activeMenu}
          closeActiveMenu={closeActiveMenu}
          closeNav={close}
          isNavOpen={isOpen}
        />
        <CiSearch className="text-2xl" />
      </div>
      <div className="hidden md:flex md:items-center gap-4">
        <CiSearch className="text-2xl" />
        <div className="hidden sm:block">
          <AuthButton />
        </div>
      </div>
    </motion.header>

    // <header className="fixed left-0 right-0 top-1.5 px-6 py-4 flex justify-between items-center mb-4 sm:p-4 lg:w-[90%] mx-auto rounded border hover:bg-white">
    //   <div className="flex gap-5 items-center">
    //     <Hamburger closeNav={close} />
    //     <Logo />
    //     <Navbar />
    //   </div>
    //   <div className="flex items-center gap-4">
    //     <CiSearch className="text-2xl" />
    //     <div className="hidden sm:block">
    //       <AuthButton />
    //     </div>
    //   </div>
    // </header>
  );
}
