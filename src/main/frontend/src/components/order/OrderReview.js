import React, { useEffect, useReducer, useState } from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import ButtonBase from "@mui/material/ButtonBase";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import "../../css/cart.css";

const OrderReview = ({ cart, cartImage }) => {
  // window.onload = function() {
  //   if(!cartImage.productImageName) {
  //     window.location.reload();
  //   }
  // }
  return (
    <div>
      <img
        className="orderImg"
        alt="제품 이미지"
        src={`http://localhost:8080/upload/${
          cartImage ? cartImage.productImageName : null
        }`}
      />
    </div>
  );
};

export default OrderReview;
