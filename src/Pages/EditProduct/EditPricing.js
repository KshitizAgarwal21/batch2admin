import React from "react";
import { Box } from "@mui/material";

export default function EditPricing(props) {
  const handleChange = (e) => {
    setEditFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const { item, setEditFormData } = props;
  return (
    <div>
      {" "}
      <Box
        sx={{
          width: "60%",
          height: "auto",
          margin: "0 auto",
          background: "#fff",
          padding: "50px",
        }}
      >
        <h2>Pricing</h2>

        <div className="row-form">
          <div>
            {" "}
            <label className="product-form-label">Price</label>
            <input
              type="number"
              name="price"
              className="product-form-input"
              placeholder={item.price}
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <label className="product-form-label">Tags</label>
            <input
              type="text"
              name="tags"
              className="product-form-input"
              placeholder={item.rating.rate}
              onChange={handleChange}
            ></input>
          </div>
        </div>
        <div className="row-form">
          <div>
            {" "}
            <label className="product-form-label">Currency</label>
            <select
              className="product-form-input"
              onChange={handleChange}
              name="currency"
            >
              <option>1</option>
              <option>2</option>
            </select>
          </div>
          <div>
            <label className="product-form-label">SKU</label>
            <input
              type="text"
              name="sku"
              className="product-form-input"
              placeholder={item.id}
              onChange={handleChange}
            ></input>
          </div>
        </div>
        <div className="row-form"></div>
      </Box>
    </div>
  );
}
