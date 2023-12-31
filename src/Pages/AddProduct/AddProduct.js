import React, { useState } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProductInfoForm from "./ProductInfoForm";
import ProductPricing from "./ProductPricing";
import ProductMedia from "./ProductMedia";
import axios from "axios";
import "../../utils/interceptor";
const steps = ["Product Info", "Media", "Pricing"];
export default function AddProduct() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [productData, setProductData] = useState({}); //all the text/numerical data of the product
  const [mediaData, setMediaData] = useState(); // all the media data of the product
  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = async () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
    if (activeStep == 2) {
      try {
        const result = await axios.post(
          "http://localhost:8080/products/addproductmedia",
          mediaData
        );
        if (result.status == 200) {
          console.log(result.data);
          productData.imageUrl = result.data.path;
          try {
            const result = await axios.post(
              "http://localhost:8080/products/addproductdata",
              productData
            );
            if (result.status == 200) {
              console.log(result.data);
              // call another component // success component
            }
          } catch (e) {
            if (e.response.status == 500) {
              alert(e.response.data.msg);
            }
          }
        }
      } catch (e) {
        if (e.response.status == 500) {
          alert(e.response.data.msg);
        }
      }
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setProductData({});
    setActiveStep(0);
  };
  return (
    <div>
      <h2 style={{ color: "#6e39cb" }}>New Product</h2>
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};

            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              {Object.keys(productData).map((elem, index) => {
                return (
                  <>
                    {elem}:{productData[elem]}
                  </>
                );
              })}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              {activeStep == 0 && (
                <>
                  <ProductInfoForm
                    productData={productData}
                    setProductData={setProductData}
                  />
                </>
              )}
              {activeStep == 1 && (
                <>
                  <ProductMedia
                    productData={productData}
                    setProductData={setProductData}
                    mediaData={mediaData}
                    setMediaData={setMediaData}
                  />
                </>
              )}
              {activeStep == 2 && (
                <>
                  <ProductPricing
                    productData={productData}
                    setProductData={setProductData}
                  />
                </>
              )}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />

              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>
    </div>
  );
}
