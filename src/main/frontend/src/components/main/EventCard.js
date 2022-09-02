import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import styled from 'styled-components';

const CardContainer = styled.div`
  
`


const EventCard = () => {
  return (
    <div>
      <CardContainer>
      <Card sx={{ maxWidth: 493, height: 300, margin: "0 auto"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="images/inter (1).png"
          alt="green iguana"
        />
        <CardContent sx={{backgroundColor: "gray"}}>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </CardContainer>
    </div>
  );
};

export default EventCard;