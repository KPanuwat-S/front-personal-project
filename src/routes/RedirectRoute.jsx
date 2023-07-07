import { Navigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import MyProfilePage from "../pages/MyProfilePage";
import { useLocation } from "react-router-dom";

export default function RedirectRoute({ children }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const location = useSelector((state) => state.auth.location);

  if (isAuthenticated) {
    if (location) return <Navigate to={`${location.pathname}`} />;
    return <Navigate to="/myProfile"></Navigate>;
  }
  return children;
}
