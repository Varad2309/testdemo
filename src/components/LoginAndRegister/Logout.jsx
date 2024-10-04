// src/components/LoginAndRegister/Logout.js
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../store/auth";

const Logout = () => {
  const { logoutUser } = useAuth();

  useEffect(() => {
    // Log out the user and clean up
    logoutUser();
  }, [logoutUser]);

  // Redirect to the login page after logging out
  return <Navigate to="/login" replace />;
};

export default Logout;
