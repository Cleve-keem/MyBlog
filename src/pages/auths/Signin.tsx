import { Link } from "react-router";
import Button from "../../components/Button";
import FormField from "../../components/Form/FormField";
import { FaFacebookF, FaUserAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { registerUser } from "../../services/authApi";
import toast from "react-hot-toast";
import type { RegisterCredentials } from "@/interfaces/requests/Register";
import type { RegisterUserResponse } from "@/interfaces/responses/RegisterResponse";

export default function Signin() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<RegisterCredentials>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      setIsLoading(true);
      const res: RegisterUserResponse = await registerUser(formData);
      if (res.status === "failure") {
        toast.error(res.message || "Registration failed");
        return;
      }
      toast.success(res.message || "Registered successfully");
      setFormData({ firstname: "", lastname: "", email: "", password: "" });
    } catch (err: any) {
      console.log(err.response?.data.response);
      toast.error(
        err?.response?.data.response?.message || "Failed to register"
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <div className="mb-10 size-9 flex items-center justify-center rounded-md bg-gray-900 text-white">
        <FaUserAlt />
      </div>
      <div className="w-full">
        <h1 className="font-semibold text-2xl text-center mb-1">
          Create Account
        </h1>
        <p className="mb-7 w-[80%] mx-auto text-center text-sm text-gray-500">
          Let's get you all set, fill your information below or register with
          your social account
        </p>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col sm:flex-row sm:gap-5">
            <FormField
              label="First Name"
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
            />
            <FormField
              label="Last Name"
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
            />
          </div>
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
            SIGN UP
          </Button>
        </form>

        <div className="w-full flex gap-2 items-center text-gray-400 my-8">
          <span className="w-full inline-block h-[1px] bg-gray-300"></span>
          <span className="min-w-fit text-nowrap">or Sign up with</span>
          <span className="w-full inline-block h-[1px] bg-gray-300"></span>
        </div>

        {/* Oauth */}
        <ul className="flex justify-center text-2xl gap-2">
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
          Already have an account? <Link to="/auth/login">Sign in</Link>
        </p>
      </div>
    </>
  );
}
