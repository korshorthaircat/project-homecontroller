import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, "20220819", "김고고", "Tupelo, MS", "VISA ⠀•••• 3719", 312.44),
  createData(1, "20220819", "김양양", "London, UK", "VISA ⠀•••• 2574", 866.99),
  createData(2, "20220819", "박사슴", "Boston, MA", "MC ⠀•••• 1253", 100.81),
  createData(3, "20220819", "이펭귄", "Gary, IN", "AMEX ⠀•••• 2000", 654.39),
  createData(
    4,
    "20220819",
    "이자바",
    "Long Branch, NJ",
    "VISA ⠀•••• 5919",
    212.79
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>최근 주문 목록</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>날짜</TableCell>
            <TableCell>주문자</TableCell>
            <TableCell>배송지</TableCell>
            <TableCell>결제 방식</TableCell>
            <TableCell align="right">판매 금액</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{`$${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        더보기
      </Link>
    </React.Fragment>
  );
}
