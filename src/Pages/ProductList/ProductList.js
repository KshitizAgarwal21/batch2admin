import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import { LinearProgress } from "@mui/material";
import axios from "axios";
import { Box } from "@mui/material";
export default function ProductList() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const [ipp, setIpp] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const indexOfLastItem = currentPage * ipp;
  const indexOfFirsttItem = indexOfLastItem - ipp;

  // const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  // arr.slice(indexOfFirsttItem, indexOfLastItem);
  const numofpages = Math.ceil(products.length / ipp);
  const displayItems = products.slice(indexOfFirsttItem, indexOfLastItem);
  //page -> 1
  // indexoflastitem = 1*5 =5
  //indexoffirstitem = 5-5 = 0

  //page ->2
  //indexoflastitem = 2*5 = 10
  //indexoffirstitem =10-5 = 5

  const navigateEdit = (item) => {
    navigate("/edit", { state: item });
  };

  const getProducts = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");

    setProducts(result.data);
  };
  const arr = Array.from({ length: numofpages }, (_, i) => i + 1);
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
            {displayItems?.map((row) => (
              <TableRow
                key={row.title}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                {displayItems && (
                  <>
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
                    </TableCell>{" "}
                  </>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {products.length == 0 && (
          <>
            <LinearProgress />
          </>
        )}
      </TableContainer>
      {numofpages > 5
        ? arr.slice(0, 3).map((elem) => {
            return (
              <>
                <span
                  onClick={() => {
                    setCurrentPage(elem);
                  }}
                >
                  {elem}&nbsp;
                </span>{" "}
              </>
            );
          })
        : arr.map((elem) => {
            return (
              <>
                <span
                  onClick={() => {
                    setCurrentPage(elem);
                  }}
                >
                  {elem}&nbsp;
                </span>{" "}
              </>
            );
          })}

      {numofpages > 5 ? <>...</> : ""}
      {numofpages > 5
        ? arr.slice(numofpages - 2, numofpages).map((elem) => {
            return (
              <>
                <span
                  onClick={() => {
                    setCurrentPage(elem);
                  }}
                >
                  {elem}&nbsp;
                </span>{" "}
              </>
            );
          })
        : arr.map((elem) => {
            return "";
          })}
      <p>Items per page:</p>
      <select
        onChange={(e) => {
          setIpp(e.target.value);
          console.log(e.target.value);
        }}
      >
        <option value={2}>2</option>
        <option value={5}>5</option>
        <option value={10}>10</option>
      </select>
    </div>
  );
}
