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
import Modal from "react-bootstrap/Modal";

const mdTheme = createTheme();

const fileList = []; // 업로드한 파일들을 저장하는 배열

function ProductAdd() {
  //제품 판매상태
  const [Productstate, setProductstate] = React.useState("Y");
  //상품등록 완료시 모달창 띄우기
  const [show, setShow] = useState(false);
  //제품 공통코드-컬러
  const [ProductColor, setProductColor] = React.useState("");
  //제품 공통코드-소재
  const [productMaterial, setProductMaterial] = React.useState("");
  //제품 공통코드-카테고리
  const [productCategory, setProductCategory] = React.useState("");

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

  const handleStateChange = (event) => {
    setProductstate(event.target.value);
  };

  //제품 소재
  const pmaterial = [
    {
      value: "B01",
      label: "메탈",
    },
    {
      value: "B02",
      label: "플라스틱",
    },
    {
      value: "B03",
      label: "원목",
    },
    {
      value: "B04",
      label: "가공목",
    },
    {
      value: "B05",
      label: "패브릭",
    },
    {
      value: "B06",
      label: "라탄",
    },
    {
      value: "B07",
      label: "알루미늄",
    },
    {
      value: "B08",
      label: "스테인리스스틸",
    },
    {
      value: "B09",
      label: "대리석",
    },
    {
      value: "B10",
      label: "유리",
    },
    {
      value: "B11",
      label: "벨벳",
    },
    {
      value: "B12",
      label: "가죽",
    },
  ];

  const handleMaterialChange = (event) => {
    setProductMaterial(event.target.value);
  };

  //제품 카테고리
  const pcategory = [
    {
      value: "C01",
      label: "침대",
    },
    {
      value: "C02",
      label: "소파",
    },
    {
      value: "C03",
      label: "테이블/식탁/책상",
    },
    {
      value: "C04",
      label: "거실장/tv장",
    },
    {
      value: "C05",
      label: "서랍/수납장",
    },
    {
      value: "C06",
      label: "진열장/책상",
    },
    {
      value: "C07",
      label: "선반",
    },
    {
      value: "C08",
      label: "행거/옷장",
    },
    {
      value: "C09",
      label: "의자",
    },
    {
      value: "C10",
      label: "화장대/콘솔",
    },
    {
      value: "C11",
      label: "조명",
    },
    {
      value: "C12",
      label: "가전",
    },
    {
      value: "C13",
      label: "패브릭",
    },
    {
      value: "C14",
      label: "생필품",
    },
    {
      value: "C15",
      label: "야외가구/캠핑용품",
    },
    {
      value: "C16",
      label: "주방용품",
    },
    {
      value: "C17",
      label: "인테리어소품",
    },
  ];
  const handleCategoryChange = (event) => {
    setProductCategory(event.target.value);
  };

  // const [ProductSize, setProductSize] = React.useState("단일");

  // const handleSizeChange = (event) => {
  //   setProductSize(event.target.value);
  // };

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

    // const formData = new FormData();

    // formData.append(
    //   "productNo",
    //   new Blob([JSON.stringify(event.target.productNo.value)], {
    //     type: "application/json",
    //   })
    // );

    // fileList.forEach((file) => {
    //   // 파일 데이터 저장
    //   formData.append("uploadFiles", file);
    // });

    console.log(fObj.uploadFiles);

    axios({
      url: "http://localhost:8080/api/product/insertProduct",
      method: "POST",
      data: fObj,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {})
      .catch((e) => {
        console.log(e);
      });
  };

  //제품 공통코드-컬러
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

  const handleColorChange = (event) => {
    setProductColor(event.target.value);
  };

  //상품등록 완료시 모달창 띄우기
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            <h1>제품 등록폼</h1>
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
                />
                <TextField
                  id="outlined-select-state-native"
                  select
                  name="productState"
                  label="제품 판매상태"
                  value={Productstate}
                  onChange={handleStateChange}
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
                  id="outlined-required"
                  name="productSize"
                  label="제품사이즈"
                />
                {/* <TextField
                  id="outlined-select-size-native"
                  select
                  name="productSize"
                  label="제품 사이즈"
                  value={ProductSize}
                  onChange={handleSizeChange}
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
                </TextField> */}
                {/* <TextField
                  id="date"
                  label="제품등록일"
                  name=""
                  type="date"
                  defaultValue="today"
                  sx={{ width: 220 }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  id="date"
                  label="제품수정일"
                  name=""
                  type="date"
                  defaultValue="today"
                  sx={{ width: 220 }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                /> */}
                <TextField
                  label="제품 가격"
                  name="productPrice"
                  id="outlined-start-adornment"
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
                />
                <TextField
                  id="outlined-select-color-native"
                  select
                  name="commonCode"
                  label="제품 컬러(공통코드)"
                  value={ProductColor}
                  onChange={handleColorChange}
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
                  id="outlined-select-color-native"
                  select
                  name="productMaterial"
                  label="제품 소재(공통코드)"
                  value={productMaterial}
                  onChange={handleMaterialChange}
                  SelectProps={{
                    native: true,
                  }}
                  helperText="제품 소재 선택"
                >
                  {pmaterial.map((c) => (
                    <option key={c.value} value={c.value}>
                      {c.label}
                    </option>
                  ))}
                </TextField>
                <TextField
                  id="outlined-select-color-native"
                  select
                  name="productCategory"
                  label="제품 카테고리(공통코드)"
                  value={productCategory}
                  onChange={handleCategoryChange}
                  SelectProps={{
                    native: true,
                  }}
                  helperText="제품 카테고리 선택"
                >
                  {pcategory.map((c) => (
                    <option key={c.value} value={c.value}>
                      {c.label}
                    </option>
                  ))}
                </TextField>
                <FormControl sx={{ m: 1, width: "93%" }}>
                  <InputLabel htmlFor="outlined-adornment-amount">
                    제품설명 - 요약
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    label="Amount"
                    name="productSummary"
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
                  />
                  <TextField
                    id="outlined-multiline-static"
                    name="productRef"
                    label="제품설명 - 참고"
                    multiline
                    rows={4}
                  />
                  <TextField
                    id="outlined-multiline-static"
                    name="productMng"
                    label="제품설명 - 소재 및 재고관리"
                    multiline
                    rows={4}
                  />
                  <TextField
                    id="outlined-multiline-static"
                    name="productSafe"
                    label="제품설명 - 안전규정 및 준수"
                    multiline
                    rows={4}
                  />
                  <TextField
                    id="outlined-multiline-static"
                    label="제품배송시 주의사항"
                    name="productDeliveryInfo"
                    multiline
                    rows={4}
                  />
                  <TextField
                    id="outlined-multiline-static"
                    label="치수"
                    name="productGauge"
                    multiline
                    rows={4}
                  />

                  <label htmlFor="profile-upload" />
                  <input
                    type="file"
                    multiple="multiple"
                    id="profile-upload"
                    name="uploadFiles"
                    onChange={onChangeImg}
                  />

                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{ display: "flex", justifyContent: "center" }}
                    style={{ marginTop: "2%" }}
                  >
                    <Button
                      variant="contained"
                      color="success"
                      type="submit"
                      onSubmit={onProductSubmitHandler}
                      onClick={handleShow}
                    >
                      등록하기
                    </Button>
                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>상품 등록완료</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        ㅊㅋㅊㅋ상품 등록이 완료 됐습니다.(◍ᐡ₃ᐡ◍)
                      </Modal.Body>
                      <Modal.Footer>
                        <Button
                          variant="contained"
                          color="success"
                          onClick={handleClose}
                        >
                          닫기
                        </Button>
                      </Modal.Footer>
                    </Modal>
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

export default ProductAdd;
