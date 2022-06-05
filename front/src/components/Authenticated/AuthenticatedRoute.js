import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Auth from "../../contexts/Auth";

const AuthenticatedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(Auth);

  if (!isAuthenticated) {
    return <Navigate to='/login' />;
  }
  return children ? children : <Outlet />;

};

export default AuthenticatedRoute;
