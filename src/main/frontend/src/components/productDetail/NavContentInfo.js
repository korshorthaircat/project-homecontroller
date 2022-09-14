import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../../css/ProductDetail.css";
import Textarea from "../../css/Textarea";
import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function NavContentInfo() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [productList, setProductList] = React.useState([]);

  let listUrl = "http://localhost:8080/api/admin/admin2";
  const list = () => {
    axios
      .get(listUrl, {})
      .then((response) => {
        setProductList(response.data.data.slice(0, 1));
      })
      .catch((e) => {
        console.log(e);
      });
  };

  React.useEffect(() => {
    list();
  }, []);

  return (
    <div>
      {productList.map((r) => (
        <>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionDetails>
              <Typography>
                <p id="acodianProductName">제품 설명</p>
                <p>{r.productSummary}</p>
                <p id="acodianProductInfo"></p>
                <span id="acodianProductNo_text">제품 번호 </span>
                <p />
                <p id="acodianProductNo">{r.productNo}</p>
              </Typography>
            </AccordionDetails>

            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                sx={{
                  width: "33%",
                  flexShrink: 0,
                  height: "80px",
                  transform: "translateY(35%)",
                  fontWeight: 600,
                  fontSize: "17px",
                }}
              ></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography></Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel"}
            onChange={handleChange("panel")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography
                sx={{
                  width: "33%",
                  flexShrink: 0,
                  height: "80px",
                  transform: "translateY(35%)",
                  fontWeight: 600,
                  fontSize: "17px",
                }}
              >
                참고
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{r.productRef}</Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography
                sx={{
                  width: "33%",
                  flexShrink: 0,
                  height: "80px",
                  transform: "translateY(35%)",
                  fontWeight: 600,
                  fontSize: "17px",
                }}
              >
                소재 및 관리
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{r.productMng}</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography
                sx={{
                  width: "33%",
                  flexShrink: 0,
                  height: "80px",
                  transform: "translateY(35%)",
                  fontWeight: 600,
                  fontSize: "17px",
                }}
              >
                안전 및 규정 준수
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{r.productSafe}</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography
                sx={{
                  width: "33%",
                  flexShrink: 0,
                  height: "80px",
                  transform: "translateY(35%)",
                  fontWeight: 600,
                  fontSize: "17px",
                }}
              >
                배송 시 주의사항
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{r.productDeliveryInfo}</Typography>
            </AccordionDetails>
          </Accordion>
        </>
      ))}
    </div>
  );
}
