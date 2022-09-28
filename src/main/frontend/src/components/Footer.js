import React from "react";
import "../css/footer.css";
import Link from "@mui/material/Link";

const footerCategory = [
  {
    category: "모든제품",
    link: "/",
  },
  {
    category: "인테리어쇼룸",
    link: "/showroom",
  },
  {
    category: "이벤트 및 프로모션",
    link: "#",
  },
  {
    category: "지점안내",
    link: "#",
  },
  {
    category: "고객센터",
    link: "/board",
  },
  {
    category: "배송조회",
    link: "#",
  },
  {
    category: "마이페이지",
    link: "mypage",
  },
  {
    category: "직원소개",
    link: "#",
  },
];
const Footer = () => {
  return (
    <div>
      <div className="footer_bg">
        <div className="footer_nav">
          {footerCategory.map((a) => (
            <div className="footer_link">
              <Link href={a.link}>
                <p>{a.category}</p>
              </Link>
            </div>
          ))}
        </div>
        <div className="footer_line">
          <hr />
        </div>

        <div className="footer_content">
          <img className="footer_logo" src="../images/logo_2.png" />
          <p>
            HOME CONTROLLER <br />
            주소 : (우)06134 서울 강남구 강남대로94길 20, 삼오빌딩 <br />
            사업자 등록번호 : 012-34-56789 <br />
            대표자 : AUTOWIRED <br />
            통신판매업 신고 : 2022-서울강남-0809 <br />
            TEL : 1234-5678 <br />
            Copyright© HOME CONTROLLER(주) All rights reserved <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
