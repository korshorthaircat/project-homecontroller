import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


const EventCard = () => {
  return (
    <div>
      <Card sx={{ maxWidth: 510, height: 310}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="images/inter (1).png"
          alt="green iguana"
        />
        <CardContent sx={{backgroundColor: "red"}}>
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
    </div>
  );
};

export default EventCard;