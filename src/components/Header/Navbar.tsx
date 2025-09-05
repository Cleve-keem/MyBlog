import { Link } from "react-router";
import AuthButton from "./AuthButton";
import { IoIosArrowDown } from "react-icons/io";

const navItems = [
  {
    to: "#",
    name: "Features",
    dropdown: ["Trends", "Lifestyle", "Business", "Technologies"],
  },
  {
    to: "/about",
    name: "Categories",
    dropdown: ["Trends", "Lifestyle", "Business", "Technologies"],
  },
  {
    to: "/blogs",
    name: "Lifestyle",
    dropdown: ["Trends", "Lifestyle", "Business", "Technologies"],
  },
  // { to: "/contact-us", name: "Contact Us" },
];

interface NavbarProps {
  open: boolean;
}

export default function Navbar({ open }: NavbarProps) {
  return (
    <nav
      className={`absolute top-0 ${
        open ? "left-0" : "-left-100"
      } bottom-0 w-[70%] px-5 py-4 transition-all duration-500 shadow-lg sm:relative sm:w-fit sm:p-0 sm:bg-transparent sm:shadow-none sm:-left-0`}
    >
      <div className="sm:hidden py-7">
        <AuthButton />
      </div>
      <ul className="mt-5 flex flex-col gap-4 font-semibold sm:flex-row sm:gap-5 sm:mt-0">
        {navItems.map((item) => (
          <li>
            <Link to={item.to}>
              {item.name}
              <span className="inline-block text-[13px]">
                {item.dropdown && <IoIosArrowDown />}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
