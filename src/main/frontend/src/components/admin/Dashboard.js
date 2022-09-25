import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import AdminItemList from "./AdminItemList";

const mdTheme = createTheme();

const moveHome = () => {
  window.location.href = "/";
};

function Dashboard() {
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }} style={{ maxWidth: "1750px" }}>
        <Box>
          <List>
            <AdminItemList />
          </List>
        </Box>

        <Container style={{ marginTop: "0%" }}>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "30ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <div className="completeMain">
              <img
                className="homeLogo"
                src="../../images/homeControllerLogo.png"
              ></img>
              <div className="orderText1">
                HOME CONTROLLER
                <p />
                <div className="orderText2">
                  고객의 만족을 위해 최선을 다하겠습니다.
                </div>
              </div>
              <div className="borderTopBottom">
                <table class="tg" style={{ width: "100%" }}>
                  <tbody></tbody>
                </table>
              </div>
              <button type="button" className="homeButton" onClick={moveHome}>
                홈
              </button>
            </div>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default Dashboard;
