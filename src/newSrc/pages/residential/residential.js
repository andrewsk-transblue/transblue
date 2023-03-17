import React from "react";
import Header from "../../../components/header";
import CTA from "../../components/cta/cta";
import NavWrapper from "../../components/navbar/navWrapper";
import Footer from '../../components/footer/footer';
import { Box, Grid, Typography } from "@mui/material";
import quality from '../../../images/residential/quality2.jpg';

function Residential() {

    return(
        <>
            <Header title='RESIDENTIAL' subtitle='Make your backyard feel like home' name='residential' />
            <NavWrapper />
            <CTA />

            <Box sx={{width: '100%', p: '60px 0px', bgcolor: '#e2caa485'}}>
                <Typography variant='body2' sx={{bgcolor: 'white', p: '30px 20px', width: '80%', fontFamily: 'Montserrat', textAlign: 'center', m: '0 auto'}}>
                    Transblue takes a holistic approach to your project. We believe that each project is a collaboration of your vision and our expertise. Our teams will guide you through the process and ensure you love what your are building and your dreams not only come true but become an investment that returns not only ROI but that brings family closer together! Projects are not just beautiful materials and designs, they are birthday parties, BBQ’s, anniversaries and relaxing afternoons!
                </Typography>
            </Box>

            <Box sx={{width: '90%', py: '20vh', maxWidth: '2000px', m: '0 auto'}}>
                <Grid container spacing={5} my='auto'>
                    <Grid item xs={12} md={6}>
                        <img src={quality} alt='' style={{width: '100%'}} />
                    </Grid>
                    <Grid item xs={12} md={6} my='auto'>
                        <Typography variant='h2' sx={{color: '#0b56a4', fontWeight: 500, mb: 2, letterSpacing: '.06em'}}>QUALITY TIME MATTERS</Typography>
                        <Typography variant='body2' sx={{mb: 2}}>What do you do when your project is complete? When your dream project has the final touches laced into position?</Typography>

                        <Typography variant='h6' sx={{mb: 2, letterSpacing: '.1em'}}>SIT.    RELAX.     ENJOY</Typography>
                        <Typography variant='body2'>This is the place you watch your children grow up, the place where you laugh, the place you long to be after a long day at the office. This is your escape, where the world makes sense again, where you recharge. This is Transblue.</Typography>
                    </Grid>
                </Grid>
            </Box>

            <Footer />
        </>
    )
}

export default Residential;