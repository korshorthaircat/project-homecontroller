import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../../css/ProductDetail.css";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function NavContentSize() {
  let { productNo } = useParams();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [productList, setProductList] = React.useState([]);

  const getproductList = async () => {
    axios({
      url: `http://localhost:8080/api/product/productColorDetail`,
      method: "get",
      params: { productNo: productNo },
    }).then((response) => {
      console.log(response.data);
      setProductList(response.data.productInfo.slice(0, 1));
    });
  };

  React.useEffect(() => {
    getproductList();
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
