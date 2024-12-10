import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/auth";

export default function PrivateRoute({ children }: { children: JSX.Element }) {
  const token = useAuthStore((state) => state.token);
  return token ? children : <Navigate to="/" />;
}
