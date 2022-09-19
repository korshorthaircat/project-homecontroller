import React from "react";
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

// const PriceOptions = [{
//   "전체": [0, 1000000],
//   "50,000원 이하": [0, 500000],
//   "50,000원 ~ 100,000원": [50000, 100000],
//   "100,000원 ~ 200,000원": ,
//   "200,000원 ~ 300,000원",
//   "300,000원 ~ 400,000원",
//   "400,000원 ~ 500,000원",
//   "500,000원 ~ 600,000원",
//   "600,000원 ~ 700,000원",
//   "700,000원 ~ 800,000원",
//   "800,000원 ~ 900.000원",
//   "900,000원 ~ 1,000,000원",
//   "1,000,000원 이상",
//   }
// ];

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
export default function MultipleSelectCheckmarks() {
  const [priceRange, setPriceRange] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPriceRange(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
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
          renderValue={(selected) => selected.join(", ")}
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
