import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
  const isLogin = false;

  return isLogin ? <Outlet /> : <Navigate to={"/"} />;
}
