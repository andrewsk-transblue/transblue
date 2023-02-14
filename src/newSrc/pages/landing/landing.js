import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Navbar from "../../components/navbar/navbar";
import Clients from "./clients";
import bg from '../../images/header.mp4';
import './landing.css';
import Contact from "./contact";
import Brands from "./brands";
import About from "./about";
import Services from "./newServices";
import Speed from "./speed";
import GivesBack from "./givesBack";
import CTA from "../../components/cta/cta";
import Footer from "../../components/footer/footer";
import Mission from "./mission";
import NewClients from "./newClients";
import NavWrapper from "../../components/navbar/navWrapper";

function Landing() {
    return (
        <>
            <CTA />
            <video autoPlay loop muted>
                <source src={bg} />
            </video>
            <NavWrapper page='home' />
            <Box sx={{zIndex: 4, position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh', bgcolor: 'rgba(0,0,0,.3)', background: 'linear-gradient(90deg, rgba(0,0,0,1) 34%, rgba(0,0,0,0.7485119047619048) 61%, rgba(255,255,255,0) 100%)'}}></Box>
            <Box sx={{zIndex: 5, position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh'}}>
                <Grid container height='100%'>
                    <Grid item xs={1}>

                    </Grid>
                    <Grid item xs={10} my='auto'>
                        <Typography variant='h1' sx={{color: 'white'}}>TRANSBLUE</Typography>
                        <Typography variant='h1' sx={{color: 'white'}}>GENERAL CONTRACTORS</Typography>
                        <Typography variant='h2' sx={{color: '#ed6a22'}}>Changing the world, one project at a time</Typography>
                    </Grid>
                    <Grid item xs={1} />
                </Grid>
            </Box>
            <Contact />
            <Mission />
            <About />
            <Speed />
            <Services />
            <GivesBack />
            <NewClients />
            <Brands />
            {/* <Footer /> */}
        </>
    )
}

export default Landing;