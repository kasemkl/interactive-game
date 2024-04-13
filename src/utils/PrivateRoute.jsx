import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element }) => {
  // const token=localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')):null
  const token = localStorage.getItem("email");

  return !token ? <Navigate to="/login" /> : element;
};

export default PrivateRoute;
