import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const Saw = () => {
  const { productNo } = useParams();
  console.log(productNo);
  const [prodcutList, setProductList] = useState({});
  const location = useLocation();
  useEffect(() => {
    let get_local = localStorage.getItem("data");
    setProductList(location.state.dataa);
    // console.log(dataa);
    if (get_local == null) {
      get_local = [];
    } else {
      get_local = JSON.parse(get_local);
    }

    // console.log(id);
    let duplicateFlag = false;
    if (JSON.stringify(prodcutList) !== "{}") {
      for (let i = 0; i < get_local.length; i++) {
        if (prodcutList.id === get_local[i].id) {
          duplicateFlag = true;
          break;
        }
      }

      // if() 안에 변수명만 들어가면 무조건 true 거나 값이 있을때,
      //!변수명 하면은 false 거나 값이 null(undefined)
      if (!duplicateFlag) {
        get_local.push(prodcutList);
      }
      //get_local =[{}, {}, {} ,{}];

      // if (localStorage.get_local === undefined) {
      //   localStorage.setItem("data", JSON.stringify([]));
      // }

      if (get_local.length > 5) {
        // localStorage.clear();
        get_local.splice(0, 1);
      }

      localStorage.setItem("data", JSON.stringify(get_local));
    }
    // let tested = JSON.parse(localStorage.getItem("data"));
    // tested.unshift(id);
    // tested = […new Set(tested)].slice(0, 3);
    // localStorage.setItem("data", JSON.stringify(tested));
  }, [prodcutList]);
  return <>{prodcutList.title}</>;
};

export default Saw;