import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

import seveneleven from '../../images/brandLogos/711.png';
import boeing from '../../images/brandLogos/boeing.png';
import cbre from '../../images/brandLogos/cbre.png';
import lowes from '../../images/brandLogos/lowes.png';
import starbucks from '../../images/brandLogos/starbucks.png';
import wellsfargo from '../../images/brandLogos/wellsfargo.png';
import walmart from '../../images/brandLogos/walmart.png';

function Brands() {

    return (
        <Box sx={{py: '20vh', maxHeight: '100vh'}}>
            <Typography variant='h1' sx={{width: '100%', textAlign: 'center', color: '#0b56a4', fontWeight: 500, mb: {
                xs: '6vh',
                md: '10vh'
            }}}>BRANDS WE WORK WITH</Typography>
            <Grid container width='95vw' maxWidth='2000px' m='0 auto'>
                <Grid item xs={6} md={3} my='auto'>
                    <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <img src={seveneleven} alt='7 Eleven Brand Logo' style={{width: '90%', maxWidth: '200px'}} />
                    </Box>
                </Grid>
                <Grid item xs={6} md={3} my='auto'>
                    <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <img src={boeing} alt='Boeing Logo' style={{width: '90%', maxWidth: '200px'}} />
                    </Box>
                </Grid>
                <Grid item xs={6} md={3} my='auto'>
                    <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <img src={cbre} alt='CBRE Logo' style={{width: '90%', maxWidth: '200px'}} />
                    </Box>
                </Grid>
                <Grid item xs={6} md={3} my='auto'>
                    <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <img src={lowes} alt='Lowes Logo' style={{width: '90%', maxWidth: '200px'}} />
                    </Box>

                </Grid>
                <Grid item md={1}></Grid>
                <Grid item xs={6} md={3} my='auto'>
                    <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <img src={starbucks} alt='Starbucks Logo' style={{width: '90%', maxWwidth: '200px'}} />
                    </Box>
                </Grid>
                <Grid item xs={6} md={4} my='auto'>
                    <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <img src={wellsfargo} alt='Wells Fargo Logo' style={{width: '90%', maxWidth: '200px'}} />
                    </Box>
                </Grid>

                <Grid item xs={6} md={3} my='auto'>
                    <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <img src={walmart} alt='Walmart Logo' style={{width: '90%', maxWidth: '200px'}} />
                    </Box>
                </Grid>
                <Grid item md={1}></Grid>
            </Grid>
            <Box sx={{display: 'flex', justifyContent: 'center', mt: '6vh'}}>
                <Button
                    variant='outlined'
                    sx={{border: '2px solid #0b56a4', fontWeight: 'bold'}}
                    component='a'
                    href='/featured'
                >
                    view our projects
                </Button>
            </Box>
        </Box>
    )
}

export default Brands;