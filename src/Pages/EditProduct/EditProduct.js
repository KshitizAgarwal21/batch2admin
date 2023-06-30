import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
export default function EditProduct() {
  const data = useLocation();
  useEffect(() => {
    console.log(data.state);
  }, []);
  return <div>EditProduct</div>;
}
