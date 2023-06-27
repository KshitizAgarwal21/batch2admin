import React, { useState } from "react";
import "./sidenav.css";
import HomeIcon from "@mui/icons-material/Home";
export default function Sidenav() {
  const [isExpanded, setExpanded] = useState(false);
  const expand = () => {
    setExpanded(!isExpanded);
  };
  return (
    <div className="sidenav-content">
      <ul className="nav-items">
        <li>
          <span onClick={expand}>
            <HomeIcon />
            Home
          </span>
          <ul className={isExpanded ? "sub-item active" : "sub-item"}>
            <li>Dashboard</li>
            <li>Analytics</li>
          </ul>
        </li>
        <li>
          <span onClick={expand}>
            <HomeIcon />
            Pages
          </span>
          <ul className={isExpanded ? "sub-item active" : "sub-item"}>
            <li>Dashboard</li>
            <li>Analytics</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
