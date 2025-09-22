export interface RegisterResponse {
  id?: string; // optional if backend sometimes omits
  status: "success" | "failure";
  message?: string;
}
