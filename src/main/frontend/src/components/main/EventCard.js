import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import styled from 'styled-components';

const CardContainer = styled.div`
  
`


const EventCard = ({title, content}) => {
  return (
    <div>
      <CardContainer>
      <Card sx={{ maxWidth: 493, height: 350, margin: "0 auto"}}>
      <CardActionArea>
        
        <CardMedia
          component="img"
          height="250"
          image="images/inter (1).png"
          alt="green iguana"
          
        />
        <CardContent sx={{backgroundColor: "red"}}>
          <Typography gutterBottom variant="h5" component="div"
          sx={{fontWeight: "bold"}}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
        </CardContent>
        
      </CardActionArea>
    </Card>
    </CardContainer>
    </div>
  );
};

export default EventCard;