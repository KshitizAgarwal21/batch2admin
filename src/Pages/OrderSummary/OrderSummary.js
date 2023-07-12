import { Box } from "@mui/material";
import React from "react";
import "./ordersummary.css";
import { useLocation } from "react-router-dom";
import microwave from "../../Assets/microwave.jpeg";
import card from "../../Assets/card.png";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function OrderSummary() {
  const data = useLocation();
  const { state } = data;
  const downloadInvoice = () => {
    document.getElementById("myinvoice").style.display = "block";
    html2canvas(document.getElementById("myinvoice"), {
      scale: 1,
    }).then((canvas) => {
      var imgData = canvas.toDataURL("image/png");
      var doc = new jsPDF();
      doc.addImage(imgData, "PNG", 10, 10);
      doc.save("invoice.pdf");
      document.getElementById("myinvoice").style.display = "none";
    });
    // html2canvas(document.getElementById("summary"), {
    //   // width: 1440,
    //   // height: 1200,
    //   scale: 1,
    // }).then((canvas) => {
    //   var imgData = canvas.toDataURL("image/png");
    //   var doc = new jsPDF();
    //   doc.addImage(imgData, "PNG", 10, 10);
    //   doc.save("summary.pdf");
    // });
  };

  return (
    <div>
      <h2 style={{ color: "#6e39cb" }}>Order Summary</h2>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          background: "#fff",
          borderRadius: "10px",
          boxSizing: "border-box",
          padding: "15px",
        }}
      >
        <div className="section1">
          <Box sx={{ width: "80%", height: "auto" }}>
            <h3 style={{ marginTop: "0" }}>Order Details</h3>
            <p className="section1-p">
              Order No: <span>{state.Status}</span>
            </p>
            <p className="section1-p">
              From: <span>Hersheys</span>
            </p>
            <p className="section1-p">
              Code: <span>XAe</span>
            </p>
          </Box>
          <button className="invoice" onClick={downloadInvoice}>
            Invoice
          </button>
        </div>
        <div className="section2">
          <Box sx={{ width: "40%", height: "auto" }}>
            <h3 style={{ marginTop: "0" }}>Product Detail</h3>
            <Box
              sx={{
                border: "1px solid #e8e8e8",
                width: "100%",
                height: "200px",
                borderRadius: "10px",
                display: "flex",
                boxSizing: "border-box",
                padding: "20px",
                justifyContent: "space-between",
              }}
            >
              <img src={microwave}></img>
              <div className="desc">
                {data.state.Product}
                <p>$200</p>
                <p>Order was delivered 2 days ago</p>
                <p>Delivered</p>
              </div>
            </Box>
          </Box>
          <Box sx={{ width: "50%", height: "auto" }}>
            <h3 style={{ marginTop: "0" }}>Billing Information</h3>
            <Box
              id="invoice"
              sx={{
                border: "1px solid #e8e8e8",
                width: "100%",
                height: "200px",
                borderRadius: "10px",
                padding: "20px",
                boxSizing: "border-box",
              }}
            >
              {state.Customer}
              <p>
                Company Name: <span>Viking Burito</span>
              </p>
              <p>
                EMAIL Address: <span>OLIAM@dvfh.com</span>
              </p>
              <p>
                VAT number: <span>FADR3648</span>
              </p>
            </Box>
          </Box>
        </div>
        <div className="section3">
          <Box sx={{ width: "40%", height: "auto" }}>
            <h3 style={{ marginTop: "0" }}>Payment Detail</h3>
            <Box
              sx={{
                border: "1px solid #e8e8e8",
                width: "100%",
                height: "200px",
                borderRadius: "10px",
                padding: "20px",
                boxSizing: "border-box",
              }}
            >
              Master Card
              <p>Master 1234****4758</p>
              <p>Expires 22/23</p>
              <p>
                <span style={{ paddingRight: "250px" }}>Aiden Max</span>{" "}
                <img src={card}></img>
              </p>
            </Box>
          </Box>
          <Box sx={{ width: "50%", height: "auto" }}>
            <h3 style={{ marginTop: "0" }}>Order Summary</h3>
            <Box
              id="summary"
              sx={{
                border: "1px solid #e8e8e8",
                width: "100%",
                height: "200px",
                borderRadius: "10px",
                padding: "20px",
                boxSizing: "border-box",
                display: "flex",
              }}
            >
              <div className="summary">
                <p>
                  Product Price: <span>$200</span>
                </p>
                <p>
                  Product Price: <span>$200</span>
                </p>
                <p>
                  Product Price: <span>$200</span>
                </p>
                <p>
                  Total: <span>$230</span>
                </p>
              </div>
              <div className="rating">
                <p>Did you like the product? Leave us a review here</p>
                <p>⭐️⭐️⭐️⭐️⭐️</p>
                <p style={{ color: "#6E39CB" }}>Submit</p>
              </div>
            </Box>
          </Box>
        </div>
      </Box>

      <div className="myinvoice" id="myinvoice">
        Data to be printed
      </div>
    </div>
  );
}
