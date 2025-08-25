import AuthButton from "./AuthButton";

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
        <li className="">
          <a href="#" className="">
            Home
          </a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">About Me</a>
        </li>
        <li>
          <a href="#">Contant Us</a>
        </li>
      </ul>
    </nav>
  );
}
