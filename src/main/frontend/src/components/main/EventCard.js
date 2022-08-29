import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "../../css/carousel.css";
import styled from 'styled-components';

const CardWrapper = styled.a`

`;




const EventCard = (id, title, thumbnail, condition) => {
    return (
      
        <div className='eventCard'>
          <CardWrapper  href={`/course/${id}`}>
            <Card sx={{ maxWidth: 350}}>
      <CardActionArea>
        
        <CardMedia
          component="img"
          height="300"
          image="/images/main_images/mainImage_4.jpg"
          alt="green iguana"
        />
        
        <CardContent >
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
    </CardWrapper>
    
    
        </div>
      
    );
};

export default EventCard;