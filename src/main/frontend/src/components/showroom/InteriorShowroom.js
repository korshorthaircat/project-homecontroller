import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@mui/material/Button";
import React from "react";
import { Container } from "@mui/system";
import "../../css/showroom.css";
import ShowroomColor from "./ShowroomColor";

function InteriorShowroom() {
  return (
    <Container component="main" maxWidth="xl" style={{ marginTop: "3%" }}>
      <ShowroomColor></ShowroomColor>
      <div className="showroomMain"></div>

      <div className></div>
    </Container>
  );
}

export default InteriorShowroom;
