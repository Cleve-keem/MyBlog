import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <div className="w-[90%] min-h-screen flex flex-col justify-center items-center md:max-w-1/2 mx-auto">
      <Outlet />
    </div>
  );
}
