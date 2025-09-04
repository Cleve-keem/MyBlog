import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <div className="h-screen flex flex-col justify-center items-center w-[90%] md:max-w-1/2 mx-auto">
      <Outlet />
    </div>
  );
}
