import React from "react";
import "./header.css";
import microwave from "../../Assets/microwave.jpeg";
export default function Header(props) {
  const handleChange = (e) => {
    props.setSearchItem(e.target.value);
  };
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
              <p>User name</p>
              <p>User Email</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
