import DesktopNav from "./Navs/DesktopNav";

export interface NavbarProps {
  activeMenu: number | null;
  closeActiveMenu: (x: number | null) => void;
}

export default function Navbar({ activeMenu, closeActiveMenu }: NavbarProps) {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopNav activeMenu={activeMenu} closeActiveMenu={closeActiveMenu} />
      </div>
    </>
  );
}
