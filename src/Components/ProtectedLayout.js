import React from "react";
import Login from "../Pages/Login/Login";
import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Layout from "./Layout/Layout";
export default function ProtectedLayout() {
  const [loggedIn, setLoggedIn] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("token") == null) {
      setLoggedIn(false);
    }

    //localStorage.setItem("token", value);
    //localStorage.removeItem("token");
  }, []);
  return <div>{loggedIn ? <Outlet /> : <Navigate to="/login" />}</div>;
}
