import { Link, useNavigate } from "react-router";
import Button from "../../components/Button";
import FormField from "../../components/Form/FormField";
import { FaFacebookF, FaLock } from "react-icons/fa";
import { useState } from "react";
import { loginUser } from "@/services/authApi";
import type { LoginCredentials } from "@/interfaces/requests/Register";
import type { LoginResponse } from "@/interfaces/responses/RegisterResponse";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";

export default function Login() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<LoginCredentials>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      setIsLoading(true);
      const res: LoginResponse = await loginUser(formData);
      if (res.status === "failure") {
        toast.error(res.message || "Login failed");
        return;
      }

      navigate("/");
      toast.success(res.message || "Logged in successfully");
    } catch (err: any) {
      console.error(err?.response?.data);
      toast.error(err?.response?.data?.message || "Invalid email or password");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <div className="mb-10 size-9 flex items-center justify-center rounded-md bg-gray-900 text-white">
        <FaLock />
      </div>
      <div className="w-full">
        <h1 className="font-semibold text-2xl text-center mb-1">
          Welcome Back!
        </h1>
        <p className="mb-7 w-[80%] mx-auto text-center text-sm text-gray-500">
          Login in to keep in touch with us
        </p>
        <form onSubmit={handleSubmit}>
          <FormField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <FormField
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />

          <Button
            disabled={isLoading}
            className={`w-full text-white font-normal text-sm ${
              isLoading ? "bg-gray-500" : "bg-gray-900"
            } my-4 h-[40px]`}
          >
            SIGN IN
          </Button>
        </form>

        {/* Oauth */}
        <ul className="flex justify-center text-2xl gap-2 mt-8">
          <li className="w-[70px] border py-1 rounded">
            <FcGoogle className="mx-auto" />
          </li>
          <li className="w-[70px] border py-1 rounded">
            <FaFacebookF className="mx-auto" />
          </li>
          <li className="w-[70px] border py-1 rounded">
            <FaXTwitter className="mx-auto" />
          </li>
        </ul>

        <p className="text-center text-sm mt-8">
          Don't have an account? <Link to="/auth/sign-up">Sign up</Link>
        </p>
      </div>
    </>
  );
}
