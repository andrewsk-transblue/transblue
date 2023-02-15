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
                            body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        />
                        <Col
                            icon={
                                <StarBorder sx={iconStyle} />
                            }
                            title='QUALITY'
                            body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        />
                        <Col
                            icon={<AttachMoney sx={iconStyle} />}
                            title='PRICE'
                            body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Speed;