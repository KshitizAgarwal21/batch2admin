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
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import card from "../../Assets/card.png";

import { useOutletContext } from "react-router-dom";
import { ProductsList } from "../../redux/ProductList/action";

export default function ProductList(props) {
  const { searchItem } = useOutletContext();
  const [fullData, setData] = useState([]);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const [ipp, setIpp] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * ipp;
  const indexOfFirsttItem = indexOfLastItem - ipp;

  const numofpages = Math.ceil(products.length / ipp);
  var displayItems = products.slice(indexOfFirsttItem, indexOfLastItem);

  //page -> 1
  // indexoflastitem = 1*5 =5
  //indexoffirstitem = 5-5 = 0

  //page ->2
  //indexoflastitem = 2*5 = 10
  //indexoffirstitem =10-5 = 5

  const navigateEdit = (item) => {
    navigate("/edit", { state: item });
  };
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.ProductsList.products);
  const loading = useSelector((state) => state.ProductsList.loading);
  const getProducts = async () => {
    const result = await axios.post(
      "http://localhost:8080/products/getproductlist"
    );
    setData(result.data);
    setProducts(result.data);
  };

  const handleItemsPerPageChange = (e) => {
    setIpp(e.target.value);
    setCurrentPage(1);
  };
  useEffect(() => {
    if (searchItem == "") {
      setProducts(fullData);
    } else {
      console.log(searchItem);
      setCurrentPage(1);

      const loopOverObj = (obj, initial) => {
        for (let key in obj) {
          if (typeof obj[key] == "object") {
            console.log("comes here");

            loopOverObj(obj[key], initial);
          } else {
            if (obj[key].toString().toLowerCase().includes(searchItem)) {
              console.log(initial);
              return initial;
            }
          }
        }
      };
      setProducts(
        fullData.filter((elem) => {
          for (let key in elem) {
            if (typeof elem[key] == "object") {
              console.log("comes here");
              for (let i in elem[key]) {
                if (
                  elem[key][i].toString().toLowerCase().includes(searchItem)
                ) {
                  return elem;
                }
              }
            } else {
              if (elem[key].toString().toLowerCase().includes(searchItem)) {
                return elem;
              }
            }
          }

          // return loopOverObj(elem, elem);
        })
      );

      // setProducts(
      //   displayItems.filter((elem) => {
      //     return elem.title.toString().toLowerCase().includes(searchItem);
      //   })
      // );
    }
  }, [searchItem]);
  const arr = Array.from({ length: numofpages }, (_, i) => i + 1);
  useEffect(() => {
    getProducts();
    // dispatch(ProductsList());
  }, []);
  // useEffect(() => {}, [productData]);

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
            {!loading &&
              displayItems?.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  {!loading && displayItems && (
                    <>
                      <TableCell component="th" scope="row">
                        <img
                          src={`../${row.image}`}
                          className="product-img"
                        ></img>
                        {row.Name}
                      </TableCell>
                      <TableCell align="right">{row.Category}</TableCell>
                      <TableCell align="right">
                        {row.Properties.Weight}
                      </TableCell>
                      <TableCell align="right">{row.id}</TableCell>
                      <TableCell align="right">{row.Price}</TableCell>
                      <TableCell align="right">
                        <button
                          className="edit-btn"
                          onClick={() => navigateEdit(row)}
                        >
                          Edit
                        </button>
                      </TableCell>
                    </>
                  )}
                </TableRow>
              ))}
          </TableBody>
        </Table>
        {displayItems.length == 0 && searchItem != null && <>No items found</>}
        {loading && searchItem == null && (
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
                  key={elem}
                  onClick={() => {
                    setCurrentPage(elem);
                  }}
                >
                  {elem}&nbsp;
                </span>
              </>
            );
          })
        : arr.map((elem) => {
            return (
              <>
                <span
                  key={elem}
                  onClick={() => {
                    setCurrentPage(elem);
                  }}
                >
                  {elem}&nbsp;
                </span>
              </>
            );
          })}

      {numofpages > 5 ? <>...</> : ""}
      {numofpages > 5
        ? arr.slice(numofpages - 2, numofpages).map((elem) => {
            return (
              <>
                <span
                  key={elem}
                  onClick={() => {
                    setCurrentPage(elem);
                  }}
                >
                  {elem}&nbsp;
                </span>
              </>
            );
          })
        : arr.map((elem) => {
            return <span key={elem}></span>;
          })}
      <p>Items per page:</p>
      <select onChange={handleItemsPerPageChange} value={ipp}>
        <option value={2}>2</option>
        <option value={5}>5</option>
        <option value={10}>10</option>
      </select>
    </div>
  );
}
