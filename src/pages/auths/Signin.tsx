import { Link } from "react-router";
import Button from "../../components/Button";
import FormField from "../../components/Form/FormField";
import { FaUserAlt } from "react-icons/fa";

export default function Signin() {
  return (
    <>
      <div className="mb-10 size-9 flex items-center justify-center rounded-md bg-blue-600 text-white">
        <FaUserAlt />
      </div>
      <div className="">
        <h1 className="font-semibold text-2xl text-center mb-1">
          Create Account
        </h1>
        <p className="mb-7 w-[80%] mx-auto text-center text-sm text-gray-500">
          Let's get you all set, fill your information below or register with
          your social account
        </p>
        <form>
          <div className="flex flex-col sm:flex-row sm:gap-5">
            <FormField label="Firstname" type="text" name="firstname" />
            <FormField label="Lastname" type="text" name="lastname" />
          </div>
          <FormField label="Email" type="email" name="email" />
          <FormField label="Password" type="password" name="password" />

          <Button className="w-full text-white font-semibold bg-blue-700 my-4 h-[40px]">
            SIGN UP
          </Button>
        </form>
        {/* Oauth */}
        <div></div>

        <p className="text-center">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </>
  );
}
