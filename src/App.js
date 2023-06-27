import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Sidenav from "./Components/Sidenav/Sidenav";
import Content from "./Components/Content/Content";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import ProtectedLayout from "./Components/ProtectedLayout";
import Layout from "./Components/Layout/Layout";
import Help from "./Pages/Help";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedLayout />}>
            <Route path="/" element={<Layout />}></Route>
          </Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/help" element={<Help />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
