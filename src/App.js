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
import AddProduct from "./Pages/AddProduct/AddProduct";
import ProductList from "./Pages/ProductList/ProductList";
import EditProduct from "./Pages/EditProduct/EditProduct";
import OrderList from "./Pages/OrderList/OrderList";
import OrderSummary from "./Pages/OrderSummary/OrderSummary";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedLayout />}>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />}></Route>
              <Route path="/addproduct" element={<AddProduct />}></Route>
              <Route path="/productlist" element={<ProductList />}></Route>
              <Route path="/orderlist" element={<OrderList />}></Route>
              <Route path="/edit" element={<EditProduct />}></Route>
              <Route path="/ordersummary" element={<OrderSummary />}></Route>
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
