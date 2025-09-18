import { Link } from "react-router";
import Button from "../../components/Button";
import FormField from "../../components/Form/FormField";
import { FaFacebookF, FaUserAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";

export default function Signin() {
  const [formData, setFormData] = useState<Record<string, string>>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("submitting", formData);
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
              value={formData.name}
              onChange={handleChange}
            />
            <FormField
              label="Last Name"
              type="text"
              name="lastname"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <FormField
            label="Email"
            type="email"
            name="email"
            value={formData.name}
            onChange={handleChange}
          />
          <FormField
            label="Password"
            type="password"
            name="password"
            value={formData.name}
            onChange={handleChange}
          />

          <Button className="w-full text-white font-normal text-sm bg-gray-900 my-4 h-[40px]">
            SIGN UP
          </Button>
        </form>
        {/* Oauth */}
        <span className="flex gap-2 items-center text-gray-400 text-nowrap my-8 before:inline-block before:w-full before:h-[1px] before:bg-gray-300 before:content-[''] after:inline-block after:w-full after:h-[1px] after:bg-gray-300 after:content-['']">
          or Sign up with
        </span>
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
