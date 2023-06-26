import React from "react";
import Login from "../Pages/Login/Login";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
export default function ProtectedLayout({ Children }) {
  const [loggedIn, setLoggedIn] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("token") == null) {
      setLoggedIn(false);
    }

    //localStorage.setItem("token", value);
    //localStorage.removeItem("token");
  }, []);
  return <div>{loggedIn ? <Children /> : <Navigate to="/login" />}</div>;
}
