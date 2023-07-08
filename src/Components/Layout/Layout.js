import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "../Header/Header";
import Sidenav from "../Sidenav/Sidenav";

export default function Layout() {
  const [searchItem, setSearchItem] = useState(null);
  return (
    <div>
      <Header searchItem={searchItem} setSearchItem={setSearchItem} />
      <div className="area-container">
        <Sidenav />
        <div style={{ width: "80%", padding: "25px" }}>
          {" "}
          <Outlet context={{ searchItem: searchItem }} />
        </div>
      </div>
    </div>
  );
}
