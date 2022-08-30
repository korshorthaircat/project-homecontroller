import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import AdminItemList from "./AdminItemList";
import "../../css/ad_productList.css"


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
  productUpdate
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
  createData(
    456,
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
  createData(
    789,
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
  createData(
    987,
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
  createData(
    654,
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

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "productNo",
    numeric: false,
    disablePadding: true,
    label: "제품번호",
  },
  {
    id: "productName",
    numeric: true,
    disablePadding: false,
    label: "제품명",
  },
  {
    id: "productState",
    numeric: true,
    disablePadding: false,
    label: "제품판매상태",
  },
  {
    id: "productSize",
    numeric: true,
    disablePadding: false,
    label: "제품사이즈",
  },
  {
    id: "productRgsde",
    numeric: true,
    disablePadding: false,
    label: "제품등록일",
  },
  {
    id: "productUpdde",
    numeric: true,
    disablePadding: false,
    label: "제품수정일",
  },
  {
    id: "productPrice",
    numeric: true,
    disablePadding: false,
    label: "제품가격",
  },
  {
    id: "productType",
    numeric: true,
    disablePadding: false,
    label: "코드",
  },
  {
    id: "productInvntry",
    numeric: true,
    disablePadding: false,
    label: "재고량",
  },
  {
    id: "productRemark",
    numeric: true,
    disablePadding: false,
    label: "비고",
  },
  {
    id: "productUpdate",
    numeric: true,
    disablePadding: false,
    label: "수정하기",
  },
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          {/* 전체체크박스 */}
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all productName",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="center"
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {/* 상단 선택되었다는 바 */}
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 80%", fontWeight: "700" }}
          variant="h5"
          id="tableTitle"
          component="div"
        >
          상품 조회
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = productData.map((n) => n.productNo);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, productNo) => {
    const selectedIndex = selected.indexOf(productNo);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, productNo);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (productNo) => selected.indexOf(productNo) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - productData.length) : 0;

  const handleClickUpdate = () => {
    document.location.href("/");
  };

  return (
    <div style={{ display: "flex" }}>
      <div>
        <AdminItemList />
      </div>
      <div>
        <Box sx={{ width: "100%", margin: "50px 0px 30px 100px" }}>
          <Paper sx={{ width: "100%", mb: 2 }}>
            {/* 삭제되는 수량뜨는 툴바 */}
            <EnhancedTableToolbar numSelected={selected.length} />
            <TableContainer>
              <Table
                sx={{ minWidth: 750 }}
                aria-labelledby="tableTitle"
                size={dense ? "small" : "medium"}
              >
                {/* 체크박스관련 */}
                <EnhancedTableHead
                  numSelected={selected.length}
                  order={order}
                  orderBy={orderBy}
                  onSelectAllClick={handleSelectAllClick}
                  onRequestSort={handleRequestSort}
                  rowCount={productData.length}
                />
                <TableBody>
                  {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
                  {stableSort(productData, getComparator(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      const isItemSelected = isSelected(row.productNo);
                      const labelId = `enhanced-table-checkbox-${index}`;

                      return (
                        /* 선택한거 외의 나머지 */
                        <TableRow
                          hover
                          onClick={(event) => handleClick(event, row.productNo)}
                          role="checkbox"
                          aria-checked={isItemSelected}
                          tabIndex={-1}
                          key={row.productNo}
                          selected={isItemSelected}
                        >
                          <TableCell padding="checkbox">
                            <Checkbox
                              color="primary"
                              checked={isItemSelected}
                              inputProps={{
                                "aria-labelledby": labelId,
                              }}
                            />
                          </TableCell>

                          <TableCell
                            component="th"
                            id={labelId}
                            scope="row"
                            padding="none"
                            align="center"
                          >
                            {row.productNo}
                          </TableCell>

                          {/* 내용 */}
                          <TableCell align="center">
                            {row.productName}
                          </TableCell>
                          <TableCell align="center">
                            {row.productState}
                          </TableCell>
                          <TableCell align="center">
                            {row.productSize}
                          </TableCell>
                          <TableCell align="center">
                            {row.productRgsde}
                          </TableCell>
                          <TableCell align="center">
                            {row.productUpdde}
                          </TableCell>
                          <TableCell align="center">
                            {row.productPrice}
                          </TableCell>
                          <TableCell align="center">
                            {row.productType}
                          </TableCell>
                          <TableCell align="center">
                            {row.productInvntry}
                          </TableCell>
                          <TableCell align="center">
                            {row.productRemark}
                          </TableCell>

                          <TableCell align="center">
                            <button
                              onClick={handleClickUpdate}
                              className="updateButton"
                              style={{
                                verticalAlign: "middle",
                              }}
                            >
                              <span>수정</span>
                            </button>
                          </TableCell>

                          {/* if({row.productNo === 존재할 때 }){  
                              버튼이 보인다....
                          } */}
                        </TableRow>
                      );
                    })}
                  {emptyRows > 0 && (
                    <TableRow
                      style={{
                        height: (dense ? 33 : 53) * emptyRows,
                      }}
                    >
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>

            {/* 하단 페이지네이션 */}
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={productData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
          <FormControlLabel
            control={<Switch checked={dense} onChange={handleChangeDense} />}
            label="Dense padding"
          />
        </Box>
      </div>
    </div>
  );
}
