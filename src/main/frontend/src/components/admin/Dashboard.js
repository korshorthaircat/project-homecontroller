import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import Chart from "./Chart";
import Orders from "./Orders";
import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import EventNote from '@mui/icons-material/EventNote';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import AdUnitsIcon from "@mui/icons-material/AdUnits";

const mdTheme = createTheme();

function Dashboard() {
  const [openProduct, setOpenProduct] = React.useState(false);
  const [openOrder, setOpenOrder] = React.useState(false);
  
  const handleProductClick = (e) => {
    setOpenProduct(!openProduct);
  };

  const handleOrderClick = (e) => {
    setOpenOrder(!openOrder);
  };

  return (
    
    <ThemeProvider theme={mdTheme} >
      <Box sx={{ display: "flex"}} style={{maxWidth:"1750px"}}>
        <Box>
          <List
          style={{width:"250px", marginLeft: "200px", marginRight:"100px"}}
          sx={{ bgcolor: 'background.paper' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
          <ListSubheader component="div" id="nested-list-subheader">
           <p  style={{fontSize: "25px"}}><b>ADMIN </b></p>
          </ListSubheader>
                }
           >
            <Divider sx={{ my: 3 }} />
            <ListItemButton onClick={() => {handleProductClick()}}>
              <ListItemIcon>
                <ShoppingCartIcon />
              </ListItemIcon>
              <ListItemText primary="상품 관리" />
              {openProduct ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            
            <Collapse in={openProduct} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <EventNote />
                  </ListItemIcon>
                  <ListItemText primary="상품 등록" />
                </ListItemButton>

                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <EventNote />
                  </ListItemIcon>
                  <ListItemText primary="상품 조회" />
                </ListItemButton>

                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <EventNote />
                  </ListItemIcon>
                  <ListItemText primary="상품 수정" />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="고객 관리" />
            </ListItemButton>
            
            <ListItemButton onClick={() => {handleOrderClick()}}>
              <ListItemIcon>
                <AdUnitsIcon />
              </ListItemIcon>
              <ListItemText primary="주문 관리" />
              {openOrder ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            
            <Collapse in={openOrder} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <EventNote />
                  </ListItemIcon>
                  <ListItemText primary="주문 목록" />
                </ListItemButton>

                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <EventNote />
                  </ListItemIcon>
                  <ListItemText primary="주문 상세" />
                </ListItemButton>
              </List>
            </Collapse>
            <Divider sx={{ my: 1 }} />

          </List>
        </Box>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              관리자 페이지 ...
            </Typography>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                  }}
                >
                  <Chart />
                </Paper>
              </Grid>

              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                  <Orders />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Dashboard;