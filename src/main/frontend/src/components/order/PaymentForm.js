import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        결제 수단 선택
      </Typography>
      <Grid container spacing={3}>
        <FormControl>
          {/* <FormLabel id="demo-row-radio-buttons-group-label">
            결제 수단 선택
          </FormLabel> */}
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="disabled"
              disabled
              control={<Radio />}
              label="신용카드"
            />
            <FormControlLabel
              value="disabled"
              disabled
              control={<Radio />}
              label="무통장입금"
            />
            <FormControlLabel
              value="disabled"
              disabled
              control={<Radio />}
              label="계좌이체"
            />
            <FormControlLabel
              value="카카오페이"
              control={<Radio />}
              label="카카오페이"
            />
            <FormControlLabel
              value="disabled"
              disabled
              control={<Radio />}
              label="네이버페이"
            />
          </RadioGroup>
        </FormControl>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="success" name="saveCard" value="yes" />}
            label="이 결제 정보를 다음 번 결제를 위해 기억합니다. "
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
