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
              name="Price"
              className="product-form-input"
              placeholder={item.Price}
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <label className="product-form-label">Tags</label>
            <input
              type="text"
              name="Tags"
              className="product-form-input"
              placeholder={item.Tags}
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
              name="Currency"
            >
              <option>1</option>
              <option>2</option>
            </select>
          </div>
          <div>
            <label className="product-form-label">SKU</label>
            <input
              type="text"
              name="SKU"
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
