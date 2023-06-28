import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Sidenav from "./Components/Sidenav/Sidenav";

import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import ProtectedLayout from "./Components/ProtectedLayout";
import Layout from "./Components/Layout/Layout";
import Help from "./Pages/Help";
import Home from "./Pages/Home/Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedLayout />}>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />}></Route>
            </Route>
          </Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/help" element={<Help />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
