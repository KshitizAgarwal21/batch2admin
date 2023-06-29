import React, { useState } from "react";
import "./sidenav.css";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
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
            E-Commerce
          </span>
          <ul className={isExpanded ? "sub-item active" : "sub-item"}>
            <Link to="/addproduct">
              <li>Add Product</li>
            </Link>
            <li>Edit Product</li>
            <li>Product List</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
