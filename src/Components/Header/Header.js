import React, { useEffect, useState } from "react";
import "./header.css";
import microwave from "../../Assets/microwave.jpeg";
import { decodeToken } from "react-jwt";
import axios from "axios";
export default function Header(props) {
  const handleChange = (e) => {
    props.setSearchItem(e.target.value);
  };
  const handleLogout = () => {
    localStorage.removeItem("token");

    window.location.href = "http://localhost:3000";
  };
  const [userData, setUserData] = useState({});

  const getaccountholder = async () => {
    const res = await axios.get(
      "http://localhost:8080/user/getaccountholderinfo"
    );
    console.log(res.data);
    if (res.status == 200) {
      setUserData(res.data);
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    const data = decodeToken(token);
    getaccountholder();
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
                {userData.firstName} {userData.lastName}
              </p>
              <p>{userData.contact}</p>
            </div>
            <button className="" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
