import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "./Sidebar";
// import Navbar from "./Navbar";
import { CiSearch } from "react-icons/ci";
import AuthButton from "./AuthButton";
import Logo from "./Logo";
import Hamburger from "./Hamburger";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobile = () => setIsOpen((prev) => !prev);

  return (
    <motion.header className="h-[65px] fixed left-0 right-0 top-0 md:top-1.5 px-6 flex justify-between sm:px-2 lg:w-[90%] mx-auto rounded hover:bg-white/60 hover:backdrop-blur-md hover:shadow-md hover:scale-[1.01] z-40 bg-white">
      {/* Left */}
      <div className="flex items-center gap-5">
        <Hamburger closeNav={toggleMobile} />
        <Logo />
        <Sidebar variant="desktop" />
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <CiSearch className="text-2xl" />
        <div className="hidden sm:block">
          <AuthButton />
        </div>
      </div>

      {/* Mobile Navbar */}
      <AnimatePresence>
        {isOpen && (
          <Sidebar variant="mobile" isOpen={isOpen} close={toggleMobile} />
        )}
      </AnimatePresence>
    </motion.header>
  );
}
