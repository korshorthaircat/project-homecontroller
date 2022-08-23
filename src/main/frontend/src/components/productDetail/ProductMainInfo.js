import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import "../../css/ProductDetail.css";
import { useState } from "react";
import SelectOption from "./SelectOption";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { FavoriteBorder } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const ProductMainInfo = () => {
  const [color, setColor] = React.useState("");
  const handleChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div className="productMainInfo">
      <p className="productName">VEVELSTAD 베벨스타드</p>
      <p className="productCategory">침대</p>
      <p className="productPrice">599,000원</p>
      <div id="Review">
        <p className="productGrade">★★★★★</p>
        <p className="productRevCount">(267)</p>
      </div>

      <p>
        <hr className="line1"></hr>
      </p>

      <FormControl
        fullWidth
        className="colorSelect"
        style={{ width: "500px", marginTop: "30px", marginLeft: "10px" }}
      >
        <InputLabel id="colorSelect">색상선택</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="colorSelect"
          value={color}
          label="Color"
          onChange={handleChange}
        >
          <MenuItem value={"white"}>White</MenuItem>
          <MenuItem value={"black"}>Black</MenuItem>
        </Select>
      </FormControl>
      <div className="sellHeartBtn">
        <button type="button" id="sellBtn">
          구매하기
        </button>

        <FavoriteBorder
          id="productWishBtn"
          type="button"
          sx={{
            color: "black",
            width: "40px",
            height: "40px",
            marginLeft: "40px",
            alignItems: "center",
          }}
        />
      </div>
    </div>
  );
};

export default ProductMainInfo;
