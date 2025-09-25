import type {
  LoginCredentials,
  RegisterCredentials,
} from "@/interfaces/requests/Register";
import type {
  LoginResponse,
  RegisterResponse,
} from "@/interfaces/responses/RegisterResponse";
import axios from "axios";

// const API_URL =
//   import.meta.env.VITE_DATABASE_URL || "http://localhost:3000/api";

// export async function registerUser(
//   credentials: RegisterCredentials
// ): Promise<RegisterResponse> {
//   try {
//     const response = await axios.post<RegisterResponse>(
//       `${API_URL}/auth/sign-up`,
//       credentials,
//       { withCredentials: true }
//     );

//     if (response.status !== 200) {
//       throw new Error("Failed to register user");
//     }

//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// }

// export async function loginUser(credentials: LoginCredentials): Promise<void> {
//   try {
//     const response = await axios.post<LoginResponse>(
//       `${API_URL}/auth/login`,
//       credentials,
//       { withCredentials: true }
//     );

//     if (response.status !== 200) {
//       throw new Error("Failed to login user");
//     }

//     console.log(response);
//   } catch (error) {
//     throw error;
//   }
// }

const API_URL =
  import.meta.env.VITE_DATABASE_URL || "http://localhost:3000/api";

export async function registerUser(
  credentials: RegisterCredentials
): Promise<RegisterResponse> {
  const response = await axios.post(`${API_URL}/auth/sign-up`, credentials, {
    withCredentials: true,
  });
  return response.data; // { status, message, id?, user? }
}

export async function loginUser(
  credentials: LoginCredentials
): Promise<LoginResponse> {
  const response = await axios.post(`${API_URL}/auth/login`, credentials, {
    withCredentials: true,
  });
  return response.data; // { status, message, user? }
}
