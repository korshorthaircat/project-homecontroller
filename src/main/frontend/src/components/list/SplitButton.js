import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import "../../css/SplitButton.css";

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

const priceOptions = [
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

export default function SplitButton() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClick = () => {
    console.info(`You clicked ${colorOptions[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <React.Fragment>
      <ButtonGroup
        variant="contained"
        ref={anchorRef}
        aria-label="split button"
        sx={{ borderRadius: 12.5, color: "#F0F0F0", borderColor: "#F0F0F0" }}
      >
        <Button
          sx={{
            borderRadius: 12.5,
            backgroundColor: "#F0F0F0",
            color: "black",
            borderColor: "#F0F0F0",
          }}
          onClick={handleClick}
        >
          {colorOptions[selectedIndex]}
        </Button>
        <Button
          size="small"
          aria-controls={open ? "split-button-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          sx={{
            borderRadius: 12.5,
            backgroundColor: "#F0F0F0",
            color: "black",
          }}
          onClick={handleToggle}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper
        sx={{
          zIndex: 1,
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {colorOptions.map((option, index) => (
                    <MenuItem
                      key={option}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  );
}
