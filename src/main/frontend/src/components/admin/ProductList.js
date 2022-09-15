import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AdminItemList from "./AdminItemList";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { TablePagination, Toolbar } from "@mui/material";
import "../../css/admin.css";
import Modal from "@mui/material/Modal";
import axios from "axios";
import { API_BASE_URL } from "../../app-config";
import { getUserList } from "../../service/ApiService";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import TableSortLabel from "@mui/material/TableSortLabel";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import "../../css/ad_productList.css";
import { data } from "jquery";
import { Link } from "react-router-dom";
import { useCallback } from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

function createData(
  productNo,
  productName,
  productState,
  productSize,
  productRgsde,
  productUpdde,
  productPrice,
  productType,
  productInventory,
  productRemark,
  productUpdate,
  productDelete,
  commonCodeName
) {
  return {
    productNo,
    productName,
    productState,
    productSize,
    productRgsde,
    productUpdde,
    productPrice,
    productType,
    productInventory,
    productRemark,
    productUpdate,
    productDelete,
    commonCodeName,
  };
}
const productData = [
  createData(
    123,
    "1인용쇼파",
    "Y",
    "M",
    "2022.08.05",
    "2022.08.07",
    "117,300원",
    "A123",
    123,
    "",
    "",
    "",
    ""
  ),
];
const mdTheme = createTheme();

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  height: "75%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  margin: 0,
  padding: 0,
};

const optModalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  height: "40%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  margin: 0,
  padding: 0,
};

