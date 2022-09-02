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

function createData(
  productNo,
  productName,
  productState,
  productSize,
  productRgsde,
  productUpdde,
  productPrice,
  productType,
  productInvntry,
  productRemark,
  productUpdate,
  productDelete
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
    productInvntry,
    productRemark,
    productUpdate,
    productDelete,
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
  }, []);

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
                <Table sx={{ minWidth: 1500 }} aria-label="simple table">
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
                      <TableCell align="center">수정하기</TableCell>
                      <TableCell align="center">삭제하기</TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {productList.data ? (
                      productList.data.map((r, index) => (
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
                            sx={{ width: "3%", padding: "0px" }}
                          >
                            {r.productNo}
                          </TableCell>
                          <TableCell
                            align="center"
                            sx={{ width: "10%", padding: "0px" }}
                          >
                            {r.productName}
                          </TableCell>
                          <TableCell
                            align="center"
                            sx={{ width: "3%", padding: "0px" }}
                          >
                            {r.productState}
                          </TableCell>
                          <TableCell
                            align="center"
                            sx={{ width: "10%", padding: "0px" }}
                          >
                            {r.productState}
                          </TableCell>
                          <TableCell
                            align="center"
                            sx={{ width: "3%", padding: "0px" }}
                          >
                            {r.productState}
                          </TableCell>
                          <TableCell
                            align="center"
                            sx={{ width: "10%", padding: "0px" }}
                          >
                            {r.productState}
                          </TableCell>
                          <TableCell
                            align="center"
                            sx={{ width: "3%", padding: "0px" }}
                          >
                            {r.productPrice}
                          </TableCell>
                          <TableCell
                            align="center"
                            sx={{ width: "3%", padding: "0px" }}
                          >
                            {r.productState}
                          </TableCell>
                          <TableCell
                            align="center"
                            sx={{ width: "3%", padding: "0px" }}
                          >
                            {r.productRgsde}
                          </TableCell>
                          <TableCell
                            align="center"
                            sx={{ width: "3%", padding: "0px" }}
                          >
                            {r.productUpdde}
                          </TableCell>
                          <TableCell
                            align="center"
                            sx={{ width: "3%", padding: "0px" }}
                          >
                            {}
                          </TableCell>
                          <TableCell
                            align="center"
                            sx={{ width: "3%", padding: "0px" }}
                          >
                            {/* {productList.map((productInfo) => ( */}
                            <Link
                              // to={`/admin3/${productList.productNo}`}
                              to={"/admin3"}
                              // key={productList.productNo}
                              state={{
                                obj: {
                                  data: r.productNo,
                                },
                              }}
                            >
                              수정
                            </Link>
                            {/* ))} */}
                          </TableCell>
                          <TableCell
                            align="center"
                            sx={{ width: "3%", padding: "0px" }}
                          >
                            <Button
                              onClick={() => handleUpdate(index)}
                              id={`Btn${index}`}
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
                              />
                              삭제
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>조회된 데이터가 없습니다.</TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Container>
        </Box>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={productData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{ alignItems: "center" }}
        />
      </Paper>
    </ThemeProvider>
  );
}
