import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState, lazy, Suspense } from "react";
import './landing.css';
import Contact from "./contact";
import NavWrapper from "../../components/navbar/navWrapper";

const About = lazy(() => import('./about'));
const Brands = lazy(() => import('./brands'));
const CTA = lazy(() => import('../../components/cta/cta'));
// const Services = lazy(() => import('./newServices'));
const Speed = lazy(() => import('./speed'));
const GivesBack = lazy(() => import('./givesBack'));
const Footer = lazy(() => import('../../components/footer/footer'));
const Mission = lazy(() => import('./mission'));
const NewClients = lazy(() => import('./newClients'));


function Landing() {
    const [screenSize, setScreenSize] = useState('small');

    const getScreenSize = () => {
        if(window.innerWidth > 500) {
            setScreenSize('large')
        }
        else {
            setScreenSize('small')
        }
    }

    useEffect(() => {
        getScreenSize();
        window.addEventListener('resize', () => {
            getScreenSize();
        })
    }, [])

    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <CTA />
                {screenSize == 'large' &&
                    <video autoPlay loop muted>
                        <source src='https://tbconnectstorage.blob.core.windows.net/projectimages/header.mp4' />
                    </video>
                }
                {screenSize === 'small' &&
                    <div id='header_mobile' />
                }
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
                {/* <Services /> */}
                <GivesBack />
                <NewClients />
                <Brands />
                <Footer />
            </Suspense>
        </>
    )
}

export default Landing;