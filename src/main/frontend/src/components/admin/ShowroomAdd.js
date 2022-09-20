import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import AdminItemList from "./AdminItemList";
import List from "@mui/material/List";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useEffect } from "react";

const mdTheme = createTheme();

const showroomFileList = []; // 업로드한 파일들을 저장하는 배열

function ShowroomAdd() {
  //완료시 모달창 띄우기
  const [show, setShow] = useState(false);
  const [itemCount, setItemCount] = useState(1);
  const [ShowroomColor, setShowroomColor] = React.useState("red");

  //이미지 업로드
  const onshowroomChangeImg = (e) => {
    console.log(e.target.files);
    const uploadFiles = Array.prototype.slice.call(e.target.files); // 파일선택창에서 선택한 파일들

    uploadFiles.forEach((uploadFile) => {
      showroomFileList.push(uploadFile);
    });
  };

  const onShowroomSubmitHandler = (event) => {
    event.preventDefault();

    const fObj = {};

    const inputArr = [];

    for (let i = 1; i <= itemCount; i++) {
      const inputObj = {};

      const key1 = document.getElementById(`productNo${i}`).name;
      const key2 = document.getElementById(`productLocationLeft${i}`).name;
      const key3 = document.getElementById(`productLocationTop${i}`).name;

      const value1 = document.getElementById(`productNo${i}`).value;
      const value2 = document.getElementById(`productLocationLeft${i}`).value;
      const value3 = document.getElementById(`productLocationTop${i}`).value;

      inputObj[key1] = value1;
      inputObj[key2] = value2;
      inputObj[key3] = value3;

      inputArr.push(inputObj);
    }

    console.log(inputArr);

    fObj["itemList"] = JSON.stringify(inputArr);
    fObj["showroomColor"] = ShowroomColor;
    fObj.uploadFiles = showroomFileList;

    console.log(fObj.uploadFiles);

    console.log(fObj);

    axios({
      url: "http://localhost:8080/api/admin/insertShowroom",
      method: "POST",
      data: fObj,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        setShow(true);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  //쇼룸 색상
  const showroomColor = [
    {
      value: "red",
      label: "빨간색",
    },
    {
      value: "yellow",
      label: "노란색",
    },
    {
      value: "green",
      label: "초록색",
    },
    {
      value: "blue",
      label: "파란색",
    },
    {
      value: "purple",
      label: "보라색",
    },
    {
      value: "white",
      label: "흰색",
    },
    {
      value: "beige",
      label: "베이지",
    },
    {
      value: "black",
      label: "검은색",
    },
    {
      value: "gray",
      label: "회색",
    },
    {
      value: "pink",
      label: "분홍색",
    },
  ];

  const handleShowroomColorChange = (event) => {
    setShowroomColor(event.target.value);
  };

  const handleClose = () => setShow(false);

  const itemAdd = () => {
    setItemCount((prev) => prev + 1);
  };

  const itemDelete = () => {
    setItemCount((prev) => prev - 1);
  };

  const itemTagAdd = () => {
    const tagArr = [];

    for (let i = 1; i <= itemCount; i++) {
      tagArr.push(
        <div key={i}>
          <TextField
            id={`productNo${i}`}
            name="productNo"
            label={`제품번호${i}`}
            type="number"
          />
          <TextField
            id={`productLocationLeft${i}`}
            name="productLocationLeft"
            label={`제품번호${i} - 제품left위치`}
            type="text"
            helperText="ex) 30%"
          />
          <TextField
            id={`productLocationTop${i}`}
            name="productLocationTop"
            label={`제품번호${i} - 제품top위치`}
            type="text"
            helperText="ex) 45%"
          />
          <br />
        </div>
      );
    }
    return tagArr;
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
            onSubmit={onShowroomSubmitHandler}
            id="ShowroomCreateForm"
            encType="multipart/form-data"
          >
            <h1>인테리어쇼룸 등록폼</h1>
            <Box
              sx={{
                "& .MuiTextField-root": { m: 3, width: "30ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  id="outlined-select-color-native"
                  select
                  name="showroomColor"
                  label="쇼룸색상"
                  value={ShowroomColor}
                  onChange={handleShowroomColorChange}
                  SelectProps={{
                    native: true,
                  }}
                  helperText="인테리어 쇼룸 색상을 선택해주세요"
                >
                  {showroomColor.map((c) => (
                    <option key={c.value} value={c.value}>
                      {c.label}
                    </option>
                  ))}
                </TextField>
                <br />
                {itemTagAdd()}
                {/* <TextField
                    id="outlined-required"
                    name="productNo1"
                    label="제품번호1"
                    type="number"
                  />
                  <TextField
                    id="outlined-required"
                    name="productLocationLeft1"
                    label="제품번호1 - 제품left위치"
                    type="text"
                    helperText="ex) left: ''30%''"
                  />
                  <TextField
                    id="outlined-required"
                    name="productLocationTop1"
                    label="제품번호1 - 제품top위치"
                    type="text"
                    helperText="ex) top: ''45%''"
                  />
                  <br /> */}
                {/* <TextField
                  id="outlined-required"
                  name="productNo2"
                  label="제품번호2"
                  type="number"
                />
                <TextField
                  id="outlined-required"
                  name="productLocationLeft2"
                  label="제품번호2 - 제품left위치"
                  type="text"
                />
                <TextField
                  id="outlined-required"
                  name="productLocationTop2"
                  label="제품번호2 - 제품top위치"
                  type="text"
                />
                <br />
                <TextField
                  id="outlined-required"
                  name="productNo3"
                  label="제품번호3"
                  type="number"
                />
                <TextField
                  id="outlined-required"
                  name="productLocationLeft3"
                  label="제품번호3 - 제품left위치"
                  type="text"
                />
                <TextField
                  id="outlined-required"
                  name="productLocationTop3"
                  label="제품번호3 - 제품top위치"
                  type="text"
                />
                <br />
                <TextField
                  id="outlined-required"
                  name="productNo4"
                  label="제품번호4"
                  type="number"
                />
                <TextField
                  id="outlined-required"
                  name="productLocationLeft4"
                  label="제품번호4 - 제품left위치"
                  type="text"
                />
                <TextField
                  id="outlined-required"
                  name="productLocationTop1"
                  label="제품번호4 - 제품top위치"
                  type="text"
                />
                <br />
                <TextField
                  id="outlined-required"
                  name="productNo5"
                  label="제품번호5"
                  type="number"
                />
                <TextField
                  id="outlined-required"
                  name="productLocationLeft5"
                  label="제품번호5 - 제품left위치"
                  type="text"
                />
                <TextField
                  id="outlined-required"
                  name="productLocationTop1"
                  label="제품번호5 - 제품top위치"
                  type="text"
                /> */}
                <Button
                  variant="contained"
                  color="success"
                  type="button"
                  onClick={itemAdd}
                >
                  상품+
                </Button>
                <Button
                  variant="contained"
                  color="success"
                  type="button"
                  onClick={itemDelete}
                >
                  상품-
                </Button>
                <Box
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "46%" },
                  }}
                >
                  <label htmlFor="profile-upload" />
                  <input
                    type="file"
                    multiple="multiple"
                    id="profile-upload"
                    name="uploadFiles"
                    onChange={onshowroomChangeImg}
                  />

                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{ display: "flex", justifyContent: "center" }}
                    style={{ marginTop: "2%" }}
                  >
                    <Button variant="contained" color="success" type="submit">
                      등록하기
                    </Button>
                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>인테리어 쇼룸 등록완료</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        ㅊㅋㅊㅋ쇼룸 등록이 완료 됐습니다.٩(•̤̀ᵕ•̤́๑)ᵒᵏᵎᵎᵎᵎ
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

export default ShowroomAdd;
