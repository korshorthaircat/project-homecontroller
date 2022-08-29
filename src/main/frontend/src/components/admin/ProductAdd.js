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

const mdTheme = createTheme();

function ProductAdd() {
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
  const onChangeImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (e.target.files) {
      const uploadFile = e.target.files[0];
      console.log(uploadFile);
    }
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
          <h1>제품 등록폼</h1>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "30ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField id="outlined-required" label="제품번호" />
              <TextField id="outlined-required" label="제품명" />
              <TextField
                id="outlined-select-state-native"
                select
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
                id="outlined-select-size-native"
                select
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
              </TextField>
              <TextField
                id="date"
                label="제품등록일"
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
                type="date"
                defaultValue="today"
                sx={{ width: 220 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                label="제품 가격"
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
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField id="outlined-required" label="제품소재(공통코드)" />
              <TextField
                id="outlined-required"
                label="제품 카테고리(공통코드)"
              />
              <FormControl sx={{ m: 1, width: "93%" }}>
                <InputLabel htmlFor="outlined-adornment-amount">
                  제품설명 - 요약
                </InputLabel>
                <OutlinedInput id="outlined-adornment-amount" label="Amount" />
              </FormControl>
              <Box
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "46%" },
                }}
              >
                <TextField
                  id="outlined-multiline-static"
                  label="제품설명 - 상세"
                  multiline
                  rows={4}
                />
                <TextField
                  id="outlined-multiline-static"
                  label="제품설명 - 참고"
                  multiline
                  rows={4}
                />
                <TextField
                  id="outlined-multiline-static"
                  label="제품설명 - 소재 및 재고관리"
                  multiline
                  rows={4}
                />
                <TextField
                  id="outlined-multiline-static"
                  label="제품설명 - 안전규정 및 준수"
                  multiline
                  rows={4}
                />
                <TextField
                  id="outlined-multiline-static"
                  label="제품배송시 주의사항"
                  multiline
                  rows={4}
                />
                <TextField
                  id="outlined-multiline-static"
                  label="치수"
                  multiline
                  rows={4}
                />

                <form>
                  <label htmlFor="profile-upload" />
                  <input
                    type="file"
                    multiple="multiple"
                    id="profile-upload"
                    accept=".jpg,.jepg,,png"
                    onChange={onChangeImg}
                  />
                </form>

                <Stack
                  direction="row"
                  spacing={2}
                  sx={{ display: "flex", justifyContent: "center" }}
                  style={{ marginTop: "2%" }}
                >
                  <Button variant="contained" color="success">
                    등록하기
                  </Button>
                </Stack>
              </Box>
            </div>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default ProductAdd;
