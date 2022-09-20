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

const colorOptions = [
  "빨간색",
  "주황색",
  "노란색",
  "초록색",
  "파란색",
  "보라색",
  "흰색",
  "검은색",
  "베이지",
  "멀티컬러",
  "분홍색",
  "회색",
  "갈색",
];

// const colorOptions = [
//   { commonCode: "AO1", commonCodeName: "빨간색" },
//   { commonCode: "AO2", commonCodeName: "주황색" },
//   { commonCode: "AO3", commonCodeName: "노란색" },
//   { commonCode: "AO4", commonCodeName: "초록색" },
//   { commonCode: "AO5", commonCodeName: "파란색" },
//   { commonCode: "AO6", commonCodeName: "보라색" },
//   { commonCode: "AO7", commonCodeName: "흰색" },
//   { commonCode: "AO8", commonCodeName: "검은색" },
//   { commonCode: "AO9", commonCodeName: "베이지" },
//   { commonCode: "A10", commonCodeName: "멀티컬러" },
//   { commonCode: "A11", commonCodeName: "분홍색" },
//   { commonCode: "A12", commonCodeName: "회색" },
//   { commonCode: "A13", commonCodeName: "갈색" },
// ];

export default function MultipleSelectCheckmarks({ onCommonCodeHandler }) {
  const [colorName, setColorName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setColorName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    // onCommonCodeHandler(colorName[0]);
    // console.log(colorName[0]);
  };

  useEffect(() => {
    onCommonCodeHandler(colorName[0]);
    console.log(colorName[0]);
  }, [colorName]);

  return (
    <div>
      <FormControl sx={{ m: 1, width: 200, borderRadius: "50px" }}>
        <InputLabel id="demo-multiple-checkbox-label">색상</InputLabel>
        <Select
          // labelId="demo-multiple-checkbox-label"
          // id="demo-multiple-checkbox"
          // multiple
          value={colorName}
          onChange={handleChange}
          input={<OutlinedInput sx={{ borderRadius: "100px" }} label="Tag" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {colorOptions.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={colorName.indexOf(name) > -1} />
              <ListItemText primary={name} />
              <div
                style={{
                  borderRadius: "50%",
                  background: "green",
                  width: "30px",
                  height: "30px",
                }}
              />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
