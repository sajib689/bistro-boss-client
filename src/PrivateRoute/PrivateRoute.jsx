import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <div className="loading loading-infinity loading-lg"></div>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return (
    <Navigate to="/login" state={{ from: location }} replace={true}></Navigate>
  );
};

export default PrivateRoute;
