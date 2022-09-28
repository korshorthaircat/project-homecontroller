/*global kakao*/
import * as React from "react";
import { KayakingOutlined } from "@mui/icons-material";
import { Typography } from "@mui/material";
import "../css/infoStore.css";
import KakaoMap from "./KakaoMap";
import InfoStoreContent from "./InfoStoreContent";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Grid } from "rsuite";

const InfoStore = () => {
  const choiceStore = [
    {
      id: 0,
      name: "gangnam",
      title: "강남점",
      address: "서울특별시 강남구 역삼동 819-3",
      tel: "02)3486-0000",
      fax: "02)3486-0001",
      img: process.env.PUBLIC_URL + "/images/gangnamStore.png",
    },
    {
      id: 1,
      name: "pochoen",
      title: "포천점",
      address: "경기도 포천시 중앙로 87",
      tel: "031)532-0000",
      fax: "031)532-0001",
      img: process.env.PUBLIC_URL + "/images/gangnamStore.png",
    },
    {
      id: 2,
      name: "pochoen",
      title: "의왕점",
      address: "경기도 의왕시 시청로 11 의왕시청",
      tel: "031)532-0000",
      fax: "031)532-0001",
      img: process.env.PUBLIC_URL + "/images/gangnamStore.png",
    },
    {
      id: 3,
      name: "naju",
      title: "나주점",
      address: "전라남도 나주시 시청길 22 나주시청",
      tel: "031)532-0000",
      fax: "031)532-0001",
      img: process.env.PUBLIC_URL + "/images/gangnamStore.png",
    },
    {
      id: 4,
      name: "ulsan",
      title: "울산점",
      address: "울산광역시 남구 중앙로 201 울산광역시청",
      tel: "031)532-0000",
      fax: "031)532-0001",
      img: process.env.PUBLIC_URL + "/images/gangnamStore.png",
    },
  ];
  console.log(choiceStore);

  const [selectStoreAddr, setSelectStoreAddr] = React.useState(choiceStore[0]);

  const changeStore = (index) => {
    setSelectStoreAddr(choiceStore[index]);
  };

  const buttons = [
    <Button key="one">강남점</Button>,
    <Button key="two">포천점</Button>,
    <Button key="three">의왕점</Button>,
    <Button key="three">나주점</Button>,
    <Button key="three">울산점</Button>,
  ];

  return (
    <div style={{ margin: "5%" }}>
      <Typography
        sx={{
          fontSize: "40px",
          fontWeight: "900",
          textAlign: "-webkit-center",
        }}
      >
        지점 안내
      </Typography>
      <Box
        sx={{
          display: "flex",
          marginTop: "3%",
          flexDirection: "column",
          alignItems: "center",

          "& > *": {
            m: 1,
          },
        }}
      >
        <ButtonGroup
          size="large"
          color="success"
          aria-label="large button group"
        >
          {choiceStore &&
            choiceStore.map((store, index) => (
              <Button key={store.id} onClick={() => changeStore(index)}>
                {store.title}
              </Button>
            ))}
        </ButtonGroup>
      </Box>

      <Grid
        container
        spacing={12}
        columns={16}
        style={{
          width: "80%",
          flexDirection: "row",
          //textAlign: "-webkit-center",
          //placeItems: "center",
          margin: "2% 25% 0",
          display: "flex",
          flexDirection: "row",
        }}
        direction="row"
        //alignItems="center"
      >
        <Grid item xs={8}>
          {" "}
          <KakaoMap searchKeyword={selectStoreAddr} />
        </Grid>

        <Grid item xs={8} style={{ margin: "5% 3%" }}>
          <div>
            <InfoStoreContent searchKeyword={selectStoreAddr} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default InfoStore;
