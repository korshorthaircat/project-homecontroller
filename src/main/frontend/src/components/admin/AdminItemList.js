import * as React from "react";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ImagesearchRollerIcon from "@mui/icons-material/ImagesearchRoller";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import EventNote from "@mui/icons-material/EventNote";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import AdUnitsIcon from "@mui/icons-material/AdUnits";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";

export default function AdminItemList() {
  const [openProduct, setOpenProduct] = React.useState(false);
  const [openOrder, setOpenOrder] = React.useState(false);
  const [openShowroom, setOpenShowroom] = React.useState(false);

  const handleProductClick = (e) => {
    setOpenProduct(!openProduct);
  };

  const handleOrderClick = (e) => {
    setOpenOrder(!openOrder);
  };

  const handleShowroomClick = (e) => {
    setOpenShowroom(!openShowroom);
  };

  return (
    <React.Fragment>
      <List
        style={{ width: "250px", marginLeft: "50%", marginRight: "100px" }}
        sx={{ bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            <Link href="/admin">
              <p style={{ fontSize: "25px" }}>
                <b>ADMIN </b>
              </p>
            </Link>
          </ListSubheader>
        }
      >
        <Divider sx={{ my: 3 }} />
        <ListItemButton onClick={handleProductClick}>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="상품 관리" />
          {openProduct ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={openProduct} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <EventNote />
              </ListItemIcon>
              <Link href="/admin1">
                <ListItemText primary="상품 등록" />
              </Link>
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <EventNote />
              </ListItemIcon>
              <Link href="/admin2">
                <ListItemText primary="상품 조회" />
              </Link>
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <Link href="/UserManage">
            <ListItemText primary="고객 관리" />
          </Link>
        </ListItemButton>

        <ListItemButton onClick={handleOrderClick}>
          <ListItemIcon>
            <AdUnitsIcon />
          </ListItemIcon>
          <ListItemText primary="주문 관리" />
          {openOrder ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={openOrder} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <EventNote />
              </ListItemIcon>
              <Link href="/OrderManage">
                <ListItemText primary="주문 목록" />
              </Link>
            </ListItemButton>

            {/* <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <EventNote />
              </ListItemIcon>
              <ListItemText primary="주문 상세" />
            </ListItemButton> */}
          </List>
        </Collapse>

        <ListItemButton onClick={handleShowroomClick}>
          <ListItemIcon>
            <ImagesearchRollerIcon />
          </ListItemIcon>
          <ListItemText primary="쇼룸 관리" />
          {openShowroom ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={openShowroom} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <EventNote />
              </ListItemIcon>
              <Link href="/showroomAdmin1">
                <ListItemText primary="쇼룸 등록" />
              </Link>
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <EventNote />
              </ListItemIcon>
              <Link href="/showroomAdmin2">
                <ListItemText primary="쇼룸 조회" />
              </Link>
            </ListItemButton>
          </List>
        </Collapse>
        <Divider sx={{ my: 1 }} />
      </List>
    </React.Fragment>
  );
}
