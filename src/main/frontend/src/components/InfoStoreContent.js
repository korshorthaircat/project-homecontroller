/*global kakao*/
import React, { useEffect } from "react";

const InfoStoreContent = ({ searchKeyword }) => {
  return (
    <div>
      <div style={{ fontSize: "40px", fontWeight: "900" }}>
        {searchKeyword.title}
      </div>
      <div
        style={{
          fontSize: "20px",
          fontWeight: "500",
          display: "flex",
          marginTop: "50px",
        }}
      >
        주소 : {searchKeyword.address}
      </div>
      <div style={{ fontSize: "20px", fontWeight: "500", display: "flex" }}>
        TEL : {searchKeyword.tel}
      </div>
      <div style={{ fontSize: "20px", fontWeight: "500", display: "flex" }}>
        FAX : {searchKeyword.fax}
      </div>
    </div>
  );
};

export default InfoStoreContent;
