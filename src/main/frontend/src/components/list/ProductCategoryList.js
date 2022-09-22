import React, { Component, useEffect, useState } from "react";
import "react-multi-carousel/lib/styles.css";
import ProductCardForList from "./ProductCardForList";
import "../../css/productCategory.css";
import { Container } from "react-bootstrap";
import FixedBar from "./FixedBar";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import ColorChip from "./ColorChip";
import MaterialChip from "./MaterialChip";
import PriceChip from "./PriceChip";
import Categoryinfo from "./Categoryinfo";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductCategoryList = () => {
  const [productList, setProductList] = useState([]);
  const [productImageList, setProductImageList] = useState([]);
  const [showProductList, setShowProductList] = useState([]); //필터 처리한 제품목록을 담음
  const [showProductImageList, setShowProductImageList] = useState([]); //필터 처리한 제품이미지목록을 담음
  // const [query, setQuery] = useSearchParams();

  //제품조회 필터링 조건
  const [commonCode, setCommonCode] = useState("");
  const [productMaterial, setProductMaterial] = useState("");
  const [lowestPrice, setLowestPrice] = useState(0);
  const [highestPrice, setHighestPrice] = useState(100000000);

  const onCommonCodeHandler = (commonCode) => {
    setCommonCode(commonCode);
  };
  const onProductMaterialHandler = (productMaterial) => {
    setProductMaterial(productMaterial);
  };
  const onLowestPriceHandler = (lowestPrice) => {
    setLowestPrice(lowestPrice);
  };
  const onHighestPriceHandler = (highestPrice) => {
    setHighestPrice(highestPrice);
  };

  const categoryList = [
    {
      title: "침대",
      code: "C01",
      content:
        "많은 침대 제품이 있지만 기분 좋은 아침을 맞이하려면 자신에게 꼭 맞는 제품을 고르셔야 해요. 몸을 쭉 펴도 될 만큼 크고 폭신하게 몸을 감싸주어 편안한 디자인을 찾아보세요. HOME CONTROLLER의 침대와 침대프레임은 오랫동안 사용할 수 있으며 그동안에도 질리지 않을 디자인을 갖추고있습니다.",
    },
    {
      title: "소파",
      code: "C02",
      content:
        "곡선형 다리, 부드럽게 떨어지는 곡선, 섬세한 디테일이 매력인 HOME CONTROLLER의 새로운 VISKAFORS 비스카포르스 소파는 멀리서 보아도 사랑스러운 자태를 뽐냅니다. 이 소파에 기대면 어느 방에 있더라도 품격과 안락함을 선사하는 휴식처가 되어줄 거예요. 집에 하나 있으면 너무 좋을 것 같지 않나요?",
    },
    {
      title: "테이블/식탁/책상",
      code: "C03",
      content:
        "게이밍 공간, 사무실, 재택근무 공간 등 공간에 맞는 책상을 찾고 있다면, 꿈에 그리던 책상을 아래에서 찾을 수 있습니다.",
    },
    {
      title: "거실장/tv장",
      code: "C04",
      content:
        "집에 들어서면 반겨주고 우편물을 올려둘 현관 테이블이나 소파 옆에 음료를 올려둘 테이블이 필요하세요? IKEA의 활용도 만점 테이블은 다양한 마감으로 모던한 디자인과 전통적인 스타일을 모두 만나보실 수 있어요. 모두 위에 자랑하고 싶은 물건을 진열할 공간이 있고, 도어와 서랍이 있어서 물건을 넣어둘 수 있는 제품도 있답니다.",
    },
    {
      title: "서랍/수납장",
      code: "C05",
      content:
        "다용도수납장이나 수납장 안에 무엇을 수납하는지는 사람마다 다르고, 수납장의 선택도 주인의 개성을 반영하죠. 그래서 IKEA에는 클래식한 목재 장식장부터 밝은 블루 계열의 물품보관함과 슬림한 신발장까지 다양한 디자인의 제품이 있어요. 물건을 수납하고 스타일에 따라 매칭해보세요.",
    },
    {
      title: "진열장/책장",
      code: "C06",
      content:
        "집에서 어떤 물건은 매일 보고 진열하고 싶지만 다른 것들은 사용하지 않을 때 숨겨두는 편이 낫죠. 어떤 책장이나 선반을 찾으시든지 HOME CONTROLLER에서는 모든 필요를 위한 스마트한 솔루션을 찾으실 수 있어요.",
    },
    {
      title: "선반",
      code: "C07",
      content:
        "집에서 어떤 물건은 매일 보고 진열하고 싶지만 다른 것들은 사용하지 않을 때 숨겨두는 편이 낫죠. 어떤 책장이나 선반을 찾으시든지 HOME CONTROLLER에서는 모든 필요를 위한 스마트한 솔루션을 찾으실 수 있어요.",
    },
    {
      title: "행거/옷장",
      code: "C08",
      content:
        "운동화 수집가, 청바지 애호가 아니면 티셔츠와 모자 모으기가 취미신가요? 어떤 것을 수집하더라도 HOME CONTROLLER 옷장 안에 모두 수납할 수 있어요. 오픈형, 맞춤형 혹은 스스로 꾸미는 옵션이 있는 전통적이거나 모던한 스타일의 HOME CONTROLLER 옷장을 구경하세요. 옷과 스타일, 공간에 꼭 알맞은 침실 옷장을 찾을 수 있을 거예요.",
    },
    {
      title: "의자",
      code: "C09",
      content:
        "의자를 찾고 계신가요? HOME CONTROLLER에는 다양한 의자가 준비되어 있어서 집안에 필요한 의자를 쉽게 찾으실 수 있어요. 포인트를 줄 수 있는 특이한 의자, 편안한 식탁의자, 공간을 많이 차지하지 않는 접이식 의자, 인체공학적 사무용 의자... 어떤 의자를 원하시든 맞는 의자를 만나실 수 있을 거예요.",
    },
    {
      title: "화장대/콘솔",
      code: "C10",
      content:
        "화장대를 찾고 계신가요? HOME CONTROLLER에는 다양한 화장대가 준비되어 있어서 집안에 필요한 화장대를 쉽게 찾으실 수 있어요. 어떤 화장대를 원하시든 맞는 의자를 만나실 수 있을 거예요.",
    },
    {
      title: "조명",
      code: "C11",
      content:
        "스위치를 딸깍하거나 앱을 한 번 탭하는 것으로 조명을 통해 방 분위기를 바꿀 수 있어요. 영화를 보는 밤에는 아늑하고 차분한 분위기가 좋겠죠? 하루를 시작할 땐 활기찬 조명이 어떨까요? 실내조명은 분위기와 스타일도 내면서 당연히 밝은 빛을 비춰준답니다. 바닥부터 천장까지 모든 곳에 설치할 수 있는 실내조명을 만나보세요.",
    },
    {
      title: "가전",
      code: "C12",
      content:
        "화장대를 찾고 계신가요? HOME CONTROLLER에는 다양한 화장대가 준비되어 있어서 집안에 필요한 화장대를 쉽게 찾으실 수 있어요. 어떤 화장대를 원하시든 맞는 의자를 만나실 수 있을 거예요.",
    },
    {
      title: "패브릭",
      code: "C13",
      content:
        "좋은 침구가 있으면 밤에 푹 자는 건 문제 없어요. 부드러운 침구, 빛을 가려줄 침실 커튼, 잠자리 선호도에 맞는 이불과 베개, 여기에 부드러운 침실 러그로 침실의 편안한 분위기를 마무리해보세요. 하루를 더 아늑하게 시작하실 수 있을 거예요.",
    },
    {
      title: "생필품",
      code: "C14",
      content:
        "이사해서 청소하고 좁은 집을 정리하는 방법을 배우는 일이니까요. 가장 먼저 극세사천, 빗자루, 쓰레받기, 그리고 알맞은 이사박스를 꼭 준비하세요.",
    },
    {
      title: "야외가구",
      code: "C15",
      content:
        "HOME CONTROLLER의 다양한 야외용 가구를 구경해보세요. 발코니에 사용할 작고 가벼운 알루미늄 소재의 가구부터 넓은 정원을 위한 라탄, 원목처럼 다양한 사이즈와 소재의 가구가 준비되어 있어요. 스타일과 공간에 어울리는 가구를 골라 야외용 제품을 즐겨보세요!",
    },
    {
      title: "주방용품",
      code: "C15",
      content:
        "간단히 먹는 주중의 아침 식사부터 촛불을 켠 무드 있는 저녁 식사까지 실용성과 다양한 스타일을 겸비한 IKEA의 디너웨어를 이용하여 원하는 스타일로 테이블을 세팅하세요. 식사를 마친 후 식기세척기로 설거지할 수 있는 제품이란 걸 안다면 로맨틱한 저녁 식사가 더 맛있어지겠죠?",
    },
    {
      title: "인테리어 소품",
      code: "C16",
      content:
        "화장대를 찾고 계신가요? HOME CONTROLLER에는 다양한 화장대가 준비되어 있어서 집안에 필요한 화장대를 쉽게 찾으실 수 있어요. 어떤 화장대를 원하시든 맞는 의자를 만나실 수 있을 거예요.",
    },
  ];

  const [searchData, setSearchData] = React.useState([]);
  const params = useParams();

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        "http://localhost:8080/api/main/list?word=" + params.word
      );
      console.log("////////////", result.data.result);
      setSearchData(result);
    }
    fetchData();
  }, []);

  const getProducts = async () => {
    // let serachQuery = query.get("q");
    // console.log("serachQuery", serachQuery);
    let url = "http://localhost:8080/api/product/getAllProductList";
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProductList(data.productList);
    setProductImageList(data.productImageList);
  };

  // useEffect(() => {
  //   if (
  //     (commonCode === "" || typeof commonCode === "undefined") &&
  //     (productMaterial === "" || typeof productMaterial === "undefined")
  //   ) {
  //     setShowProductList((prev) =>
  //       productList.filter(
  //         (p) => p.productPrice > lowestPrice && p.productPrice <= highestPrice
  //       )
  //     );
  //   } else {
  //     setShowProductList((prev) =>
  //       prev.filter(
  //         (p) => p.productPrice > lowestPrice && p.productPrice <= highestPrice
  //       )
  //     );
  //   }
  // }, [lowestPrice, highestPrice]);

  useEffect(() => {
    setShowProductList((prev) => [...prev, ...productList]);
  }, [productList]);

  const filterData = () => {
    const filteredList = productList.reduce((acc, cur) => {
      const commonCodeCondition =
        commonCode !== "" && typeof commonCode !== "undefined"
          ? cur.commonCodeName === commonCode
          : true; // 해당 조건이 없으면 그냥 무시하고 지나간다.

      const productMaterialCondition =
        productMaterial !== "" && typeof productMaterial !== "undefined"
          ? cur.productMaterialName === productMaterial
          : true;

      const lowestPriceCondition = lowestPrice
        ? cur.productPrice > lowestPrice
        : true;

      const highestPriceCondition = highestPrice
        ? cur.productPrice <= highestPrice
        : true;

      // 해당 조건이 있다면 그에 부합하는 교집합인 놈만 push 하겠다.
      if (
        commonCodeCondition &&
        productMaterialCondition &&
        lowestPriceCondition &&
        highestPriceCondition
      ) {
        acc.push(cur);
      }

      return acc;
    }, []);

    setShowProductList(filteredList);
  };

  useEffect(() => {
    filterData();
  }, [productList, commonCode, productMaterial, lowestPrice, highestPrice]);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="cute">
      {/* {categoryList.map((a) => (
        <Categoryinfo item={a} />
      ))} */}

      <Categoryinfo item={categoryList[0]} />

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar sx={{ backgroundColor: "lightgray" }}>
            <Button color="inherit">필터</Button>
            <ColorChip onCommonCodeHandler={onCommonCodeHandler}></ColorChip>
            <MaterialChip
              onProductMaterialHandler={onProductMaterialHandler}
            ></MaterialChip>
            <PriceChip
              onLowestPriceHandler={onLowestPriceHandler}
              onHighestPriceHandler={onHighestPriceHandler}
            ></PriceChip>
          </Toolbar>
        </AppBar>
      </Box>
      <div className="appbarUnder">
        <div className="header_line">
          <hr />
        </div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} columns={16}>
            {/*             
            {productList ? (
              productList.map((a) => (
                <ProductCard item={a} productImageList={productImageList} />
              ))
            ) : (
              <p>조회된 데이터가 없습니다.</p>
            )} 
            */}

            {showProductList ? (
              showProductList.map((a) => (
                <ProductCardForList
                  item={a}
                  productImageList={productImageList}
                />
              ))
            ) : (
              <p>조회된 데이터가 없습니다.</p>
            )}
          </Grid>
        </Box>
      </div>

      <div className="seemore">
        <Button variant="contained" color="success" sx={{ borderRadius: 12.5 }}>
          더 보기
        </Button>
      </div>
      <div className=""></div>
    </div>
  );
};

export default ProductCategoryList;
