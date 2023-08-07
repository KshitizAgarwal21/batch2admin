import React, { useEffect, useState } from "react";
import "./header.css";
import microwave from "../../Assets/microwave.jpeg";
import { decodeToken } from "react-jwt";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UsersData } from "../../redux/GetAccountHolder/action";
export default function Header(props) {
  const handleChange = (e) => {
    props.setSearchItem(e.target.value);
  };
  const navigate = useNavigate();
  const navigateAdmin = () => {
    navigate("/admin");
  };
  const handleLogout = () => {
    localStorage.removeItem("token");

    window.location.href = "http://localhost:3000";
  };

  const adminData = useSelector((state) => state.UsersData.userData);
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    const data = decodeToken(token);
    if (adminData.length == 0) {
      dispatch(UsersData());
    }
    // setUserData(data);
  }, []);
  return (
    <div>
      <nav className="header">
        <div style={{ display: "flex" }}>
          <h2 className="logo">Dashboard</h2>
          <input
            type="text"
            className="search-input"
            placeholder="Search anything here..."
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <div className="user-card">
            <img
              src={microwave}
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
            />
            <div>
              <p>
                {adminData.firstName} {adminData.lastName}
              </p>
              <p>{adminData.contact}</p>
            </div>
            <button onClick={navigateAdmin}>Admin Details</button>
            <button className="" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
