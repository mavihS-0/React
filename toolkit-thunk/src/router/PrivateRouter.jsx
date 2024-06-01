import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router";
import { Navigate } from "react-router-dom";

const PrivateRouter = () => {
  const user = useSelector((state) => state.auth.user);
  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRouter;
