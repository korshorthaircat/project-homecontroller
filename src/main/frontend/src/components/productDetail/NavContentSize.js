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
                <p id="acodianProductInfo">
                {r.productGauge}
                </p>

                <img
                  id="productSizeImg"
                  src="/images/Product_ikea.png"
                  style={{ width: "400px" }}
                ></img>
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
                포장
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                이 제품은 여러 개의 패키지로 포장되어 있습니다. 폭 : 51 cm <p />
                높이 : 6 cm <p />
                길이 : 146 cm <p />
                무게 : 22.00 kg <p />
                패키지 : 1 <p /> <p />
                폭 : 52 cm <p />
                높이 : 6 cm <p />
                길이 : 146 cm <p />
                무게 : 18.40 kg <p />
                패키지 : 1 <p /> <p />
                폭 : 53 cm <p />
                높이 : 6 cm <p />
                길이 : 164 cm <p />
                무게 : 19.80 kg <p />
                패키지 : 1
              </Typography>
            </AccordionDetails>
          </Accordion>
        </>
      ))}
    </div>
  );
}
