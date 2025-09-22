import type { RegisterCredentials } from "@/interfaces/requests/Register";
import axios from "axios";

export interface RegisterResponse {
  error?: string;
  message?: string;
}

const API_URL =
  import.meta.env.VITE_DATABASE_URL || "http://localhost:3000/api";

export async function registerUser(
  credentials: RegisterCredentials
): Promise<RegisterResponse> {
  try {
    const response = await axios.post<RegisterResponse>(
      `${API_URL}/auth/sign-up`,
      credentials
    );

    if (response.status !== 200) {
      throw new Error("Failed to register user");
    }

    return response.data;
  } catch (error) {
    throw error;
  }
}
