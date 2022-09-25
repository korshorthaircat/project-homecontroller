import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ShowroomtopContent = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div>
      <Box sx={{ flexGrow: 1 }} marginBottom="5%">
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Card sx={{ maxWidth: 450 }}>
              <CardMedia
                component="img"
                alt="showroomcontent"
                height="500"
                src="https://i.pinimg.com/564x/1b/fb/71/1bfb712c1a021c0a6a3db69716e0e177.jpg"
              />
              <CardContent sx={{ backgroundColor: "pink" }}>
                <Typography gutterBottom variant="h5" component="div">
                  Show your color!
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Pink색이 잘어울리는 당신! <br />
                  핑크색으로 예쁘게 꾸며보세요
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ maxWidth: 450 }}>
              <CardMedia
                component="img"
                alt="showroomcontent"
                height="500"
                src="https://i.pinimg.com/564x/a9/af/58/a9af5882c052898ed7fb9b1c98e5b135.jpg"
              />
              <CardContent sx={{ backgroundColor: "#EFE480" }}>
                <Typography gutterBottom variant="h5" component="div">
                  Show your color!
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lemon처럼 톡쏘는 당신!
                  <br />
                  상큼한 레몬컬러로 기분전환 어떠신가요
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ maxWidth: 450 }}>
              <CardMedia
                component="img"
                alt="showroomcontent "
                height="500"
                src="../images/showroom_images/showroomcontent1.png"
              />
              <CardContent sx={{ backgroundColor: "#B2CC5A" }}>
                <Typography gutterBottom variant="h5" component="div">
                  Greenery
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  오늘은 내 공간을 초록빛깔로 가득하게 하고싶다
                  <br />
                  트렌디한 Greenery 디자인을 추천합니다
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default ShowroomtopContent;
