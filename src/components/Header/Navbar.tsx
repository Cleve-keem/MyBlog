import { Link } from "react-router";
import AuthButton from "./AuthButton";

const navItems = [
  { to: "/", name: "Features" },
  { to: "/about", name: "Categories" },
  { to: "/blogs", name: "Lifestyle" },
  { to: "/contact-us", name: "Contact Us" },
];

interface NavbarProps {
  open: boolean;
}

export default function Navbar({ open }: NavbarProps) {
  return (
    <nav
      className={`absolute top-0 ${
        open ? "left-0" : "-left-100"
      } bottom-0 w-[70%] px-5 py-4 bg-white transition-all duration-500 shadow-lg sm:relative sm:w-fit sm:p-0 sm:bg-transparent sm:shadow-none sm:-left-0`}
    >
      <div className="sm:hidden py-7">
        <AuthButton />
      </div>
      <ul className="mt-5 flex flex-col gap-4 font-semibold sm:flex-row sm:gap-3 sm:mt-0">
        {navItems.map((item) => (
          <li className="">
            <Link to={item.to} className="">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
