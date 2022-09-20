import React from "react";
import "../../css/mainInteriorImage.css";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const HoverIcon = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [showroomProductItem, setShowroomProductItem] = useState([]);

  const getShowroomProductItem = () => {
    // let url = `http://localhost:8080/api/product/getShowroomProductItem`;
    // let response = await fetch(url);
    // let data = await response.json();
    // console.log(data);
    // setShowroomProductItem(data.showroomProductItem);

    axios({
      method: "get",
      url: "http://localhost:8080/api/product/getShowroomProductItem",
      params: { productNo: 64 },
    }).then((response) => {
      console.log(response.data.data);
    });
  };

  useEffect(() => {
    getShowroomProductItem();
  }, []);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div className="hoverIconActive">
      <Typography
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        <div className="hoverIcon2">
          <div className="smallHoverIcon2"></div>
        </div>

        {/* <BsRecordCircle className="hoverIcon" /> */}
      </Typography>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: "none",
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <div className="showroomProductContent" responsive="responsive">
          {showroomProductItem.map((a) => (
            <Typography item={a} sx={{ p: 1 }}>
              <div>
                {a.productName} <br />
                {a.productCategory} , {a.productSize} <br />₩ {a.productPrice}{" "}
                <br />
              </div>
            </Typography>
          ))}
        </div>
      </Popover>
    </div>
  );
};

export default HoverIcon;
