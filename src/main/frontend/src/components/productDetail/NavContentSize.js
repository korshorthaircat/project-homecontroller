import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../../css/ProductDetail.css";
import axios from "axios";

export default function NavContentSize() {
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
                <p id="acodianProductName">치수</p>
                <p id="acodianProductInfo">{r.productGauge}</p>
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
        </>
      ))}
    </div>
  );
}
