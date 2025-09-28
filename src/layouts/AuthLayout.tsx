import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <div className="w-[90%] flex flex-col items-center py-10 md:max-w-1/2 mx-auto">
      <Outlet />
    </div>
  );
}
