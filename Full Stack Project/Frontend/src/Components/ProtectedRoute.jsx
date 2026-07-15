import { Navigate } from "react-router-dom";
import { getToken, getUser } from "../utils/auth";

export default function ProtectedRoute({ children, roles }) {
  if (!getToken()) {
    return <Navigate to="/" replace />;
  }

  if (roles && roles.length > 0) {
    const user = getUser();
    if (!user || !roles.includes(user.role)) {
      return <Navigate to="/player" replace />;
    }
  }

  return children;
}
