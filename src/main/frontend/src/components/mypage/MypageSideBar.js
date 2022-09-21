import React, { useState } from "react";
import "../../css/mypagesidebar.css";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

function MypageSideBar() {
  return (
    <body>
      <div>
        <div class="nav_wrapper">
          <nav className="MyNavMenu">
            <ul>
              <li>
                <Link href="/mypage" title="Link">
                  MYPAGE
                </Link>
              </li>
              <li>
                <a href="#Link" title="Link">
                  나의 정보
                </a>
                <ul>
                  <li>
                    <a href="/userupdate" title="Link ">
                      나의정보 수정
                    </a>
                  </li>
                  <li>
                    <a href="/outmembers" title="Link">
                      멤버십 해지
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/wishlist" title="Link">
                  위시리스트
                </a>
              </li>
              <li>
                <a href="#Link" title="Link">
                  장바구니
                </a>
              </li>
              <li>
                <a href="#Link" title="Link">
                  포인트/쿠폰
                </a>
                <ul>
                  <li>
                    <a href="#Link" title="Link">
                      포인트
                    </a>
                  </li>
                  <li>
                    <a href="#Link" title="Link">
                      쿠폰
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#Link" title="Link">
                  주문내역
                </a>
                <ul>
                  <li>
                    <a href="#Link" title="Link">
                      주문
                    </a>
                  </li>
                  <li>
                    <a href="#Link" title="Link">
                      반품
                    </a>
                  </li>
                  <li>
                    <a href="#Link" title="Link">
                      교환
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#Link" title="Link">
                  나의 게시글
                </a>
                <ul>
                  <li>
                    <a href="#Link" title="Link">
                      자유게시판
                    </a>
                  </li>
                  <li>
                    <a href="/reviewlist" title="Link">
                      상품후기
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </body>
  );
}

export default MypageSideBar;
