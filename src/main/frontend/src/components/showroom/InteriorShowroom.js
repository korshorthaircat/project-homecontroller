import Button from "react-bootstrap/Button";
import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: `element-${ind}` }));

function InteriorShowroom() {
  const [items, setItems] = React.useState(getItems);
  const [selected, setSelected] = React.useState([]);
  const [position, setPosition] = React.useState(0);

  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const handleClick =
    (id) =>
    ({ getItemById, scrollToItem }) => {
      const itemSelected = isItemSelected(id);

      setSelected((currentSelected) =>
        itemSelected
          ? currentSelected.filter((el) => el !== id)
          : currentSelected.concat(id)
      );
    };
  return (
    <div className="wrapper">
      <div className="showroomMain">
        <Button variant="success">Success</Button>{" "}
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img src="../images/light1.png" width="100%" />
              <h4>상품명</h4>
              <p>상품설명</p>
            </div>
            <div className="col-md-4">
              <img src="../images/light2.png" width="100%" />
              <h4>상품명</h4>
              <p>상품설명</p>
            </div>
            <div className="col-md-4">
              <img src="../images/light3.png" width="100%" />
              <h4>상품명</h4>
              <p>상품설명</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InteriorShowroom;
