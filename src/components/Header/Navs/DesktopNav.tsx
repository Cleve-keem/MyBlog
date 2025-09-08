import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoArrowDownOutline } from "react-icons/io5";
import { navItems } from "@/config/navitem";

interface DesktopProps {
  activeMenu: number | null;
  closeActiveMenu: (menu: number | null) => void;
}

export default function DesktopNav({
  activeMenu,
  closeActiveMenu,
}: DesktopProps) {
  return (
    <ul className="flex relative h-full">
      {navItems.map((item, index) => (
        <li
          key={index}
          className="relative h-full"
          onMouseEnter={() => closeActiveMenu(index)}
          onMouseLeave={() => closeActiveMenu(null)}
        >
          {/* Button */}
          <button className="h-full flex items-center px-2 py-1 hover:text-blue-400 transition">
            {item.label}
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
          {activeMenu === index && (
            <div className="absolute top-10 left-1/2 -translate-x-1/2 mt-3 bg-white text-black rounded-lg shadow-lg z-50">
              {/* Pointer */}
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-white"></div>

              <ul className="flex flex-col p-2">
                {item.menu.map((menuItem, i) => (
                  <Link
                    to={menuItem.to}
                    key={i}
                    className="px-4 py-2 hover:bg-pink-100 rounded cursor-pointer"
                  >
                    {menuItem.label}
                  </Link>
                ))}
              </ul>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
