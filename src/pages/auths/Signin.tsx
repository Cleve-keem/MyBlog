import Button from "../../components/Button";
import FormField from "../../components/Form/FormField";

export default function Signin() {
  return (
    <div className="">
      <h1 className="font-semibold text-2xl text-center mb-1">
        Create Account
      </h1>
      <p className="mb-7 w-[80%] mx-auto text-center text-sm text-gray-500">
        Let's get you all set, fill your information below or register with your
        social account
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
    </div>
  );
}
