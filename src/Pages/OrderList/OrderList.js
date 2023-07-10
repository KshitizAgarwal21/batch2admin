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
import { useOutletContext } from "react-router-dom";

const orders = [
  {
    Customer: "David",
    Product: "BKLGO Hoodie",
    ID: "10",
    Status: "12344",
    Revenue: "Paid",
    Date: "22-03-2023",
  },
  {
    Customer: "David",
    Product: "BKLGO Hoodie",
    ID: "10",
    Status: "12344",
    Revenue: "Paid",
    Date: "22-03-2023",
  },
  {
    Customer: "David",
    Product: "BKLGO Hoodie",
    ID: "10",
    Status: "12344",
    Revenue: "Cancelled",
    Date: "22-03-2023",
  },
  {
    Customer: "David",
    Product: "BKLGO Hoodie",
    ID: "10",
    Status: "12344",
    Revenue: "Refunded",
    Date: "22-03-2023",
  },
];
export default function OrderList(props) {
  const [pillColor, setColor] = useState();
  const { searchItem } = useOutletContext();
  const [fullData, setData] = useState();
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const [ipp, setIpp] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
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

  const getProducts = async () => {
    // const result = await axios.get("https://fakestoreapi.com/products");

    setData(orders);
    setProducts(orders);
  };
  const orderSummary = (item) => {
    navigate("/ordersummary", { state: item });
  };
  useEffect(() => {
    if (searchItem == "") {
      setProducts(fullData);
    } else {
      setCurrentPage(1);

      setProducts(
        displayItems.filter((elem) => {
          for (let key in elem) {
            if (elem[key].toString().toLowerCase().includes(searchItem)) {
              return elem;
            }
          }
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
  }, []);
  return (
    <div>
      <h2 style={{ color: "#6e39cb" }}>Order List</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Customer</TableCell>
              <TableCell align="right">Product</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Revenue</TableCell>
              <TableCell align="right">Date</TableCell>
              {/* <TableCell align="right">Edit</TableCell> */}
            </TableRow>
          </TableHead>

          <TableBody>
            {displayItems?.map((row) => (
              <TableRow
                key={row.ID}
                sx={{
                  cursor: "pointer",
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
                onClick={() => orderSummary(row)}
              >
                {displayItems && (
                  <>
                    <TableCell component="th" scope="row">
                      <img src={row.image} className="product-img"></img>{" "}
                      {row.Customer}
                    </TableCell>
                    <TableCell align="right">{row.Product}</TableCell>
                    <TableCell align="right">{row.Status}</TableCell>
                    <TableCell align="right">
                      <span
                        className="round-dot"
                        style={{
                          background:
                            row.Revenue == "Paid"
                              ? "green"
                              : row.Revenue == "Refunded"
                              ? "blue"
                              : "red",
                        }}
                      ></span>
                      {row.Revenue}
                    </TableCell>
                    <TableCell align="right">{row.Date}</TableCell>
                    {/* <TableCell align="right">
                      <button
                        className="edit-btn"
                        onClick={() => navigateEdit(row)}
                      >
                        Edit
                      </button>
                    </TableCell>{" "} */}
                  </>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {displayItems.length == 0 && searchItem != null && <>No items found</>}
        {products.length == 0 && searchItem == null && (
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
          setCurrentPage(1);
        }}
      >
        <option value={2}>2</option>
        <option value={5}>5</option>
        <option value={10}>10</option>
      </select>
    </div>
  );
}
