import React, { useState, useCallback, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./components/user/Login";
import Header from "./components/Header";
import Join from "./components/user/Join";
import Order from "./components/order/Order";
import Dashboard from "./components/admin/Dashboard";
import Mypage from "./components/mypage/Mypage";
import MypageSideBar from "./components/mypage/MypageSideBar";
import UserUpdate from "./components/mypage/UserUpdate";
import OutMembers from "./components/mypage/OutMembers";
import MyPoint from "./components/mypage/MyPoint";
import ReviewList from "./components/mypage/ReviewList";
import WishList from "./components/mypage/WishList";
import OrderList from "./components/mypage/OrderList";
import ImageThumb from "./components/productDetail/ImageThumb";
import InteriorShowroom from "./components/showroom/InteriorShowroom";
import Footer from "./components/Footer";
import KakaoPayReady from "./components/order/KakaoPayReady";
import KakaoPayResult from "./components/order/KakaoPayResult";
import UserManage from "./components/admin/UserManage";
import OrderManage from "./components/admin/OrderManage";
import ProductAdd from "./components/admin/ProductAdd";
import ProductList from "./components/admin/ProductList";
import MyOrderDetail from "./components/mypage/MyOrderDetail";
import MyOrderstatus from "./components/mypage/MyOrderstatus";
import Cart from "./components/cart/Cart";
import AdminOrderDetail from "./components/admin/AdminOrderDetail";
import ProductUpdate from "./components/admin/ProductUpdate";
import ProductCategoryList from "./components/list/ProductCategoryList";
import FixedBar from "./components/list/FixedBar";
import ShowroomAdd from "./components/admin/ShowroomAdd";
import Board from "./components/Board";
import Coupon from "./components/event/Coupon";
import SearchedProductCategoryList from "./components/list/NotUsedProductCategoryList";
import NotUsedProductCategoryList from "./components/list/NotUsedProductCategoryList";
import NavProductCategoryList from "./components/list/NavProductCategoryList";
import OrderComplete from "./components/order/OrderComplete";
import CategoryNavbar from "./components/main/CategoryNavbar";

const AppRouter = () => {
  // 경로에 따라 실행되는 컴포넌트가 다르므로, 그 정보를 갖고있는 AppRouter를 가장 먼저 렌더링해야 한다.(Index.js에서)

  const [loginUser, setLoginUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("USER_INFO") !== null) {
      setLoginUser(JSON.parse(sessionStorage.getItem("USER_INFO")));
    }
  }, []);

  useEffect(() => {
    if (loginUser !== null && loginUser.userId == "admin") {
      setIsAdmin(true);
    }
  }, [loginUser]);

  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/join" element={<Join />} />
          <Route path="/login" element={<Login />} />

          {loginUser !== null ? (
            <>
              <Route path="/mypage" element={<Mypage />} />
              <Route path="/mypagesidebar" element={<MypageSideBar />} />
              <Route path="/MyOrderDetail" element={<MyOrderDetail />} />
              <Route path="/MyOrderstatus" element={<MyOrderstatus />} />
              <Route path="/mypoint" element={<MyPoint />} />
              <Route path="/orderlist" element={<OrderList />} />
              <Route path="/userupdate" element={<UserUpdate />} />
              <Route path="/outmembers" element={<OutMembers />} />
              <Route path="/reviewlist" element={<ReviewList />} />
              <Route path="/wishlist" element={<WishList />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/order" element={<Order />} />
              <Route path="/orderComplete" element={<OrderComplete />} />
              <Route path="/board" element={<Board />} />
            </>
          ) : (
            <>
              <Route path="/mypage" element={<Login />} />
              <Route path="/mypagesidebar" element={<Login />} />
              <Route path="/MyOrderDetail" element={<Login />} />
              <Route path="/MyOrderstatus" element={<Login />} />
              <Route path="/mypoint" element={<Login />} />
              <Route path="/orderlist" element={<Login />} />
              <Route path="/userupdate" element={<Login />} />
              <Route path="/outmembers" element={<Login />} />
              <Route path="/reviewlist" element={<Login />} />
              <Route path="/wishlist" element={<Login />} />
              <Route path="/cart" element={<Login />} />
              <Route path="/order" element={<Login />} />
              <Route path="/board" element={<Login />} />
            </>
          )}

          {isAdmin ? (
            <>
              <Route path="/admin" element={<Dashboard />} />
              <Route path="/admin1" element={<ProductAdd />} />
              <Route path="/admin2" element={<ProductList />} />
              <Route path="/admin3" element={<ProductUpdate />} />
              <Route path="/admin3/{productNo}" element={<ProductUpdate />} />
              <Route path="/UserManage" element={<UserManage />} />
              <Route path="/OrderManage" element={<OrderManage />} />
              <Route path="/AdminOrderDetail" element={<AdminOrderDetail />} />
              <Route path="/showroomAdmin1" element={<ShowroomAdd />} />
            </>
          ) : (
            <>
              <Route path="/admin" element={<Login />} />
              <Route path="/admin1" element={<Login />} />
              <Route path="/admin2" element={<Login />} />
              <Route path="/admin3" element={<Login />} />
              <Route path="/admin3/{productNo}" element={<Login />} />
              <Route path="/OrderManage" element={<Login />} />
              <Route path="/AdminOrderDetail" element={<Login />} />
              <Route path="/showroomAdmin1" element={<Login />} />
              <Route path="/UserManage" element={<Login />} />
            </>
          )}

          <Route path="/productDetail" element={<ImageThumb />} />
          <Route path="/showroom" element={<InteriorShowroom />} />
          <Route path="/list" element={<NavProductCategoryList />} />
          <Route path="/kakaopayReady" element={<KakaoPayReady />} />
          <Route path="/kakaopayResult" element={<KakaoPayResult />} />
          <Route path="/bartest" element={<FixedBar />} />
          <Route path="/productDetail/:productNo" element={<ImageThumb />} />
          <Route path="/coupon" element={<Coupon />} />
          <Route
            path="/list/:productCategoryName"
            element={<NavProductCategoryList />}
          />
          {/* <Route path="/search" element={<SearchedProductCategoryList />} /> */}
          {/* <Route
            path="/search:searchKeyword"
            element={<SearchedProductCategoryList />}
          /> */}
          <Route path="/navbar" element={<CategoryNavbar />} />
          <Route path="/search/:word" element={<ProductCategoryList />} />
          <Route path="/notuse" element={<NotUsedProductCategoryList />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default AppRouter;
