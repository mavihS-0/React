import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const user = localStorage.getItem("username");

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
