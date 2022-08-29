import React, { useCallback, useEffect, useState } from "react";
import CartItem from "./CartItem";

const CartItemList = () => {
  // const [productList, setProductList] = useState([
  //   {
  //     prooductNo: 5764,
  //     productCategory: "C13",
  //     productDeliveryInfo: "배송 가능",
  //     productName: "ANNAKAJSA 안나카이사",
  //     productPrice: "69900",
  //   },
  //   {
  //     prooductNo: 9462,
  //     productCategory: "C01",
  //     productDeliveryInfo: "배송 가능",
  //     productName: "MALM 말름 오토만침대",
  //     productPrice: "599000",
  //   },
  // ]);
  const productList = [
    {
      prooductNo: 5764,
      productCategory: "C13",
      productDeliveryInfo: "배송 가능",
      productName: "ANNAKAJSA 안나카이사",
      productPrice: "69900",
    },
    {
      prooductNo: 9462,
      productCategory: "C01",
      productDeliveryInfo: "배송 가능",
      productName: "MALM 말름 오토만침대",
      productPrice: "599000",
    },
  ];

  return (
    <div>
      {productList.map((product) => {
        return <CartItem productList={productList} key={product.prooductNo} />;
      })}
    </div>
  );
};

export default CartItemList;
