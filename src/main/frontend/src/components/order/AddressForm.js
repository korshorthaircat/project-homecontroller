import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        배송 정보 입력
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="deliveryName"
            name="deliveryName"
            label="수령인 이름"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="deliveryTel"
            name="deliveryTel"
            label="수령인 연락처"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="deliveryZipcode"
            name="deliveryZipcode"
            label="우편번호"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="deliveryAddress"
            name="deliveryAddress"
            label="주소(시, 구, 동)"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="deliveryDetailAddress"
            name="deliveryDetailAddress"
            label="상세 주소"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="deliveryMessage"
            name="deliveryMessage"
            label="배송 메세지"
            fullWidth
            helperText="예) 경비실에 맡겨 주세요."
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color="success" name="saveAddress" value="yes" />
            }
            label="이 주소 정보를 결제를 위해 사용합니다. "
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
