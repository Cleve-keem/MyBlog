import Button from "../Button";

export default function AuthButton() {
  return (
    <div className="h-full flex flex-col gap-3 sm:flex-row sm:items-center">
      <Button variant="primary" className="font-semibold" to="auth/login">
        Login
      </Button>
      <Button
        variant="secondary"
        className="font-semibold text-[14px] sm:text-[1em] text-nowrap"
        to="auth/sign-up"
      >
        Sign Up
      </Button>
    </div>
  );
}
