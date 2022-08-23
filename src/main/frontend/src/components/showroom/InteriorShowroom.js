import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

function InteriorShowroom() {
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
