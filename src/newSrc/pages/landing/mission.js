import { Box, Typography } from "@mui/material";
import React from "react";
import logo from '../../images/logoCropped.png';
import { Grid } from "@mui/material";

function Mission() {
    return (
        <Box sx={{width: '95%', pt: '20vh', pb: '10vh', maxWidth: '2000px', m: '0 auto'}}>
            <Grid container>
                <Grid item xs={12} md={2} my='auto'>
                    <Box sx={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                        <img src={logo} alt='Transblue Logo' style={{width: '70%', maxWidth: '200px'}} />
                    </Box>
                </Grid>
                <Grid item xs={12} md={4} my='auto'>
                    <Typography variant='h1' sx={{color: '#0b56a4', fontWeight: 500, textAlign: {
                        xs: 'center',
                        md: 'left'
                    }, pt: {
                        xs: 3,
                        md: 0
                    }, mb: {
                        xs: 2,
                        md: 0
                    }}}>TRANSBLUE'S MISSION</Typography>
                </Grid>
                <Grid item xs={12} md={6} my='auto' sx={{pl: {
                    xs: 2,
                    md: 8
                }, pr: {
                    xs: 2,
                    md: 0
                }}}>
                    <Typography variant='body2' sx={{textAlign: {
                        xs: 'center',
                        md: 'left'
                    }}}>We were founded on the principle of God, Family, then Business. We don't just build outdoor construction. We build communities. We build charities. We build to bless our clients, our employees, and our surroundings.</Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Mission;