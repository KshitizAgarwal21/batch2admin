import React from "react";
import Box from "@mui/material/Box";

export default function ProductInfoForm(props) {
  const { productData, setProductData } = props;
  const handleChange = (e) => {
    setProductData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div>
      <Box
        sx={{
          width: "60%",
          height: "auto",
          margin: "0 auto",
          background: "#fff",
          padding: "50px",
        }}
      >
        <h2>Product Information</h2>

        <div className="row-form">
          <div>
            {" "}
            <label className="product-form-label">Name</label>
            <input
              type="text"
              name="name"
              className="product-form-input"
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <label className="product-form-label">Weight</label>
            <input
              type="text"
              name="weight"
              className="product-form-input"
              onChange={handleChange}
            ></input>
          </div>
        </div>
        <div className="row-form">
          <div>
            {" "}
            <label className="product-form-label">Sizes</label>
            <select
              className="product-form-input"
              onChange={handleChange}
              name="size"
            >
              <option>1</option>
              <option>2</option>
            </select>
          </div>
          <div>
            <label className="product-form-label">Category</label>
            <input
              type="text"
              name="category"
              className="product-form-input"
              onChange={handleChange}
            ></input>
          </div>
        </div>
        <div className="row-form">
          <div>
            {" "}
            <label className="product-form-label">Description</label>
            <input
              type="text"
              name="description"
              className="product-form-input"
              onChange={handleChange}
            ></input>
          </div>
        </div>
      </Box>
    </div>
  );
}
