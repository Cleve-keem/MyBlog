import { Link } from "react-router";
import Button from "../../components/Button";
import FormField from "../../components/Form/FormField";
import { FaLock } from "react-icons/fa";

export default function Login() {
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
        <form>
          <FormField label="Email" type="email" name="email" />
          <FormField label="Password" type="password" name="password" />

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
