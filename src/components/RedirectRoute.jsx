import { Navigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import MyProfilePage from "../pages/MyProfilePage";

export default function RedirectRoute({ children }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  if (isAuthenticated) {
    return <Navigate to="/myProfile"></Navigate>;
  }
  return children;
}
