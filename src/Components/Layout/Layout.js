import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../Header/Header";
import Sidenav from "../Sidenav/Sidenav";

export default function Layout() {
  return (
    <div>
      <Header />
      <div className="area-container">
        <Sidenav />
        <div style={{ width: "80%", padding: "25px" }}>
          {" "}
          <Outlet />
        </div>
      </div>
    </div>
  );
}
