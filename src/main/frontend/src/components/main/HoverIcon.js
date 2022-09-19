import React from 'react';
import "../../css/mainInteriorImage.css";
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { BsRecordCircle } from "react-icons/bs";

const HoverIcon = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handlePopoverClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);

    return (
         <div className="hoverIconActive">
            <Typography
            
            aria-owns={open ? 'mouse-over-popover' : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
            >
                
                    <div className="hoverIcon2">
                        <div className="smallHoverIcon2"></div>
                    </div>
                
            {/* <BsRecordCircle className="hoverIcon" /> */}
            </Typography>
            <Popover
            id="mouse-over-popover"
            sx={{
            pointerEvents: 'none',
            }}
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
            }}
            transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
            }}
            onClose={handlePopoverClose}
            disableRestoreFocus
            >
            
            <Typography sx={{ p: 1 }}
            >
            <div className ="showroomProductContent">
            MICKE 미케 <br/>
            
            테이블/식탁/책상, 73x50 cm <br/>
            
            \30000 <br/>
            </div>
            </Typography>
            

            </Popover>
            </div>
    );
};

export default HoverIcon;