import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import React, { useState } from 'react';
import "../../css/mypage.css";
import Link from "@mui/material/Link";
import UserUpdate from './UserUpdate';




function Mypage() {
  return (
    <div className='icons'>
    <Link  href="/userupdate">
     <img src="../images/mypage_icons/user_update.png" View style={{
      padding: 40,
      flex: 1,
      flexDirection: 'row'
    }} />
    </Link>

    <Link  href="/wishlist">
    <img src="../images/mypage_icons/wishlist.png" View style={{
      padding: 40,
      flex: 1,
      flexDirection: 'row' 
    }} />
    </Link>
    
    <img src="../images/mypage_icons/cart.png" View style={{
      padding: 40,
      flex: 1,
      flexDirection: 'row'
    }} />
    <Link  href="/orderlist">
    <img src="../images/mypage_icons/orderdetails.png" View style={{
      padding: 40,
      flex: 1,
      flexDirection: 'row'
    }} />
    </Link>
    <Link  href="/reviewlist">
    <img src="../images/mypage_icons/board.png" View style={{
      padding: 40,
      flex: 1,
      flexDirection: 'row'
    }} />
    </Link>
    <img src="../images/mypage_icons/cupon.png" View style={{
      padding: 40,
      flex: 1,
      flexDirection: 'row'
    }} /> 
    
    
    </div>
  );
};


export default Mypage;



