import React, { useEffect, useState } from "react";
import "./header.css";
import microwave from "../../Assets/microwave.jpeg";
import { decodeToken } from "react-jwt";
export default function Header(props) {
  const handleChange = (e) => {
    props.setSearchItem(e.target.value);
  };
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const token = localStorage.getItem("token");
    const data = decodeToken(token);
    setUserData(data);
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
                {userData.firstName} {userData.lastName}
              </p>
              <p>{userData.contact}</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
