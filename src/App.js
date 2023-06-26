import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Sidenav from "./Components/Sidenav/Sidenav";
import Content from "./Components/Content/Content";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import ProtectedLayout from "./Components/ProtectedLayout";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<ProtectedLayout Children={Header} />}
          ></Route>
          <Route path="/login" element={<Login></Login>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
