import * as React from "react";
import {createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import  AdminItemList  from "./AdminItemList";

const mdTheme = createTheme();

function Dashboard() {
 
  return (    
    <ThemeProvider theme={mdTheme} >
      <Box sx={{ display: "flex"}} style={{maxWidth:"1750px"}}>
        <Box>
           <List>
            <AdminItemList/>
          </List>
        </Box>

        <Container style={{ marginTop: "5%" }}>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "30ch" },
            }}
            noValidate
            autoComplete="off"
          >
   
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default Dashboard;