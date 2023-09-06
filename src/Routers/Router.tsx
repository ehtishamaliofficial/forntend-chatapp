import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import PublicRoutes from "../utils/constants/PublicRoutes";
import Register from "../pages/Register";

export default function Router() {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
}
