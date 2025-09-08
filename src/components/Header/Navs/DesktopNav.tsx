import { Link } from "react-router-dom";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TiArrowDown } from "react-icons/ti";

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

export default function DesktopNav() {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  return (
    <ul className="flex gap-6 relative">
      {navItems.map((item, index) => (
        <li
          key={index}
          className="relative"
          onMouseEnter={() => setActiveMenu(index)}
          onMouseLeave={() => setActiveMenu(null)}
        >
          {/* Button */}
          <button className="flex gap-1 px-2 py-1 hover:text-pink-500 transition">
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
            <div className="absolute top-10 left-1/2 -translate-x-1/2 mt-3 w-52 bg-white text-black rounded-lg shadow-lg z-50">
              {/* Pointer */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-white"></div>

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
