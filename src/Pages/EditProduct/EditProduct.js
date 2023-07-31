import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import ProductInfoForm from "../AddProduct/ProductInfoForm";
import ProductPricing from "../AddProduct/ProductPricing";
import EditProductInfo from "./EditProductInfo";
import EditPricing from "./EditPricing";
import axios from "axios";
export default function EditProduct() {
  const updateData = async () => {
    const res = await axios.put(
      "http://localhost:8080/products/editproductdata",
      editFormData
    );
  };

  const deleteData = async () => {
    try {
      const res = await axios.delete(
        "http://localhost:8080/products/deleteproductdata",
        { data: editFormData }
      );

      if (res.status == 200) {
        alert("deleted successfully");
      }
    } catch (e) {}
  };
  const data = useLocation();

  const [editFormData, setEditFormData] = useState(data.state);
  return (
    <div>
      <h2 style={{ color: "#6e39cb" }}>Edit Product</h2>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          background: "#fff",
          margin: "0 auto",
          borderRadius: "20px",
        }}
      >
        <EditProductInfo
          item={data.state}
          editFormData={editFormData}
          setEditFormData={setEditFormData}
        />
        <EditPricing
          item={data.state}
          editFormData={editFormData}
          setEditFormData={setEditFormData}
        />
        <button onClick={updateData}>Save</button>
        <button onClick={deleteData}>Delete</button>
      </Box>
    </div>
  );
}
