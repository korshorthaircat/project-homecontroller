import React from "react";

const KakaoPay = () => {
  return (
    <div>
      <h1>카카오페이</h1>
      <form method="post" action="/kakaopay">
        <button>카카오페이로 결제하기</button>
      </form>
    </div>
  );
};

export default KakaoPay;
