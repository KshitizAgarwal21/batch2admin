import { Box } from "@mui/material";
import React from "react";
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
const data1 = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function Home() {
  var date = new Date();
  date = date.toString().substring(0, 15);
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [value, setValue] = React.useState(0);

  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };
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
              <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
          <br></br>
          <AreaChartComp data={data1} />
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
          <BarAreaChartComp data={data2} />
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
