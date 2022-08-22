import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Browser, Routes, Route, BrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./components/user/Login";
import Join from "./components/user/Join";
import Header from "./components/Header";
import Checkout from "./components/order/Checkout";
import Dashboard from "./components/admin/Dashboard";
import Mypage from "./components/mypage/Mypage";
import ImageThumb from "./components/productDetail/ImageThumb";
import ProductMainInfo from "./components/productDetail/ProductMainInfo";

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
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/order" element={<Checkout />} />
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/productDetail" element={<ImageThumb />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
