import DesktopNav from "./Navs/DesktopNav";
import MobileNav from "./Navs/MoblieNav";

export interface NavbarProps {
  activeMenu: number | null;
  isNavOpen?: boolean;
  closeNav: () => void;
  closeActiveMenu: (x: number | null) => void;
}

export default function Navbar({
  activeMenu,
  closeActiveMenu,
  isNavOpen,
  closeNav,
}: NavbarProps) {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopNav activeMenu={activeMenu} closeActiveMenu={closeActiveMenu} />
      </div>
      <MobileNav
        activeMenu={activeMenu}
        closeActiveMenu={closeActiveMenu}
        // isNavOpen={isNavOpen}
        closeNav={closeNav}
      />
    </>
  );
}
