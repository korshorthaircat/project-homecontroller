import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import AdminItemList from "./AdminItemList";
import List from "@mui/material/List";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { Select } from "@mui/material";
import { useLocation } from "react-router-dom";

const mdTheme = createTheme();

const fileList = []; // 업로드한 파일들을 저장하는 배열

function ProductUpdate() {
  const [proNo, setProNo] = useState({});

  const location = useLocation({});
  React.useEffect(() => {
    console.log(location.state.obj.data);
    setProNo(location.state.obj.data);
  }, []);

  //db에서 받아온 정보를 저장할 state 선언

  //db에서 데이터 받아오기
  let url = "http://localhost:8080/api/admin/admin3";

  const getProduct = () => {
    axios({
      method: "post",
      url: url,
      data: { productNo: proNo },
    }).then((response) => {
      console.log(response.data.data[0]);
      setProductInfo(response.data.data[0]);
    });
  };

  React.useEffect(() => {
    getProduct();
  }, [proNo]);

  //제품 판매상태
  const states = [
    {
      value: "Y",
      label: "Y",
    },
    {
      value: "N",
      label: "N",
    },
  ];
  const [Productstate, setProductstate] = React.useState("Y");

  const handleStateChange = (event) => {
    setProductstate(event.target.value);
  };

  //제품 사이즈
  const psize = [
    {
      value: "단일",
      label: "단일",
    },
    {
      value: "S",
      label: "S",
    },
    {
      value: "M",
      label: "M",
    },
    {
      value: "L",
      label: "L",
    },
  ];

  const [ProductSize, setProductSize] = React.useState("단일");

  const handleSizeChange = (event) => {
    setProductSize(event.target.value);
  };

  //이미지 업로드
  const onChangeImg = (e) => {
    console.log(e.target.files);
    const uploadFiles = Array.prototype.slice.call(e.target.files); // 파일선택창에서 선택한 파일들

    uploadFiles.forEach((uploadFile) => {
      fileList.push(uploadFile);
    });
  };

  const onProductSubmitHandler = (event) => {
    event.preventDefault();

    const f = new FormData(event.target);

    const fObj = {};
    f.forEach((value, key) => (fObj[key] = value));

    fObj.uploadFiles = fileList;
  };

  const [productInfo, setProductInfo] = React.useState({});

  let upproductUrl = "http://localhost:8080/api/admin/admin3";

  const [productList, setProductList] = React.useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (document.activeElement.value === "update") {
      axios({
        url: upproductUrl,
        method: "put",
        data: productInfo,
      })
        .then((response) => {
          setProductList(response.data);
        })
        .catch((e) => {
          console.log("update오류" + e);
        });
    }
  };

  const handleChange = (e) => {
    const updateProduct = {
      ...productInfo,
      [e.target.name]: e.target.value,
    };
    console.log("난" + productInfo);
    setProductInfo(updateProduct);
  };

  //제품소재 공통코드
  const color = [
    {
      value: "A01",
      label: "빨간색",
    },
    {
      value: "A02",
      label: "주황색",
    },
    {
      value: "A03",
      label: "노란색",
    },
    {
      value: "A04",
      label: "초록색",
    },
    {
      value: "A05",
      label: "파란색",
    },
    {
      value: "A06",
      label: "보라색",
    },
    {
      value: "A07",
      label: "흰색",
    },
    {
      value: "A08",
      label: "검은색",
    },
    {
      value: "A09",
      label: "베이지",
    },
    {
      value: "A10",
      label: "멀티컬러",
    },
    {
      value: "A11",
      label: "분홍색",
    },
    {
      value: "A12",
      label: "회색",
    },
    {
      value: "A13",
      label: "갈색",
    },
  ];
  const [ProductColor, setProductColor] = React.useState("");

  const handleColorChange = (event) => {
    setProductstate(event.target.value);
  };
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }} style={{ maxWidth: "1750px" }}>
        <Box>
          <List>
            <AdminItemList />
          </List>
        </Box>
        <Container style={{ marginTop: "5%" }}>
          <form
            noValidate
            onSubmit={onProductSubmitHandler}
            id="ProductCreateForm"
            encType="multipart/form-data"
          >
            <h2 style={{ marginBottom: "30px" }}>제품 수정</h2>
            <Box
              sx={{
                "& .MuiTextField-root": { m: 1, width: "30ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  id="outlined-required"
                  name="productName"
                  label="제품명"
                  type="text"
                  value={productInfo.productName}
                  onChange={handleChange}
                />
                <TextField
                  id="outlined-select-state-native"
                  select
                  name="productState"
                  label="제품 판매상태"
                  value={productInfo.productState}
                  onChange={handleChange}
                  SelectProps={{
                    native: true,
                  }}
                  helperText="판매상태 선택"
                >
                  {states.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
                <TextField
                  id="outlined-select-size-native"
                  select
                  name="productSize"
                  label="제품 사이즈"
                  value={productInfo.productSize}
                  onChange={handleChange}
                  SelectProps={{
                    native: true,
                  }}
                  helperText="판매사이즈 선택"
                >
                  {psize.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
                <TextField
                  label="제품 가격"
                  name="productPrice"
                  id="outlined-start-adornment"
                  onChange={handleChange}
                  sx={{ m: 1, width: "25ch" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">₩</InputAdornment>
                    ),
                  }}
                />
                <TextField
                  id="outlined-number"
                  label="제품 재고수량"
                  name="productInventory"
                  // type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={handleChange}
                  value={productInfo.productInventory}
                />
                <TextField
                  id="outlined-select-color-native"
                  select
                  name="commonCode"
                  label="제품 컬러(공통코드)"
                  value={productInfo.productColor}
                  onChange={handleChange}
                  SelectProps={{
                    native: true,
                  }}
                  helperText="제품 색상 선택"
                >
                  {color.map((c) => (
                    <option key={c.value} value={c.value}>
                      {c.label}
                    </option>
                  ))}
                </TextField>

                <TextField
                  id="outlined-required"
                  label="제품소재(공통코드)"
                  value={productInfo.productMaterial}
                  name="productMaterial"
                  onChange={handleChange}
                />
                <TextField
                  id="outlined-required"
                  name="productCategory"
                  label="제품 카테고리(공통코드)"
                  onChange={handleChange}
                  value={productInfo.productCategory}
                />
                <FormControl sx={{ m: 1, width: "93%" }}>
                  <InputLabel htmlFor="outlined-adornment-amount">
                    제품설명 - 요약
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    label="Amount"
                    name="productSummary"
                    onChange={handleChange}
                    value={productInfo.productSummary}
                  />
                </FormControl>
                <Box
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "46%" },
                  }}
                >
                  <TextField
                    id="outlined-multiline-static"
                    label="제품설명 - 상세"
                    name="productDetail"
                    multiline
                    rows={4}
                    onChange={handleChange}
                    value={productInfo.productDetail}
                  />
                  <TextField
                    id="outlined-multiline-static"
                    name="productRef"
                    label="제품설명 - 참고"
                    multiline
                    rows={4}
                    onChange={handleChange}
                    value={productInfo.productRef}
                  />
                  <TextField
                    id="outlined-multiline-static"
                    name="productMng"
                    label="제품설명 - 소재 및 재고관리"
                    multiline
                    rows={4}
                    onChange={handleChange}
                    value={productInfo.productMng}
                  />
                  <TextField
                    id="outlined-multiline-static"
                    name="productSafe"
                    label="제품설명 - 안전규정 및 준수"
                    multiline
                    rows={4}
                    onChange={handleChange}
                    value={productInfo.productSafe}
                  />
                  <TextField
                    id="outlined-multiline-static"
                    label="제품배송시 주의사항"
                    name="productDeliveryInfo"
                    multiline
                    rows={4}
                    onChange={handleChange}
                    value={productInfo.productDeliveryInfo}
                  />
                  <TextField
                    id="outlined-multiline-static"
                    label="치수"
                    name="productGauge"
                    multiline
                    rows={4}
                    onChange={handleChange}
                    value={productInfo.productGauge}
                  />

                  <label htmlFor="profile-upload" />
                  <input
                    type="file"
                    multiple="multiple"
                    id="profile-upload"
                    name="uploadFiles"
                    onChange={onChangeImg}
                    value={productInfo.productUploadFiles}
                  />

                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{ display: "flex", justifyContent: "center" }}
                    style={{ marginTop: "2%" }}
                  >
                    <Button
                      onSubmit={handleSubmit}
                      variant="contained"
                      color="success"
                      type="submit"
                      value="update"
                    >
                      수정하기
                    </Button>
                  </Stack>
                </Box>
              </div>
            </Box>
          </form>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default ProductUpdate;
