import React, { useEffect, useState } from "react";
import Header from "../../../components/header/index";
import NavWrapper from "../../components/navbar/navWrapper";
import asphalt3 from '../../images/featured/asphalt3.jpg';
import { motion, useAnimation } from 'framer-motion/dist/framer-motion';
import { useInView } from "react-intersection-observer";
import { Box, Button, Divider, Grid, Icon, IconButton, Typography } from "@mui/material";
import roofing3 from '../../images/featured/roofing3.jpg';
import urban4 from '../../images/featured/urban4.jpg';
import transformation3 from '../../images/featured/transformation3.jpg';
import trendy3 from '../../images/featured/trendy3.jpg';
import './style.css';
import Footer from "../../components/footer/footer";
import { Filter, PlayCircleOutline } from "@mui/icons-material";

const screenWidth = window.innerWidth;

const cardVariants = {
    hidden: {
        opacity: 0,
        x: -400
    },
    visible: {
        x: [-400, 0],
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        },
        opacity: [0, 1]
    }
};

const titleVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        x: [400, 0],
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
            delay: 0.5
        },
        opacity: [0, 1]
    }
};

const bodyVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        x: [400, 0],
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
            delay: 1
        },
        opacity: [0, 1]
    }
};

const overlayVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        x: [-400, 0],
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        }
    }
};

function Card({ img }) {
    const [ref, inView] = useInView();
    const control = useAnimation();

    useEffect(() => {
        if(inView) {
            control.start('visible');
        }
    }, [control, inView]);
  
    return (
        <Box sx={{position: 'relative'}}>
            <motion.div
                layout='position'
                className='project-card'
                variants={cardVariants}s
                ref={ref}
                animate={control}
            >
                <img src={img} style={{width: '100%'}} />
            </motion.div>
            <motion.div
                layout='position'
                className='card-overlay'
                initial={{opacity: 0}}
                whileHover={{opacity: 1}}
                animate={control}
                variants={overlayVariants}
            />
        </Box>
    );
}

function Title({ title }) {
    const [ref, inView] = useInView();
    const control = useAnimation();

    useEffect(() => {
        if(inView) {
            control.start('visible');
        }
    }, [control, inView]);

    return(
        <motion.div 
            variants={titleVariants} 
            ref={ref}
            animate={control}
        >
            <Typography variant='h2' sx={{fontWeight: 500, letterSpacing: '.03em', color: 'white'}}>{title}</Typography>
            <Divider sx={{width: '20%', bgcolor: '#ed6a22', mt: 2, border: '1px solid #ed6a22'}} />

        </motion.div>
    )
};

function Body({ body }) {
    const [ref, inView] = useInView();
    const control = useAnimation();

    useEffect(() => {
        if(inView) {
            control.start('visible');
        }
    }, [control, inView]);

    return(
        <motion.div 
            variants={bodyVariants} 
            ref={ref}
            animate={control}
        >
            <Typography variant='body2' sx={{my: 3, letterSpacing: '.03em', color: 'whitesmoke'}}>{body}</Typography>

            <IconButton
                
            >
                <PlayCircleOutline sx={{color: '#ed6a22'}} fontSize='large' />
            </IconButton>
            <IconButton
                
            >
                <Filter sx={{color: '#ed6a22'}} fontSize='large' />
            </IconButton>
        </motion.div>
    )
};

function Featured2() {
    return (
        <>
            <Header title='FEATURED PROJECTS' name='featured' />
            <NavWrapper />
            
            <Box sx={{width: '100%', height: '100%', minHeight: '100vh', pt: '20vh', background: 'rgb(0,0,0)', background: 'linear-gradient(0deg, rgba(30,30,30) 34%, rgba(65,65,65,1) 90%)', overflowX: 'hidden'}}>
                <Box sx={{width: '90vw', m: '0 auto', maxWidth: '2000px'}}>
                    <Box sx={{minHeight: '100vh'}}>
                        <Grid container spacing={8}>
                            <Grid item xs={12} md={6} my='auto'>
                                <Card img={asphalt3} />
                            </Grid>
                            <Grid item xs={12} md={6} my='auto'>
                                <Title title='5 STAR ASPHALT REFRESHMENT' />
                                <Body body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique senectus et netus et malesuada fames ac turpis.' />
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{minHeight: '100vh'}}>
                        <Grid container spacing={8}>
                        
                            <Grid item xs={12} md={6} my='auto'>
                                <Card img={roofing3} />
                            </Grid>
                            <Grid item xs={12} md={6} my='auto'>
                                <Title title='ROOFING DONE RIGHT' />
                                <Body body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique senectus et netus et malesuada fames ac turpis.' />
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{minHeight: '100vh'}}>
                        <Grid container spacing={8}>
                            <Grid item xs={12} md={6} my='auto'>
                                <Card img={urban4} />
                            </Grid>
                            <Grid item xs={12} md={6} my='auto'>
                                <Title title='URBAN OASIS' />
                                <Body body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique senectus et netus et malesuada fames ac turpis.' />
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{minHeight: '100vh'}}>
                        <Grid container spacing={8}>
                            <Grid item xs={12} md={6} my='auto'>
                                <Card img={transformation3} />
                            </Grid>
                            <Grid item xs={12} md={6} my='auto'>
                                <Title title='COMPLETE TRANSFORMATION' />
                                <Body body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique senectus et netus et malesuada fames ac turpis.' />
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{minHeight: '100vh'}}>
                        <Grid container spacing={8}>
                            <Grid item xs={12} md={6} my='auto'>
                                <Card img={trendy3} />
                            </Grid>
                            <Grid item xs={12} md={6} my='auto'>
                                <Title title='A TRENDY LANDSCAPE' />
                                <Body body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique senectus et netus et malesuada fames ac turpis.' />
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Box>
            <Footer  />
        </>
    );
};

export default Featured2;