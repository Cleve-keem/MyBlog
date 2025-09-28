import Button from "@/components/Button";
import { MdVerifiedUser } from "react-icons/md";

export default function VerifyPending() {
  return (
    <div className="h-[80vh] border-2 px-4 flex flex-col justify-center gap-4 rounded-xl">
      <span className="block text-4xl mx-auto">
        <MdVerifiedUser />
      </span>
      <p className="leading-6 text-center text-sm mb-5">
        A verification link as been sent to your mail kindly visit the link to
        verify your account
      </p>
      <Button variant="secondary" className="py-2">
        Resend Link
      </Button>
    </div>
  );
}
