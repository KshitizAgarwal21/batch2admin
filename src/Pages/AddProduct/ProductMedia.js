import React from "react";
import Box from "@mui/material/Box";
export default function ProductMedia() {
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
        <h2>Media</h2>
        <div className="file-container">
          <input type="file" className="file" id="files"></input>
          <label for="files" className="upload">
            Browse Files
          </label>
        </div>
      </Box>
    </div>
  );
}
