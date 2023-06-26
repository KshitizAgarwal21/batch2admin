import React, { useState } from "react";
import Box from "@mui/material/Box";
import loginimg from "../../Assets/login.png";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [formData, setFormData] = useState({});
  const [errorMsg, setErrorMsg] = useState("");
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const navigate = useNavigate();
  const login = () => {
    if (formData.username == "test") {
      if (formData.password == "test") {
        localStorage.setItem("token", "testandtest");
        navigate("/");
      } else {
        setErrorMsg("Username or password is incorrect");
      }
    } else {
      setErrorMsg("User is not registered");
    }
  };
  return (
    <Box
      sx={{
        width: "50%",
        height: "50vh",
        background: "#fff",
        borderRadius: "20px",
        margin: "10% auto",
        boxSizing: "border-box",
        padding: "20px",
        display: "flex",
      }}
    >
      <img src={loginimg} className="login-img" />
      <div className="form-container">
        <Box
          sx={{
            width: "100%",
            height: "100%",
            padding: "20px",
            boxSizing: "border-box",
          }}
        >
          <label>Username</label>{" "}
          <input
            type="text"
            name="username"
            className="custom-input"
            onChange={handleChange}
          ></input>
          <label>Password</label>{" "}
          <input
            type="password"
            name="password"
            className="custom-input"
            onChange={handleChange}
          ></input>
          <p
            style={{ display: errorMsg != "" ? "block" : "none", color: "red" }}
          >
            {errorMsg}
          </p>
          <button className="login-btn" onClick={login}>
            Login
          </button>
        </Box>
      </div>
    </Box>
  );
}
