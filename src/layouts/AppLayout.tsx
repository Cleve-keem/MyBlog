import { Outlet } from "react-router";
import Header from "../components/Header/Header";

export default function AppLayout() {
  return (
    <>
      <Header />
      <main className="lg:w-full mx-auto border border-red-500">
        <Outlet />
      </main>
    </>
  );
}
