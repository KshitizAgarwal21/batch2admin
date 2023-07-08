import React, { useState } from "react";
import "./sidenav.css";
import HomeIcon from "@mui/icons-material/Home";
import { Link, NavLink } from "react-router-dom";
export default function Sidenav() {
  const [isExpanded1, setExpanded1] = useState(false);
  const [isExpanded2, setExpanded2] = useState(false);
  const expand = () => {
    setExpanded1(!isExpanded1);
  };
  return (
    <div className="sidenav-content">
      <ul className="nav-items">
        <li>
          <span onClick={expand}>
            <HomeIcon />
            Home
          </span>
          <ul className={isExpanded1 ? "sub-item active" : "sub-item"}>
            <NavLink
              to="/"
              style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isPending ? "red" : "black",
                };
              }}
            >
              <li>Dashboard</li>
            </NavLink>
            <li>Analytics</li>
          </ul>
        </li>
        <li>
          <span onClick={() => setExpanded2(!isExpanded2)}>
            <HomeIcon />
            E-Commerce
          </span>
          <ul className={isExpanded2 ? "sub-item active" : "sub-item"}>
            <NavLink
              to="/addproduct"
              style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "purple" : "black",
                };
              }}
            >
              <li>Add Product</li>
            </NavLink>
            {/* <NavLink
              to="/edit"
              style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "purple" : "black",
                };
              }}
            >
              {" "}
              <li>Edit Product</li>
            </NavLink> */}
            <NavLink
              to="/productlist"
              style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "purple" : "black",
                };
              }}
            >
              {" "}
              <li>Product List</li>
            </NavLink>
          </ul>
        </li>
      </ul>
    </div>
  );
}
