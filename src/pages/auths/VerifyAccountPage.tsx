import { verifyUser } from "@/services/authApi";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router";

export default function VerifyAccountPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    async function verifyUserAccount(): Promise<void> {
      if (!id) return;

      try {
        const res = await verifyUser(id);

        if (res.status === "success") {
          toast.success(res.message ?? "Account verified successfully!");
          navigate("/auth/login");
        } else {
          toast.error(res.message ?? "Verification failed");
          navigate("auth/account/verify");
        }
      } catch (error) {
        console.error(error);
        toast.error("Something went wrong during verification");
      }
    }
    void verifyUserAccount();
  }, [id, navigate]);
  return (
    <div>
      <p>verifying your account...</p>
    </div>
  );
}
