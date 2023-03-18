import React from "react";
import Header from "../../../components/header";
import CTA from "../../components/cta/cta";
import NavWrapper from "../../components/navbar/navWrapper";
import Footer from '../../components/footer/footer';
import { Box, Grid, Typography } from "@mui/material";
import quality from '../../../images/residential/quality2.jpg';
import friends from '../../../images/residential/friends.jpg';
import fire from '../../../images/residential/fire.jpeg';
import couple from '../../../images/residential/couple.png';
import CenteredDiv from "../../components/centeredDiv/centeredDiv";
import installation from '../../../images/residential/installation.jpeg';

const imgStyle = {
    width: '100%',
    position: 'relative'
};

const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.44)'
};

function Residential() {

    return(
        <>
            <Header title='RESIDENTIAL' subtitle='Make your backyard feel like home' name='residential' />
            <NavWrapper />
            <CTA />

            <Box sx={{width: '100%', p: '60px 0px', bgcolor: '#e2caa485'}}>
                <Typography variant='body2' sx={{bgcolor: 'white', p: '3% 5%', width: '80%', fontFamily: 'Montserrat', textAlign: 'center', m: '0 auto'}}>
                    Transblue takes a holistic approach to your project. We believe that each project is a collaboration of your vision and our expertise. Our teams will guide you through the process and ensure you love what your are building and your dreams not only come true but become an investment that returns not only ROI but that brings family closer together! Projects are not just beautiful materials and designs, they are birthday parties, BBQ’s, anniversaries and relaxing afternoons!
                </Typography>
            </Box>

            <Box sx={{width: '90%', py: '20vh', maxWidth: '2000px', m: '0 auto'}}>
                <Grid container spacing={5} my='auto'>
                    <Grid item xs={12} md={6}>
                        <img src={quality} alt='' style={{width: '100%'}} />
                    </Grid>
                    <Grid item xs={12} md={6} my='auto'>
                        <Typography variant='h2' sx={{color: '#0b56a4', fontWeight: 500, mb: 2, letterSpacing: '.06em', fontFamily: 'Montserrat'}}>QUALITY TIME MATTERS</Typography>
                        <Typography variant='body2' sx={{mb: 2}}>What do you do when your project is complete? When your dream project has the final touches laced into position?</Typography>

                        <Typography variant='h6' sx={{mb: 2, letterSpacing: '.1em', fontWeight: 400}}>SIT.    RELAX.     ENJOY</Typography>
                        <Typography variant='body2'>This is the place you watch your children grow up, the place where you laugh, the place you long to be after a long day at the office. This is your escape, where the world makes sense again, where you recharge. This is Transblue.</Typography>
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{width: '90%', pb: '20vh', maxWidth: '2000px', m: '0 auto'}}>
                <Grid container spacing={5}>
                    <Grid item xs={12} md={4}>
                        <Box sx={imgStyle}>
                            <img src={fire} alt='Transblue Firepit family' style={imgStyle} />
                            <Box style={overlayStyle} />
                            <CenteredDiv>
                                <Typography variant='h6' sx={{color: 'white', fontWeight: 400, zIndex: 5, width: '100%', textAlign: 'center', letterSpacing: '.08em', fontFamily: 'Montserrat'}}>BOND WITH FAMILY</Typography>
                            </CenteredDiv>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={imgStyle}>
                            <img src={friends} alt='Transblue Firepit family' style={imgStyle} />
                            <Box style={overlayStyle} />
                            <CenteredDiv>
                                <Typography variant='h6' sx={{color: 'white', fontWeight: 400, zIndex: 5, width: '100%', textAlign: 'center', letterSpacing: '.08em', fontFamily: 'Montserrat'}}>CELEBRATE YOUR FRIENDS</Typography>
                            </CenteredDiv>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={imgStyle}>
                            <img src={couple} alt='Transblue Firepit family' style={imgStyle} />
                            <Box style={overlayStyle} />
                            <CenteredDiv>
                                <Typography variant='h6' sx={{color: 'white', fontWeight: 400, zIndex: 5, width: '100%', textAlign: 'center', letterSpacing: '.08em', fontFamily: 'Montserrat'}}>LOVE YOUR LIFE</Typography>
                            </CenteredDiv>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{width: '90%', pb: '20vh', maxWidth: '2000px', m: '0 auto'}}>
                <Grid container spacing={5} my='auto'>
                    <Grid item xs={12} md={6}>
                        <img src={installation} alt='' style={{width: '100%'}} />
                    </Grid>
                    <Grid item xs={12} md={6} my='auto'>
                        <Typography variant='h2' sx={{color: '#0b56a4', fontWeight: 500, mb: 2, letterSpacing: '.06em', fontFamily: 'Montserrat'}}>DESIGN, INSTALLATION, CONSTRUCTION</Typography>
                        <Typography variant='body2' sx={{mb: 2}}>At Transblue, our team of landscape architects and designers put your plans on paper to design a beautiful landscape. Our projects are cost effective and add beautification to your property, no matter the size.</Typography>

                        <Typography variant='body2'>Once the cost and plan is approved, our installation and construction team will provide you with a written time line and project schedule. At Transblue, we see your project through from concept to completion.</Typography>
                    </Grid>
                </Grid>
            </Box>

            <Footer />
        </>
    )
}

export default Residential;