import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../css/board.css";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha, useTheme } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import axios from "axios";

function createData(name, calories, carbs, protein, test) {
  return { name, calories, carbs, protein, test };
}

const rows = [
  createData(1, "문의합니다", "김윤정", "2022-09-15", "답변대기"),
  createData(2, "환불신청이요", "오샛별", "2022-09-15", "답변완료"),
  createData(3, "교환신청이요", "차영현", "2022-09-15", "답변대기"),
  createData(4, "언제배송되나요?", "이기쁨", "2022-09-15", "답변완료"),
  createData(5, "불량이요", "강효주", "2022-09-15", "답변대기"),
];

//반품, 교환, 취소
//답변대기, 답변완료

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  height: "75%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  margin: 0,
  padding: 0,
};

const modalstyle = {
  backgroundColor: "lightgray",
  width: "30%",
};

const Board = () => {
  const [open, setOpen] = React.useState(false);
  const [inquiryList, setInquiryList] = React.useState([]);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  let inquiryListUrl = "http://localhost:8080/api/inquiry/getInquiryList";

  const list = () => {
    // axios
    //   .get(inquiryListUrl)
    //   .then((response) => {
    //     setInquiryList(response.data.data);
    //     console.log(response);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });

    axios({
      url: inquiryListUrl,
      method: "get",
    })
      .then((response) => {
        console.log(response.data.data);
        setInquiryList(response.data.data);
      })
      .catch((e) => {});
  };

  React.useEffect(() => {
    list();
  }, []);

  return (
    <div className="wrap">
      <h3>고객센터</h3>
      <h5>문의 게시판</h5>

      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 400,
          float: "right",
        }}
      >
        {/* <IconButton sx={{ p: '10px' }} aria-label="menu">
                <MenuIcon />
              </IconButton> */}
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="주문내역 검색"
          inputProps={{ "aria-label": "search google maps" }}
        />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
        {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
              <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
                <DirectionsIcon />
              </IconButton> */}
      </Paper>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{ width: "150px" }}>
                번호
              </TableCell>

              <TableCell align="center">제목</TableCell>
              <TableCell align="center" sx={{ width: "200px" }}>
                작성자
              </TableCell>
              <TableCell align="center" sx={{ width: "200px" }}>
                작성일
              </TableCell>
              <TableCell align="center" sx={{ width: "200px" }}>
                처리현황
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {inquiryList.map((a) => (
              <TableRow
                key={a.inquiryNo}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                onClick={() => handleOpen(true)}
              >
                <TableCell component="th" scope="row" align="center">
                  {a.inquiryNo}
                </TableCell>
                <TableCell align="center">{a.inquiryTitle}</TableCell>

                <TableCell align="center">{a.inquiryNo}</TableCell>
                <TableCell align="center">{a.inquiryRgsdate}</TableCell>
                <TableCell align="center">{a.inquiryState}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Button
        variant="contained"
        color="success"
        onClick={() => handleOpen(true)}
        sx={{ float: "right" }}
      >
        글쓰기
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
      >
        <form>
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              sx={{
                fontSize: "25px",
                fontWeight: "5rem",
                backgroundColor: "rgb(178, 204, 90)",
              }}
            >
              게시글 작성
            </Typography>

            <TableContainer>
              <Table>
                {inquiryList.map((a) => (
                  <>
                    <TableRow>
                      <TableCell component={"th"} sx={modalstyle}>
                        제목
                      </TableCell>
                      <TableCell>
                        <select name="type">
                          <option selected="selected">
                            제목을 선택하세요.
                          </option>
                          <option value="product">상품 문의</option>
                          <option value="delivery">배송 문의</option>
                          <option value="exchange/return/cancel">
                            교환/반품/취소 문의
                          </option>
                          <option value="order">주문/입금확인 문의</option>
                          <option value="etc">기타 문의</option>
                        </select>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component={"th"} sx={modalstyle}>
                        내용
                      </TableCell>
                      <TableCell>
                        <textarea
                          type="text"
                          style={{ border: "none" }}
                          name="userName"
                          placeholder="게시판 문의시 아래 내용을 기입해 주셔야 
                            빠르게  처리 가능합니다.
                            
                            단,의무사항은 아니므로 연락처 작성을 원하시지 않으시다면 
                            연락처는 남겨주지 않으셔도 됩니다.
                            
                            ※이전에 상담하신 내용이 있으시다면 상담받으신 내용을 하단에 기재 부탁드립니다.
                            ※비회원 또는 타사이트 구매는 주문 번호를 반드시 기입해 주세요.
                            ※게시글 답변 확인 후, 대댓글로 남겨주시는 경우 다른 고객님의 문의에 밀려 확인이 누락될 수 있으니 꼭 [새글]로 재문의 남겨주시길 바랍니다.
                            
                            ▶ 주문번호 : 
                            ▶ 주문자 성함 : 
                            ▶ 연락처 :
                            ▶ 문의 내용 :
                            ▶ 이전 문의 내용 :"
                        >
                          {a.inquiryContent}
                        </textarea>
                      </TableCell>
                    </TableRow>
                  </>
                ))}
              </Table>
            </TableContainer>

            <Typography
              id="modal-modal-title"
              sx={{
                fontSize: "25px",
                fontWeight: "5rem",
                backgroundColor: "rgb(178, 204, 90)",
              }}
            >
              답변
            </Typography>

            <TableRow>
              <TableCell component={"th"} sx={modalstyle}>
                답변 내용
              </TableCell>
              <TableCell>
                <textarea
                  type="text"
                  style={{ border: "none" }}
                  name="userName"
                  placeholder="게시판 문의시 아래 내용을 기입해 주셔야 
                            빠르게  처리 가능합니다.
                            
                            단,의무사항은 아니므로 연락처 작성을 원하시지 않으시다면 
                            연락처는 남겨주지 않으셔도 됩니다.
                            
                            ※이전에 상담하신 내용이 있으시다면 상담받으신 내용을 하단에 기재 부탁드립니다.
                            ※비회원 또는 타사이트 구매는 주문 번호를 반드시 기입해 주세요.
                            ※게시글 답변 확인 후, 대댓글로 남겨주시는 경우 다른 고객님의 문의에 밀려 확인이 누락될 수 있으니 꼭 [새글]로 재문의 남겨주시길 바랍니다.
                            
                            ▶ 주문번호 : 
                            ▶ 주문자 성함 : 
                            ▶ 연락처 :
                            ▶ 문의 내용 :
                            ▶ 이전 문의 내용 :"
                />
              </TableCell>
            </TableRow>

            <span class="buttonSpan">
              <Button
                type="submit"
                value="update"
                variant="contained"
                color="success"
              >
                등록
              </Button>

              <Button
                type="submit"
                value="update"
                variant="contained"
                color="success"
              >
                수정
              </Button>

              <Button
                type="submit"
                value="delete"
                variant="contained"
                color="success"
              >
                삭제
              </Button>
            </span>
          </Box>
        </form>
      </Modal>
    </div>
  );
};

export default Board;
