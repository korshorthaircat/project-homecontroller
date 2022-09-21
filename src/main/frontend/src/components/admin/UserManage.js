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
import "../../css/admin.css";
import Modal from "@mui/material/Modal";
import axios from "axios";
import Paging from "./Paging";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { render } from "@testing-library/react";
import { Prev } from "react-bootstrap/esm/PageItem";

const mdTheme = createTheme();

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

function UserManage() {
  const [open, setOpen] = React.useState(false);
  const [pagingUserList, setPagingUserList] = React.useState([]);

  const handleOpen = (index) => {
    setOpen(true);
    setUserInfo(pagingUserList[index]);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [userInfo, setUserInfo] = React.useState({});

  //updateUser, deleteUser
  let upuserUrl = "http://localhost:8080/api/user/updateUser";
  let deluserUrl = "http://localhost:8080/api/user/deleteUser";

  //db에서 데이터 리스트화
  //state 선언
  const [userList, setUserList] = React.useState([]);

  //부트에서 적어둔 메서드 호출 getUserList
  let listUrl = "http://localhost:8080/api/user/getUserList";

  //axios로 setUserList에 담아줌
  const list = () => {
    axios
      .get(listUrl)
      .then((response) => {
        setUserList(response.data.data);
      })
      //오류나면 오류메세지
      .catch((e) => {
        console.log(e);
      });
  };

  React.useEffect(() => {
    list();
    console.log(userList);
  }, []);

  //수정, 삭제 서브밋 처리 함수
  const handleSubmit = (e) => {
    e.preventDefault();
    if (document.activeElement.value === "update") {
      axios({
        url: upuserUrl,
        method: "put",
        data: userInfo,
      })
        .then((response) => {
          setOpen(false);
          setUserList(response.data);
          window.location.href = "/UserManage";
        })
        .catch((e) => {
          console.log("update오류" + e);
        });
    } else {
      axios({
        url: deluserUrl,
        method: "delete",
        data: userInfo,
      })
        .then((response) => {
          setOpen(false);
          setUserList(response.data);
          window.location.href = "/UserManage";
        })
        .catch((e) => {
          console.log("delete오류" + e);
        });
    }
  };

  //회원정보 수정
  const handleChange = (e) => {
    const updateUser = {
      ...userInfo,
      [e.target.name]: e.target.value,
    };
    setUserInfo(updateUser);
  };

  //페이지에 따라 데이터 5개씩 잘라넣는 userList
  useEffect(() => {
    setPagingUserList(userList.slice(offset, offset + limit));
  }, [userList]);

  //페이지네이션
  const [limit, setLimit] = React.useState(5);
  const [page, setPage] = React.useState(1);
  const offset = (page - 1) * limit;
  const handlePaging = (currentPage) => {
    setPage((prev) => currentPage);
  };

  //페이지 바뀔 때마다 잘라넣는 userList 변경
  useEffect(() => {
    setPagingUserList((prev) => userList.slice(offset, offset + limit));
  }, [page, offset, limit]);

  const changeLimit = (e) => {
    setLimit((prev) => e.target.value);
    setPage(1);
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
          <h1>회원 관리폼</h1>
          {/*페이지네이션 표출할 데이터양*/}
          <label className="orderOption">
            페이지 당 표시할 게시물 수:&nbsp;
            <select type="number" value={limit} onChange={changeLimit}>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
            </select>
          </label>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "30ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>이름</TableCell>
                    <TableCell align="center">아이디</TableCell>
                    <TableCell align="center">닉네임</TableCell>
                    <TableCell align="center">전화번호</TableCell>
                    <TableCell align="center">가입일</TableCell>
                    <TableCell align="center">수정</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* 가져온 data mapping ?절 사용(map 뒤의 u는 아무거나 가능)*/}
                  {userList ? (
                    pagingUserList &&
                    pagingUserList.map((u, index) => (
                      <TableRow
                        key={u.userName}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {u.userName}
                        </TableCell>
                        <TableCell align="center">{u.userId}</TableCell>
                        <TableCell align="center">{u.userNickname}</TableCell>
                        <TableCell align="center">{u.userTel}</TableCell>
                        <TableCell align="center">{u.userJoinYmd}</TableCell>
                        <TableCell align="center">
                          <Button
                            onClick={() => handleOpen(index)}
                            id={`detailBtn${index}`}
                            sx={{
                              border: "1px solid lightgray",
                              backgroundColor: "#fff",
                              borderRadius: "5px",
                              width: "70px",
                              height: "45px",
                              alignItems: "center",
                            }}
                          >
                            <img className="AdminEdit" src="images/edit.png" />
                            수정
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell>조회된 데이터가 없습니다.</TableCell>
                    </TableRow>
                  )}
                  {/* 처음 tablerow에서 키값 잡아준후 여기까지 매핑*/}
                </TableBody>
              </Table>
            </TableContainer>

            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
            >
              <form onSubmit={handleSubmit}>
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    sx={{
                      fontSize: "25px",
                      fontWeight: "5rem",
                      backgroundColor: "rgb(178, 204, 90)",
                    }}
                  >
                    회원 정보
                  </Typography>

                  <TableContainer>
                    <Table>
                      <TableRow>
                        <TableCell component={"th"} sx={modalstyle}>
                          이름
                        </TableCell>
                        <TableCell>
                          <input
                            type="text"
                            style={{ border: "none" }}
                            name="userName"
                            onChange={handleChange}
                            placeholder="userName"
                            value={userInfo.userName}
                          />
                        </TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell component={"th"} sx={modalstyle}>
                          아이디
                        </TableCell>
                        <TableCell>
                          <input
                            type="text"
                            style={{ border: "none" }}
                            name="userId"
                            onChange={handleChange}
                            placeholder="userId"
                            value={userInfo.userId}
                          />
                        </TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell component={"th"} sx={modalstyle}>
                          닉네임
                        </TableCell>
                        <TableCell>
                          <input
                            type="text"
                            style={{ border: "none" }}
                            name="userNickname"
                            onChange={handleChange}
                            placeholder="usernickname"
                            value={userInfo.userNickname}
                          />
                        </TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell component={"th"} sx={modalstyle}>
                          주소
                        </TableCell>
                        <TableCell>
                          <input
                            type="text"
                            style={{ border: "none", width: "500px" }}
                            name="userAddr"
                            onChange={handleChange}
                            placeholder="useraddr"
                            value={userInfo.userAddr}
                          />
                        </TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell component={"th"} sx={modalstyle}>
                          상세주소
                        </TableCell>
                        <TableCell>
                          <input
                            type="text"
                            style={{ border: "none" }}
                            name="userAddrDetail"
                            onChange={handleChange}
                            placeholder="user_addr_detail"
                            value={userInfo.userAddrDetail}
                          />
                        </TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell component={"th"} sx={modalstyle}>
                          우편번호
                        </TableCell>
                        <TableCell>
                          <input
                            type="text"
                            style={{ border: "none" }}
                            name="userZip"
                            onChange={handleChange}
                            placeholder="userzipcode"
                            value={userInfo.userZip}
                          />
                        </TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell component={"th"} sx={modalstyle}>
                          메일
                        </TableCell>
                        <TableCell>
                          <input
                            type="email"
                            style={{ border: "none" }}
                            name="userMail"
                            onChange={handleChange}
                            placeholder="usermail"
                            value={userInfo.userMail}
                          />
                        </TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell component={"th"} sx={modalstyle}>
                          전화번호
                        </TableCell>
                        <TableCell>
                          <input
                            type="tel"
                            style={{ border: "none" }}
                            name="userTel"
                            onChange={handleChange}
                            placeholder="usertel"
                            value={userInfo.userTel}
                          />
                        </TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell component={"th"} sx={modalstyle}>
                          가입일자
                        </TableCell>
                        <TableCell>
                          <input
                            type="datetime"
                            style={{ border: "none" }}
                            name="userJoinYmd"
                            onChange={handleChange}
                            placeholder="userjoinymd"
                            value={userInfo.userJoinYmd}
                          />
                        </TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell component={"th"} sx={modalstyle}>
                          포인트
                        </TableCell>
                        <TableCell>
                          <input
                            type="number"
                            style={{ border: "none" }}
                            name="userPoint"
                            onChange={handleChange}
                            placeholder="userpoint"
                            value={userInfo.userPoint}
                          />
                        </TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell component={"th"} sx={modalstyle}>
                          마케팅 수신여부
                        </TableCell>
                        <TableCell>
                          <input
                            type="text"
                            style={{ border: "none" }}
                            name="userMarketing"
                            onChange={handleChange}
                            placeholder="y"
                            value={userInfo.userMarketing}
                          />
                        </TableCell>
                      </TableRow>
                    </Table>
                  </TableContainer>
                  <span class="buttonSpan">
                    <Button
                      type="submit"
                      sx={{ marginTop: "20px" }}
                      value="update"
                    >
                      <img className="AdminEdit" src="images/edit.png" />
                      수정
                    </Button>
                    <Button
                      type="submit"
                      sx={{ marginTop: "20px" }}
                      value="delete"
                    >
                      <img className="AdminEdit2" src="images/delete.png" />
                      삭제
                    </Button>
                  </span>
                </Box>
              </form>
            </Modal>
          </Box>
        </Container>
      </Box>
      <Paging
        total={userList.length}
        limit={limit}
        page={page}
        handlePaging={handlePaging}
      />
    </ThemeProvider>
  );
}

export default UserManage;
