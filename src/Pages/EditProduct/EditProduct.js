import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import ProductInfoForm from "../AddProduct/ProductInfoForm";
import ProductPricing from "../AddProduct/ProductPricing";
import EditProductInfo from "./EditProductInfo";
import EditPricing from "./EditPricing";
export default function EditProduct() {
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
        <button
          onClick={() => {
            console.log(editFormData);
          }}
        >
          Save
        </button>
      </Box>
    </div>
  );
}
