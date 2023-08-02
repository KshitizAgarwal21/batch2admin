import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import AreaChartComp from "../../Components/AreaChart/AreaChartComp";
import BarAreaChartComp from "../../Components/BarAreaChart/BarAreaChartComp";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./home.css";
import BoltIcon from "@mui/icons-material/Bolt";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import axios from "axios";
const data2 = [
  {
    name: "Page A",
    uv: 590,
    pv: 800,
    amt: 1400,
    cnt: 490,
  },
  {
    name: "Page B",
    uv: 868,
    pv: 967,
    amt: 1506,
    cnt: 590,
  },
  {
    name: "Page C",
    uv: 1397,
    pv: 1098,
    amt: 989,
    cnt: 350,
  },
  {
    name: "Page D",
    uv: 1480,
    pv: 1200,
    amt: 1228,
    cnt: 480,
  },
  {
    name: "Page E",
    uv: 1520,
    pv: 1108,
    amt: 1100,
    cnt: 460,
  },
  {
    name: "Page F",
    uv: 1400,
    pv: 680,
    amt: 1700,
    cnt: 380,
  },
];

export default function Home() {
  var date = new Date();
  date = date.toString().substring(0, 15);
  const [units, setUnits] = React.useState();
  const [chart1Data, setChart1Data] = useState([]);
  const [chart1maindata, setChart1MainData] = useState([]);
  const [chart2Data, setChart2Data] = useState([]);
  const [chart2maindata, setChart2MainData] = useState([]);
  const handleChange = (event) => {
    setUnits(event.target.value);
  };
  const [value, setValue] = React.useState("Electronics");

  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };

  const getChart1Data = async () => {
    const res = await axios.get("http://localhost:8080/sales/chart1Data");

    console.log(res.data);
    var arr = [];
    res.data.forEach((elem) => {
      arr.push({
        category: elem.category,
        maxPrice: elem.sales.maxPrice,
        minPrice: elem.sales.minPrice,
        unitsSold: elem.sales.unitsSold,
      });
    });

    setChart1Data(arr);
    setChart1MainData(arr);
  };

  const getChart2Data = async () => {
    const res = await axios.post("http://localhost:8080/sales//chart2Data", {
      category: value,
    });
    setChart2Data(res.data);
    setChart2MainData(res.data);
  };
  useEffect(() => {
    console.log(units);
    if (units == "All") {
      setChart1Data(chart1maindata);
    } else if (units == 1) {
      setChart1Data(chart1maindata.filter((elem) => elem.unitsSold >= 500));
    } else {
      setChart1Data(chart1maindata.filter((elem) => elem.unitsSold <= 500));
    }
  }, [units]);
  useEffect(() => {
    getChart1Data();
    getChart2Data();
  }, []);

  return (
    <div>
      <Box
        sx={{
          width: "100%",
          height: "200px",
          backgroundColor: "#fff",
          borderRadius: "10px",
          display: "flex",
          padding: "25px",
          boxSizing: "border-box",
        }}
      >
        <div className="summary-div">
          Total Sales
          <p className="value">₹12345</p>
          <p className="date">{date}</p>
        </div>
        <div className="summary-div">
          Total Returns
          <p className="value">₹345</p>
          <p className="date">{date}</p>
        </div>
        <div className="summary-div">
          No. of orders
          <p className="value">100</p>
          <p className="date">{date}</p>
        </div>
        <div className="summary-div" style={{ border: "none" }}>
          No. of returns
          <p className="value">12</p>
          <p className="date">{date}</p>
        </div>
      </Box>
      <div
        style={{
          display: "flex",
          marginTop: "20px",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            width: "68%",
            height: "400px",
            backgroundColor: "#fff",
            borderRadius: "10px",

            padding: "25px",
            boxSizing: "border-box",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>Sales this Week</p>

            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-helper-label">
                Units Sold
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={units}
                label="Units Sold"
                onChange={handleChange}
              >
                <MenuItem value="All">
                  <em>All</em>
                </MenuItem>
                <MenuItem value={1}>{">"}500</MenuItem>
                <MenuItem value={0}>{"<"}500</MenuItem>
              </Select>
            </FormControl>
          </div>
          <br></br>
          <AreaChartComp data={chart1Data} />
        </Box>
        <Box
          sx={{
            width: "28%",
            height: "400px",
            backgroundColor: "#fff",
            borderRadius: "10px",
            padding: "25px",
            boxSizing: "border-box",
          }}
        >
          <p>Sales Category</p>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <div>
              <BoltIcon />
              <span style={{ verticalAlign: "super" }}>Electronics</span>
            </div>
            <span>500</span>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <div>
              <BoltIcon />
              <span style={{ verticalAlign: "super" }}>Kitchen Appliances</span>
            </div>
            <span>500</span>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <div>
              <BoltIcon />
              <span style={{ verticalAlign: "super" }}>Fashion</span>
            </div>
            <span>500</span>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <div>
              <BoltIcon />
              <span style={{ verticalAlign: "super" }}>Gardening</span>
            </div>
            <span>500</span>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <div>
              <BoltIcon />
              <span style={{ verticalAlign: "super" }}>Accesories</span>
            </div>
            <span>500</span>
          </Box>
        </Box>
      </div>
      <div
        style={{
          display: "flex",
          marginTop: "20px",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            width: "68%",
            height: "400px",
            backgroundColor: "#fff",
            borderRadius: "10px",

            padding: "25px",
            boxSizing: "border-box",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>Sales this Week</p>
            <Tabs value={value} onChange={handleChangeTab} centered>
              <Tab label="Item One" />
              <Tab label="Item Two" />
              <Tab label="Item Three" />
            </Tabs>
          </div>
          <br></br>
          <BarAreaChartComp data={chart2Data} />
        </Box>
        <Box
          sx={{
            width: "28%",
            height: "400px",
            backgroundColor: "#fff",
            borderRadius: "10px",

            padding: "25px",
            boxSizing: "border-box",
          }}
        >
          <p>Trending Deals</p>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <div>
              <BoltIcon />
              <span style={{ verticalAlign: "super" }}>Electronics</span>
            </div>
            <span>50% off</span>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <div>
              <BoltIcon />
              <span style={{ verticalAlign: "super" }}>Electronics</span>
            </div>
            <span>50% off</span>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <div>
              <BoltIcon />
              <span style={{ verticalAlign: "super" }}>Electronics</span>
            </div>
            <span>50% off</span>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <div>
              <BoltIcon />
              <span style={{ verticalAlign: "super" }}>Electronics</span>
            </div>
            <span>50% off</span>
          </Box>
        </Box>
      </div>
    </div>
  );
}
