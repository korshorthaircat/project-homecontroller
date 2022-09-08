import React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import "../../css/Chip.css";
import { autocompleteClasses } from "@mui/material";

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

export default function MultipleSelectCheckmarks() {
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <div>
      <FormControl sx={{ m: 1, width: 200, borderRadius: "50px" }}>
        <InputLabel id="demo-multiple-checkbox-label">색상</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput sx={{ borderRadius: "100px" }} label="Tag" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {colorOptions.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
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
