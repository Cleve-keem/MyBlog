import Button from "../Button";

export default function AuthButton() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Button variant="primary" className="font-semibold">
        Login
      </Button>
      <Button
        variant="secondary"
        className="font-semibold text-[14px] sm:text-[1em]"
      >
        Sign Up
      </Button>
    </div>
  );
}
