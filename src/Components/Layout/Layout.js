import React from "react";
import Content from "../Content/Content";
import Header from "../Header/Header";
import Sidenav from "../Sidenav/Sidenav";

export default function Layout() {
  return (
    <div>
      <Header />
      <div className="area-container">
        <Sidenav />
        <Content />
      </div>
    </div>
  );
}
