import { useSelector } from "react-redux";
import { RootState } from "../../store/store.type";
import { Navigate, Outlet } from "react-router-dom";

export default function PublicRoutes() {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  return !isAuthenticated ? <Outlet /> : <Navigate to="/chat" />;
}