export default function EnhancedTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const [productList, setProductList] = React.useState([]);

  let listUrl = "http://localhost:8080/api/admin/admin2";

  const [update, setUpdate] = React.useState(false);
  const handleUpdate = (index) => {
    setUpdate(true);
    setProductInfo(productList.data[index]);
  };
  const [productInfo, setProductInfo] = React.useState({});
  const list = () => {
    axios
      .get(listUrl, {})
      .then((response) => {
        setProductList(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  React.useEffect(() => {
    list();
  }, [productList]);

  const useConfirm = (message = null, onConfirm, onCancel) => {
    if (!onConfirm || typeof onConfirm !== "function") {
      return;
    }

    const confirmAction = () => {
      if (window.confirm(message)) {
        onConfirm();
      }
    };

    return confirmAction;
  };
  const deleteConfirm = () => console.log("삭제했습니다.");
  const confirmDelete = useConfirm("삭제하시겠습니까?", deleteConfirm);

  //DELETE 요청으로
  const [product, setProduct] = useState([]);

  const onRemove = useCallback((productNo) => {
    // const productList = {
    //   id: product,
    // };

    axios({
      method: "delete",
      url: API_BASE_URL + "/api/admin/deleteProduct",
      data: { productNo: productNo },
    }).then((response) => {
      setProduct(response.data.data);
    });
  }, []);

  const [optionCommonCode, setOptionCommonCode] = useState(""); //새로 추가될 컬러옵션
  const [optionInventory, setOptionInventory] = useState(0); //새로 추가될 컬러옵션 제품의 재고량

  const onAddCommonCodeHandler = (event) => {
    setOptionCommonCode(event.currentTarget.value);
    console.log(event.currentTarget.value);
  };

  const onAddInventoryHandler = (event) => {
    setOptionInventory(event.currentTarget.value);
    console.log(event.currentTarget.value);
  };

  const onAddOption = useCallback(
    (productNo, optionCommonCode, optionInventory) => {
      axios({
        method: "post",
        url: API_BASE_URL + "/api/admin/addOption",
        data: {
          productNo: productNo,
          optionCommonCode: optionCommonCode,
          optionInventory: optionInventory,
        },
      }).then((response) => {
        setProduct(response.data.data);
      });
    },
    []
  );

  const fileList = []; // 업로드한 파일들을 저장하는 배열

  //이미지 업로드
  const onChangeImg = (e) => {
    console.log(e.target.files);
    const uploadFiles = Array.prototype.slice.call(e.target.files); // 파일선택창에서 선택한 파일들

    uploadFiles.forEach((uploadFile) => {
      fileList.push(uploadFile);
    });
  };

  const onProductOptSubmitHandler = (event) => {
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

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ThemeProvider theme={mdTheme}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <Box sx={{ display: "flex" }} style={{ maxWidth: "1300px" }}>
          <Box>
            <List>
              <AdminItemList />
            </List>
          </Box>

          <Container style={{ margin: "50px 0px 0px 100px" }}>
            <h1 style={{ marginBottom: "30px" }}>상품 조회</h1>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "30ch" },
                width: "1300px",
              }}
              noValidate
              autoComplete="off"
            >
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 1300 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">제품번호</TableCell>
                      <TableCell align="center">제품명</TableCell>
                      <TableCell align="center">판매상태</TableCell>
                      <TableCell align="center">카테고리</TableCell>
                      <TableCell align="center">색상</TableCell>
                      <TableCell align="center">사이즈</TableCell>
                      <TableCell align="center">가격</TableCell>
                      <TableCell align="center">재고량</TableCell>
                      <TableCell align="center">등록일</TableCell>
                      <TableCell align="center">수정일</TableCell>
                      <TableCell align="center">비고</TableCell>
                      <TableCell align="center">수정</TableCell>
                      <TableCell align="center">삭제</TableCell>
                      <TableCell align="center">옵션추가</TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {productList.data ? (
                      productList.data.map((r) => (
                        <TableRow
                          key={r.productNo}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell
                            component="th"
                            scope="row"
                            align="center"
                            sx={{ padding: "0px" }}
                          >
                            {r.productNo}
                          </TableCell>
                          <TableCell align="center" sx={{ padding: "0px" }}>
                            {r.productName}
                          </TableCell>
                          <TableCell align="center" sx={{ padding: "0px" }}>
                            {r.productState}
                          </TableCell>
                          <TableCell align="center" sx={{ padding: "0px" }}>
                            {r.productCategoryName}
                          </TableCell>
                          <TableCell align="center" sx={{ padding: "0px" }}>
                            {r.commonCodeName}
                          </TableCell>
                          <TableCell align="center" sx={{ padding: "0px" }}>
                            {r.productSize}
                          </TableCell>
                          <TableCell align="center" sx={{ padding: "0px" }}>
                            {r.productPrice}원
                          </TableCell>
                          <TableCell align="center" sx={{ padding: "0px" }}>
                            {r.productInventory}개
                          </TableCell>
                          <TableCell align="center" sx={{ padding: "0px" }}>
                            {r.productRgsde}
                          </TableCell>
                          <TableCell align="center" sx={{ padding: "0px" }}>
                            {r.productUpdde}
                          </TableCell>
                          <TableCell align="center" sx={{ padding: "0px" }}>
                            {}
                          </TableCell>

                          <TableCell align="center" sx={{ padding: "0px" }}>
                            {/* {productList.map((productInfo) => ( */}

                            <Button
                              sx={{
                                border: "1px solid lightgray",
                                backgroundColor: "#fff",
                                borderRadius: "5px",
                                width: "70px",
                                height: "45px",
                                alignItems: "center",
                              }}
                            >
                              <Link
                                to={"/admin3"}
                                state={{
                                  obj: {
                                    data: r.productNo,
                                  },
                                }}
                                value="update"
                              >
                                {" "}
                                <img
                                  className="AdminEdit"
                                  src="images/edit.png"
                                  alt="AdminEdit"
                                />
                                수정
                              </Link>
                            </Button>

                            {/* ))} */}
                          </TableCell>
                          <TableCell align="center" sx={{ padding: "0px" }}>
                            <Button
                              onClick={() => {
                                onRemove(r.productNo);
                                confirmDelete();
                                window.location.replace("/admin2");
                              }}
                              id={`Btn${r}`}
                              sx={{
                                border: "1px solid lightgray",
                                backgroundColor: "#fff",
                                borderRadius: "5px",
                                width: "70px",
                                height: "45px",
                                alignItems: "center",
                              }}
                            >
                              <img
                                className="AdminEdit"
                                src="images/edit.png"
                                alt="AdminEdit"
                              />
                              삭제
                            </Button>
                          </TableCell>

                          <TableCell align="center" sx={{ padding: "0px" }}>
                            <Button
                              onClick={handleOpen}
                              id={`Btn${r}`}
                              sx={{
                                border: "1px solid lightgray",
                                backgroundColor: "#fff",
                                borderRadius: "5px",
                                width: "70px",
                                height: "45px",
                                alignItems: "center",
                              }}
                            >
                              <img
                                className="AdminEdit"
                                src="images/edit.png"
                                alt="AdminEdit"
                              />
                              옵션 추가
                            </Button>
                            <Modal
                              open={open}
                              onClose={handleClose}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box sx={optModalStyle}>
                                <Typography
                                  id="modal-modal-title"
                                  variant="h6"
                                  component="h2"
                                >
                                  {r.productName}의 제품 옵션 추가하기
                                </Typography>
                                <Typography
                                  id="modal-modal-description"
                                  sx={{ mt: 2 }}
                                >
                                  추가하고자 하는 옵션의 컬러(공통코드), 재고량,
                                  이미지를 추가하세요.
                                </Typography>
                                <Grid>
                                  <TextField
                                    required
                                    id="addOptionCommonCode"
                                    name="addOptionCommonCode"
                                    label="옵션 추가(공통코드)"
                                    variant="standard"
                                    onChange={onAddCommonCodeHandler}
                                  />
                                </Grid>
                                <Grid>
                                  <TextField
                                    required
                                    id="addOptionInventory"
                                    name="addOptionInventory"
                                    label="옵션 추가(재고량)"
                                    variant="standard"
                                    onChange={onAddInventoryHandler}
                                  />
                                </Grid>
                                <Grid>
                                  <label htmlFor="profile-upload" />
                                  <input
                                    type="file"
                                    multiple="multiple"
                                    id="profile-upload"
                                    name="uploadFiles"
                                    onChange={onChangeImg}
                                  />
                                </Grid>

                                <Button
                                  variant="contained"
                                  color="success"
                                  type="submit"
                                  onSubmit={onProductOptSubmitHandler}
                                  id={`Btn${r}`}
                                >
                                  제품 옵션 추가하기
                                </Button>
                              </Box>
                            </Modal>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell>조회된 데이터가 없습니다.</TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Container>
        </Box>
      </Paper>
    </ThemeProvider>
  );
}
