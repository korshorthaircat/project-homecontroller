import React, { useEffect } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import "../../css/Chip.css";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const PriceOptions = [
  "전체",
  "50,000원 이하",
  "50,000원 ~ 100,000원",
  "100,000원 ~ 200,000원",
  "200,000원 ~ 300,000원",
  "300,000원 ~ 400,000원",
  "400,000원 ~ 500,000원",
  "500,000원 ~ 600,000원",
  "600,000원 ~ 700,000원",
  "700,000원 ~ 800,000원",
  "800,000원 ~ 900.000원",
  "900,000원 ~ 1,000,000원",
  "1,000,000원 이상",
];

// const PriceOptions = [
//   {
//     // 전체: [0, 1000000],
//     "50,000원 이하": [0, 50000],
//     "50,000원 ~ 100,000원": [50000, 1000000],
//     "100,000원 ~ 200,000원": [100000, 2000000],
//     "200,000원 ~ 300,000원": [2000000, 3000000],
//     "300,000원 ~ 400,000원": [3000000, 4000000],
//     "400,000원 ~ 500,000원": [4000000, 5000000],
//     "500,000원 ~ 600,000원": [5000000, 6000000],
//     "600,000원 ~ 700,000원": [6000000, 7000000],
//     "700,000원 ~ 800,000원": [7000000, 8000000],
//     "800,000원 ~ 900.000원": [8000000, 9000000],
//     "900,000원 ~ 1,000,000원": [9000000, 10000000],
//     "1,000,000원 이상": [10000000, 100000000],
//   },
// ];

export default function MultipleSelectCheckmarks({
  onLowestPriceHandler,
  onHighestPriceHandler,
}) {
  const [priceRange, setPriceRange] = React.useState("");

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPriceRange(value);
  };

  useEffect(() => {
    console.log(priceRange);
    if (priceRange === "전체") {
      console.log(priceRange);
      onLowestPriceHandler(0);
      onHighestPriceHandler(10000000);
    } else if (priceRange === "50,000원 이하") {
      console.log(priceRange);
      onLowestPriceHandler(0);
      onHighestPriceHandler(50000);
    } else if (priceRange === "50,000원 ~ 100,000원") {
      console.log(priceRange);
      onLowestPriceHandler(50000);
      onHighestPriceHandler(100000);
    } else if (priceRange === "100,000원 ~ 200,000원") {
      onLowestPriceHandler(100000);
      onHighestPriceHandler(200000);
    } else if (priceRange === "200,000원 ~ 300,000원") {
      onLowestPriceHandler(200000);
      onHighestPriceHandler(300000);
    } else if (priceRange === "300,000원 ~ 400,000원") {
      onLowestPriceHandler(300000);
      onHighestPriceHandler(400000);
    } else if (priceRange === "400,000원 ~ 500,000원") {
      onLowestPriceHandler(400000);
      onHighestPriceHandler(500000);
    } else if (priceRange === "500,000원 ~ 600,000원") {
      onLowestPriceHandler(500000);
      onHighestPriceHandler(600000);
    } else if (priceRange === "600,000원 ~ 700,000원") {
      onLowestPriceHandler(600000);
      onHighestPriceHandler(700000);
    } else if (priceRange === "700,000원 ~ 800,000원") {
      onLowestPriceHandler(700000);
      onHighestPriceHandler(800000);
    } else if (priceRange === "800,000원 ~ 900,000원") {
      onLowestPriceHandler(800000);
      onHighestPriceHandler(900000);
    } else if (priceRange === "900,000원 ~ 1,000,000원") {
      onLowestPriceHandler(900000);
      onHighestPriceHandler(1000000);
    } else if (priceRange === "1,000,000원 이상") {
      onLowestPriceHandler(1000000);
      onHighestPriceHandler(10000000);
    }
  }, [priceRange]);
  return (
    <div>
      <FormControl sx={{ m: 1, width: 200, borderRadius: "50px" }}>
        <InputLabel id="demo-multiple-checkbox-label">가격</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          // multiple
          value={priceRange}
          onChange={handleChange}
          input={<OutlinedInput sx={{ borderRadius: "100px" }} label="Tag" />}
          renderValue={(selected) => selected}
          MenuProps={MenuProps}
        >
          {PriceOptions.map((range) => (
            <MenuItem key={range} value={range}>
              <Checkbox checked={priceRange.indexOf(range) > -1} />
              <ListItemText primary={range} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
