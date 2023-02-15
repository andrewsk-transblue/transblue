import { AccessTime, AttachMoney, StarBorder } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const iconStyle = {
    fontSize: '3vw',
    color: '#ed6a22',
    mb: 1,
    position: 'absolute',
    right: '-35px',
    bottom: '-30px',
    width: '100px',
    height: '100px',
    opacity: '.7'
}

const Col = (props) => {
    const { icon, title, body } = props;

    return (
        <Grid item xs={12} sm={6} lg={4} my='auto'>
            <Box sx={{px: 3, pt: 3, pb: 5, borderRadius: '5px', background: 'linear-gradient(116.43deg, #0B56A4 -0.01%, #070E14 103.46%)', mixBlendMode: 'normal', position: 'relative', overflow: 'hidden'}}>
                {icon}
                <Typography variant='h2' sx={{mb: 1, color: 'white', fontWeight: 500}}>{title}</Typography>
                <Typography variant='body2' sx={{color: 'white'}}>{body}</Typography>
            </Box>
        </Grid>
    );
};

function Speed() {
    return(
        <Box sx={{maxHeight: '100vh', pb: '20vh', width: '95vw', maxWidth: '2000px', m: '0 auto'}}>
            <Grid container height='100%'>
                <Grid item xs={12} my='auto'>
                    <Grid container spacing={3}>
                        <Col
                            icon={<AccessTime sx={iconStyle} />}
                            title='SPEED'
                            body='At Transblue, we get work done fast, completing projects efficiently without compromising on quality.'
                        />
                        <Col
                            icon={
                                <StarBorder sx={iconStyle} />
                            }
                            title='QUALITY'
                            body='We provide high quality projects that are built to last, using top-of-the-line materials and expert craftsmanship.'
                        />
                        <Col
                            icon={<AttachMoney sx={iconStyle} />}
                            title='PRICE'
                            body='We offer competitive and transparent pricing for our projects, ensuring the right price and high quality services.'
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Speed;