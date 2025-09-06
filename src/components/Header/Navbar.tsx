import DesktopNav from "./Navs/DesktopNav";

export default function Navbar() {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopNav />
      </div>
    </>
  );
}
