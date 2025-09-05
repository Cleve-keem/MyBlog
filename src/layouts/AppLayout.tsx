import { Outlet } from "react-router";
import Header from "../components/Header/Header";

export default function AppLayout() {
  return (
    <>
      <Header />
      <main className="mt-19 lg:w-[90%] mx-auto">
        <Outlet />
      </main>
    </>
  );
}
