import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import microwave from "../../Assets/microwave.jpeg";
import axios from "axios";
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const navigateEdit = (item) => {
    navigate("/edit", { state: item });
  };
  const getProducts = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");

    setProducts(result.data);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <h2 style={{ color: "#6e39cb" }}>Product List</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="right">Category</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">SKU</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products?.map((row) => (
              <TableRow
                key={row.title}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <img src={row.image} className="product-img"></img>{" "}
                  {row.title}
                </TableCell>
                <TableCell align="right">{row.category}</TableCell>
                <TableCell align="right">{row.rating.count}</TableCell>
                <TableCell align="right">{row.id}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">
                  <button
                    className="edit-btn"
                    onClick={() => navigateEdit(row)}
                  >
                    Edit
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
