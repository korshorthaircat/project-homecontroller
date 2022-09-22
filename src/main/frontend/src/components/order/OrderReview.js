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

const OrderReview = ({ cart }) => {
  return (
    <List sx={{ width: "100%", Width: 500, bgcolor: "background.paper" }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="제품 이미지" src="/images/light1.png" />
        </ListItemAvatar>
        <ListItemText
          primary={cart.productOption.product.productName}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                옵션: {cart.productOption.common.commonCodeName},{" "}
                {cart.productOption.product.productSize} <br />
                수량: {cart.productCount}
              </Typography>
              <br /> ₩{" "}
              {(cart.productOption.product.productPrice + "").replace(
                /\B(?=(\d{3})+(?!\d))/g,
                ","
              )}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
};

export default OrderReview;
