import type {
  LoginCredentials,
  RegisterCredentials,
} from "@/interfaces/requests/Register";
import type {
  LoginResponse,
  RegisterResponse,
} from "@/interfaces/responses/RegisterResponse";
import axios from "axios";

const API_URL =
  import.meta.env.VITE_DATABASE_URL || "http://localhost:3000/api";

export async function registerUser(
  credentials: RegisterCredentials
): Promise<RegisterResponse> {
  const response = await axios.post(`${API_URL}/auth/sign-up`, credentials, {
    withCredentials: true,
  });

  localStorage.setItem("authToken", response.data.token);
  return response.data; // { status, message, id?, token }
}

export async function verifyUser(token: string): Promise<RegisterResponse> {
  const response = await axios.get(`${API_URL}/account/verify/${token}`);
  return response.data;
}

export async function loginUser(
  credentials: LoginCredentials
): Promise<LoginResponse> {
  const response = await axios.post(`${API_URL}/auth/login`, credentials, {
    withCredentials: true,
  });
  console.log(response.data);
  return response.data; // { status, message, user? }
}
