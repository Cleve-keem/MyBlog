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
    <motion.header className="w-full z-40 flex items-center">
      <div className="w-full flex items-center justify-between">
        <div className="container w-full h-full xs:max-w-[576px] xs:mx-auto md:min-w-[100%] md:mx-0 lg:max-w-[1248px] lg:px-4 lg:mx-auto">
          {/* DESKTOP HEADER */}
          <div className="hidden w-full min-h-[64px] my-[8px] px-[16px] flex-1 lg:rounded-[8px] xslg:flex xslg:px-0">
            {/* Left */}
            <div className="h-[64px] pr-[8px] flex items-center">
              <Logo />
            </div>
            <Sidebar variant="desktop" close={toggleMobile} />

            {/* Right */}
            <div className="pl-[8px] flex flex-1 items-center justify-end">
              <div className="h-full flex items-center">
                <CiSearch className="text-2xl" />
              </div>
              <div className="h-full ml-[8px] sm:block">
                <AuthButton />
              </div>
            </div>
          </div>

          {/* MOBILE HEADER */}
          <div className="w-full min-h-[64px] my-[8px] px-[16px] flex flex-1 lg:rounded-[8px] xslg:px-0 xslg:hidden">
            {/* Left */}
            <div className="pr-[8px] flex flex-1 items-center">
              <Hamburger close={toggleMobile} variant="open" />
            </div>
            <div className="pr-[8px] flex flex-6 items-center justify-center">
              <Logo />
            </div>
            {/* Right */}
            <div className="pl-[8px] flex flex-1 items-center justify-end">
              <div className="h-full flex items-center justify-end md:justify-start">
                <CiSearch className="text-2xl" />
              </div>
              <div className="h-full ml-[8px] hidden md:flex">
                <AuthButton />
              </div>
            </div>

            {/* SIDE BAR */}
            <AnimatePresence>
              {isOpen && (
                <Sidebar
                  variant="mobile"
                  isOpen={isOpen}
                  close={toggleMobile}
                />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
