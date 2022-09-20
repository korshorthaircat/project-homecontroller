import React from "react";
import "../../css/mainInteriorImage.css";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import HoverIcon from "./HoverIcon";
import axios from "axios";

const showRoomObjlocation = [
  { showroomNo: 1, productNo: 50, stlye: { left: "30%", top: "45%" } },
  { showroomNo: 1, productNo: 51, left: 50, top: "45%" },
  { showroomNo: 1, productNo: 56, left: 30, top: "45%" },
  { showroomNo: 1, productNo: 51, left: 50, top: "45%" },
];

const MainInteriorImage = () => {
  const [productList, setProductList] = React.useState([]);

  let productListUrl = "http://localhost:8080/api/main/getMainProductList";

  const list = () => {
    axios
      .get(productListUrl, {})
      .then((response) => {
        setProductList(response.data.data);
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
      <div className="ttt">
        <div className="aaa"></div>
        <div className="bbb"></div>
        {/* <div className='ccc'></div> */}
      </div>

      {showRoomObjlocation.map((a) => (
        <div className="hoverIcon" style={a.stlye}>
          <HoverIcon />
        </div>
      ))}
    </div>
  );
};

export default MainInteriorImage;
