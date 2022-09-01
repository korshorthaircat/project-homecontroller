import React, { useState, useCallback, useEffect } from "react";
import { Typography } from "@mui/material";
import { Browser, Routes, Route, BrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./components/user/Login";
import Header from "./components/Header";
import Join from "./components/user/Join";
import Checkout from "./components/order/Checkout";
import Dashboard from "./components/admin/Dashboard";
import Mypage from "./components/mypage/Mypage";
import UserUpdate from "./components/mypage/UserUpdate";
import ImageThumb from "./components/productDetail/ImageThumb";
import ProductMainInfo from "./components/productDetail/ProductMainInfo";
import InteriorShowroom from "./components/showroom/InteriorShowroom";
import Footer from "./components/Footer";
import SplitButton from "./components/list/SplitButton";
import KakaoPayReady from "./components/order/KakaoPayReady";
import KakaoPayResult from "./components/order/KakaoPayResult";
import UserManage from "./components/admin/UserManage";
import OrderManage from "./components/admin/OrderManage";
import ProductAdd from "./components/admin/ProductAdd";
import ProductList from "./components/admin/ProductList";
import Cart from "./components/cart/Cart";
import Cart2 from "./components/cart/Cart2";
import AdminOrderDetail from "./components/admin/AdminOrderDetail";
import ProductUpdate from "./components/admin/ProductUpdate";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright"}
      <i className="fa-brands fa-github" style={{ fontSize: "1.7rem" }}></i>
      &nbsp; bitcamp &nbsp;
      {new Date().getFullYear()}
    </Typography>
  );
}

const AppRouter = () => {
  // 경로에 따라 실행되는 컴포넌트가 다르므로, 그 정보를 갖고있는 AppRouter를 가장 먼저 렌더링해야 한다.(Index.js에서)
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/join" element={<Join />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/userupdate" element={<UserUpdate />} />
          <Route path="/order" element={<Checkout />} />
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin1" element={<ProductAdd />} />
          <Route path="/admin2" element={<ProductList />} />
          <Route path="/admin3" element={<ProductUpdate />} />
          <Route path="/UserManage" element={<UserManage />} />
          <Route path="/OrderManage" element={<OrderManage />} />
          <Route path="/AdminOrderDetail" element={<AdminOrderDetail />} />
          <Route path="/productDetail" element={<ImageThumb />} />
          <Route path="/showroom" element={<InteriorShowroom />} />
          <Route path="/list" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/kakaopayReady" element={<KakaoPayReady />} />
          <Route path="/kakaopayResult" element={<KakaoPayResult />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default AppRouter;
