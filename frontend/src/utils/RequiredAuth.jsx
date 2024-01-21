// import React from 'react'

import { Navigate } from "react-router-dom";
import { useAuth } from "../authContext/adminAuth";

const RequiredAuth = ({ children }) => {
  const auth = useAuth();
  // const nvgt = useNavigate();
  console.log("reqAuth", auth.user);
  if (auth.user == null) {
    return <Navigate to="/admin" />;
  }
  return children;
};

export default RequiredAuth;
