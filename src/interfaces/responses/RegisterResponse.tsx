export interface RegisterResponse {
  id?: string; // optional if backend sometimes omits
  status: "success" | "failure";
  message: string;
  token?: string;
}

export interface LoginResponse {
  status: "success" | "failure";
  message: string;
  user?: Record<string, string>;
}
