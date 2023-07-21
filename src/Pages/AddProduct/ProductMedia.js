import React, { useState } from "react";
import Box from "@mui/material/Box";
export default function ProductMedia(props) {
  const [mediaFileData, setMediaFileData] = useState();
  const { mediaData, setMediaData } = props;
  const handleChange = (e) => {
    var fileData = new FormData();
    console.log(e.target.files[0]);
    fileData.append("myFile", e.target.files[0]);
    setMediaData(fileData);
    // if (e.target.files[0].size > 100) {
    //   console.log("file is too large");
    // }
    // setMediaFileData(e.target.files[0]);
  };
  // var fileData = new FormData();

  // const upload = () => {
  //   // fileData.append("myFile", mediaFileData);
  //   // setMediaData(fileData);
  // };

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
          <input
            type="file"
            className="file"
            id="files"
            onChange={handleChange}
          ></input>
          <label for="files" className="upload">
            Browse Files
          </label>
        </div>
        {/* <button onClick={upload}>Upload</button> */}
      </Box>
    </div>
  );
}
