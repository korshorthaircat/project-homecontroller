import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
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

const names = [
  {
    value: "A01",
    label: "빨간색",
  },
  {
    value: "A02",
    label: "주황색",
  },
  {
    value: "A03",
    label: "노란색",
  },
  {
    value: "A04",
    label: "초록색",
  },
  {
    value: "A05",
    label: "파란색",
  },
  {
    value: "A06",
    label: "보라색",
  },
  {
    value: "A07",
    label: "흰색",
  },
  {
    value: "A08",
    label: "검은색",
  },
  {
    value: "A09",
    label: "베이지",
  },
  {
    value: "A10",
    label: "멀티컬러",
  },
  {
    value: "A11",
    label: "분홍색",
  },
  {
    value: "A12",
    label: "회색",
  },
  {
    value: "A13",
    label: "갈색",
  },
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectChip() {
  const theme = useTheme();
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
      <FormControl sx={{ m: 1, width: 200, borderRadius: "100%" }}>
        <InputLabel sx={{ borderRadius: "50%" }} id="demo-multiple-chip-label">
          색상
        </InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={personName}
          sx={{ borderRadius: "30px" }}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 0.5,
              }}
            >
              {selected.map((value) => (
                <Chip sx={{ borderRadius: "30px" }} key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
