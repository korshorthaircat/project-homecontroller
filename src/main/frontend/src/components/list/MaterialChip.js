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

const materialOptions = [
  "메탈",
  "플라스틱",
  "원목",
  "가공목(mdf외)",
  "패브릭",
  "라탄",
  "알루미늄",
  "스테인리스스틸",
  "대리석",
  "유리",
  "벨벳",
  "가죽",
];

export default function MultipleSelectCheckmarks({ onProductMaterialHandler }) {
  const [materialName, setMaterialName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setMaterialName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  useEffect(() => {
    console.log(materialName[0]);
    onProductMaterialHandler(materialName[0]);
  }, [materialName]);

  return (
    <div>
      <FormControl sx={{ m: 1, width: 200, borderRadius: "50px" }}>
        <InputLabel id="demo-multiple-checkbox-label">소재</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          // multiple
          value={materialName}
          onChange={handleChange}
          input={<OutlinedInput sx={{ borderRadius: "100px" }} label="Tag" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {materialOptions.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={materialName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
