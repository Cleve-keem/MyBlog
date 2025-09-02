import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/auths/Login";
import Signin from "./pages/auths/Signin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route index element={<Navigate replace to="/auth-login" />} />
          <Route path="/auth-login" element={<Login />} />
          <Route path="/auth-sign-up" element={<Signin />} />
        </Route>

        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact-us" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
