import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../../css/ProductDetail.css";

export default function NavContentSize() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionDetails>
          <Typography>
            <p id="acodianProductName">치수</p>
            <p id="acodianProductInfo">
              폭: 160cm <p />
              깊이: 50cm
              <p />
              높이: 96 cm
              <p />
              서랍깊이(내부): 43 cm
              <p />
              가구 밑 여유공간: 11 cm
            </p>

            <img id="productSizeImg" src="/Product_ikea.png"></img>
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
          ></Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}
