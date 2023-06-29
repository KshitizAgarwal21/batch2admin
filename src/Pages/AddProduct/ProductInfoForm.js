import React from "react";
import Box from "@mui/material/Box";

export default function ProductInfoForm() {
  return (
    <div>
      <Box
        sx={{
          width: "60%",
          height: "500px",
          margin: "0 auto",
          background: "#fff",
          padding: "50px",
          boxsizing: "border-box",
        }}
      >
        <h2>Product Information</h2>

        <div className="row-form">
          <div>
            {" "}
            <label className="product-form-label">Name</label>
            <input type="text" className="product-form-input"></input>
          </div>
          <div>
            <label className="product-form-label">Weight</label>
            <input type="text" className="product-form-input"></input>
          </div>
        </div>
        <div className="row-form">
          <div>
            {" "}
            <label className="product-form-label">Sizes</label>
            <select className="product-form-input">
              <option>1</option>
              <option>2</option>
            </select>
          </div>
          <div>
            <label className="product-form-label">Category</label>
            <input type="text" className="product-form-input"></input>
          </div>
        </div>
        <div className="row-form">
          <div>
            {" "}
            <label className="product-form-label">Description</label>
            <input type="text" className="product-form-input"></input>
          </div>
        </div>
      </Box>
    </div>
  );
}
