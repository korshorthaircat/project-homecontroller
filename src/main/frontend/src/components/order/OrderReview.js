import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";

const OrderReview = (cartInfo) => {
  return (
    <div>
      <Typography>{cartInfo.productName}</Typography>
      <Typography>{cartInfo.productDetail}</Typography>
      <Typography>{cartInfo.productPrice}</Typography>
    </div>
  );
};

export default OrderReview;
