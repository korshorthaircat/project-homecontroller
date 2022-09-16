import React, { useState, useCallback, useEffect } from "react";
import { Typography } from "@mui/material";
import { Browser, Routes, Route, BrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./components/user/Login";
import Header from "./components/Header";
import Join from "./components/user/Join";
import Order from "./components/order/Order";
import Dashboard from "./components/admin/Dashboard";
import Mypage from "./components/mypage/Mypage";
import UserUpdate from "./components/mypage/UserUpdate";
import ReviewList from "./components/mypage/ReviewList";
import WishList from "./components/mypage/WishList";
import OrderList from "./components/mypage/OrderList";
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
import MyOrderDetail from "./components/mypage/MyOrderDetail"
import MyOrderstatus from "./components/mypage/MyOrderstatus"
import Cart from "./components/cart/Cart";
import AdminOrderDetail from "./components/admin/AdminOrderDetail";
import ProductUpdate from "./components/admin/ProductUpdate";
import ProductCategoryList from "./components/list/ProductCategoryList";
import FixedBar from "./components/list/FixedBar";
import ShowroomAdd from "./components/admin/ShowroomAdd";
import Board from "./Board";

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
          <Route path="/reviewlist" element={<ReviewList />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/orderlist" element={<OrderList />} />
          <Route path="/MyOrderDetail" element={<MyOrderDetail />} />
          <Route path="/MyOrderstatus" element={<MyOrderstatus />} />
          <Route path="/order" element={<Order />} />
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin1" element={<ProductAdd />} />
          <Route path="/admin2" element={<ProductList />} />
          <Route path="/admin3" element={<ProductUpdate />} />
          <Route path="/admin3/{productNo}" element={<ProductUpdate />} />
          <Route path="/UserManage" element={<UserManage />} />
          <Route path="/OrderManage" element={<OrderManage />} />
          <Route path="/AdminOrderDetail" element={<AdminOrderDetail />} />
          <Route path="/productDetail" element={<ImageThumb />} />
          <Route path="/showroom" element={<InteriorShowroom />} />
          <Route path="/list" element={<ProductCategoryList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/kakaopayReady" element={<KakaoPayReady />} />
          <Route path="/kakaopayResult" element={<KakaoPayResult />} />
          <Route path="/bartest" element={<FixedBar />} />
          <Route path="/showroomAdmin1" element={<ShowroomAdd />} />
          <Route path="/productDetail/:productNo" element={<ImageThumb />} />
          <Route path="/board" element={<Board/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default AppRouter;
