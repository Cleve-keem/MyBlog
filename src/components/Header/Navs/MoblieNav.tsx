import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TiArrowDown } from "react-icons/ti";
import type { NavbarProps } from "../Navbar";
import Hamburger from "../Hamburger";
import Logo from "../Logo";

const navItems = [
  {
    label: "Features",
    menu: [
      { to: "/trends", label: "Trends" },
      { to: "/business", label: "Business" },
      { to: "/lifestyle", label: "Lifestyle" },
      { to: "/technologies", label: "Technologies" },
    ],
  },
  {
    label: "Categories",
    menu: [
      { to: "/trends", label: "Trends" },
      { to: "/business", label: "Business" },
      { to: "/lifestyle", label: "Lifestyle" },
      { to: "/technologies", label: "Technologies" },
    ],
  },
  {
    label: "Lifestyle",
    menu: [
      { to: "/trends", label: "Trends" },
      { to: "/business", label: "Business" },
      { to: "/lifestyle", label: "Lifestyle" },
      { to: "/technologies", label: "Technologies" },
    ],
  },
];

export default function MobileNav({
  activeMenu,
  closeActiveMenu,
  closeNav,
  isNavOpen,
}: NavbarProps) {
  return (
    <aside
      className={`fixed top-0 bg-white left-0 right-0 bottom-0 transition-all duration-500 ${
        !isNavOpen ? "-translate-x-full" : "translate-x-0"
      }`}
    >
      <div className="flex px-5 py-4 justify-between">
        <Hamburger closeNav={closeNav} type="close" />
        <Logo />
        <div />
      </div>
      <ul className="flex flex-col">
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
                    <TiArrowDown />
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
    </aside>
  );
}
