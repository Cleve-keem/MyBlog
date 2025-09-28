import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/auths/Login";
import Signin from "./pages/auths/Signin";
import { Toaster } from "react-hot-toast";
import VerifyAccountPage from "./pages/VerifyAccountPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="auth" element={<AuthLayout />}>
            {/* <Route index element={<Navigate replace to="login" />} /> */}
            <Route path="login" element={<Login />} />
            <Route path="sign-up" element={<Signin />} />
          </Route>

          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact-us" element={<Contact />} />
            <Route
              path="account/verify/:token"
              element={<VerifyAccountPage />}
            />
          </Route>
        </Routes>
      </BrowserRouter>

      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
