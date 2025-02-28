import React from "react";
import { Navigate } from "react-router";

function PretectedRoute() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return isLoggedIn ? (
    <Navigate to={"/home"} replace />
  ) : (
    <Navigate to={"/login"} replace />
  );
}

export default PretectedRoute;
