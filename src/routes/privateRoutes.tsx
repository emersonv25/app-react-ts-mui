import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

export const PrivateRoute = () => {
  const { signed } = useAuthContext()

  return signed ? <Outlet /> : <Navigate to="/Login" />;
};