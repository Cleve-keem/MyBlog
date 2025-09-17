import { useState } from "react";
import { Link } from "react-router-dom";
import { navItems } from "@/config/navitem";
import { MdKeyboardArrowDown } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { IoArrowDownOutline } from "react-icons/io5";
import Hamburger from "./Hamburger";

type SidebarProps = {
  variant: "desktop" | "mobile";
  isOpen?: boolean;
  close: () => void;
};

export default function Sidebar({ variant, isOpen, close }: SidebarProps) {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  const handleHover = (index: number | null) => {
    if (variant === "desktop") setActiveMenu(index);
  };

  if (variant === "desktop") {
    return (
      <aside>
        {/* Desktop Nav */}
        {variant === "desktop" && (
          <ul className="hidden lg:flex gap-6">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="relative"
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => handleHover(null)}
              >
                <button className="flex items-center gap-1 font-medium">
                  {item.label}{" "}
                  {item.menu && (
                    <span>
                      {activeMenu !== index ? (
                        <MdKeyboardArrowDown />
                      ) : (
                        <IoArrowDownOutline />
                      )}
                    </span>
                  )}
                </button>

                {/* Dropdown */}
                <AnimatePresence>
                  {activeMenu === index && (
                    <motion.ul
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute left-0 top-7 mt-2 w-40 rounded-lg bg-white shadow-md p-2"
                    >
                      {/* Pointer */}
                      <div className="absolute -top-1 left-10 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-white"></div>

                      {item.menu.map((link, i) => (
                        <li key={i}>
                          <Link
                            to={link.to}
                            className="block px-3 py-2 hover:bg-gray-100 rounded-md"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
        )}
      </aside>
    );
  }

  return (
    <>
      {/* Mobile Nav (Drawer style) */}
      {variant === "mobile" && isOpen && (
        <motion.ul
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 h-screen w-64 bg-white shadow-lg p-6 flex flex-col gap-4 z-50"
        >
          {/* <button
            onClick={close}
            className="self-end px-2 py-1 rounded bg-gray-200"
          >
            Close ✖
          </button> */}

          <Hamburger close={close} variant="close" />

          {navItems.map((item, index) => (
            <li key={index} className="border-b pb-2">
              <p className="font-semibold mb-2">{item.label}</p>
              <ul className="flex flex-col gap-2">
                {item.menu.map((link, i) => (
                  <li key={i}>
                    <Link
                      to={link.to}
                      onClick={close}
                      className="block px-2 py-1 hover:bg-gray-100 rounded"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </motion.ul>
      )}
    </>
  );
}
