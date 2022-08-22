import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";

const products = [
  {
    name: "상품 1",
    desc: "좋은 물건",
    price: "10,000 원",
  },
  {
    name: "상품 2",
    desc: "아주 좋은 물건",
    price: "15,000 원",
  },
  {
    name: "상품 3",
    desc: "무척 좋은 물건",
    price: "20,000 원",
  },
  {
    name: "상품 4",
    desc: "대단히 좋은 물건",
    price: "25,000 원",
  },
  { name: "배송료", desc: "", price: "Free" },
];

const addresses = ["06134", "서울 강남구 강남대로94길 20", "삼오빌딩 5-9층"];
const payments = [
  { name: "카드 종류", detail: "Visa" },
  { name: "카드 소유자명", detail: "김고고" },
  { name: "카드 번호", detail: "xxxx-xxxx-xxxx-1234" },
  { name: "카드 유효기간", detail: "04/2024" },
];

export default function Review() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        주문 내역
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            70,000 원
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            배송 정보
          </Typography>
          <Typography gutterBottom>김고고</Typography>
          <Typography gutterBottom>{addresses.join(", ")}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            결제 정보 확인
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
