import { Link } from "react-router";
import Button from "../../components/Button";
import FormField from "../../components/Form/FormField";
import { FaLock } from "react-icons/fa";
import { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState<Record<string, string>>({
    email: "",
    password: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: any) {
    e.preventDefualt();
    
    console.log(e);
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

          <Button className="w-full h-[40px] text-white text-sm font-normal bg-gray-900 my-4">
            SIGN IN
          </Button>
        </form>
        {/* Oauth */}
        <div></div>

        <p className="text-center text-sm">
          Don't have an account? <Link to="/sign-up">Sign up</Link>
        </p>
      </div>
    </>
  );
}
