import React, { useEffect, useState } from "react";
import Header from "../../../components/header/index";
import NavWrapper from "../../components/navbar/navWrapper";
import asphalt3 from '../../images/featured/asphalt3.jpg';
import { motion, useAnimation } from 'framer-motion/dist/framer-motion';
import { useInView } from "react-intersection-observer";
import { Box, Button, Divider, Grid, IconButton, Modal, Typography } from "@mui/material";
import roofing3 from '../../images/featured/roofing3.jpg';
import urban4 from '../../images/featured/urban4.jpg';
import transformation3 from '../../images/featured/transformation3.jpg';
import trendy3 from '../../images/featured/trendy3.jpg';
import './style.css';
import Footer from "../../components/footer/footer";
import { Filter, PlayCircleOutline } from "@mui/icons-material";

import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import asphalt1 from '../../images/featured/asphalt1.jpg';
import asphalt2 from '../../images/featured/asphalt2.jpg';

import roofing1 from '../../images/featured/roofing1.jpg';
import roofing2 from '../../images/featured/roofing2.jpg';

import transformation1 from '../../images/featured/transformation1.jpg';
import transformation2 from '../../images/featured/transformation2.jpg';

import urban1 from '../../images/featured/urban1.jpg';
import urban2 from '../../images/featured/urban2.jpg';
import urban3 from '../../images/featured/urban3.jpg';
import urban5 from '../../images/featured/urban5.jpg';

import trendy1 from '../../images/featured/trendy1.jpg';
import trendy2 from '../../images/featured/trendy2.jpg';

import forward from '../../../images/residential/forward.png';
import back from '../../../images/residential/back.png';

const projects = [
    {
        name: '5 STAR ASPHALT REFRESHMENT',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique senectus et netus et malesuada fames ac turpis.',
        images: [asphalt3, asphalt1, asphalt2]
    },
    {
        name: 'ROOFING DONE RIGHT',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique senectus et netus et malesuada fames ac turpis.',
        images: [roofing3, roofing1, roofing2]
    },
    {
        name: 'URBAN OASIS',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique senectus et netus et malesuada fames ac turpis.',
        images: [urban4, urban1, urban2, urban3, urban5]
    },
    {
        name: 'COMPLETE TRANSFORMATION',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique senectus et netus et malesuada fames ac turpis.',
        images: [transformation3, transformation1, transformation2]
    },
    {
        name: 'A TRENDY LANDSCAPE',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique senectus et netus et malesuada fames ac turpis.',
        images: [trendy3, trendy1, trendy2]
    }
]

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '90%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'white',
    boxShadow: 24
};

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

const buttonVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        x: [400, 0],
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
            delay: 1.3
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
                variants={cardVariants}
                ref={ref}
                animate={control}
                initial={{opacity: 0}}
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
            initial={{opacity: 0}}
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
            initial={{opacity: 0}}
        >
            <Typography variant='body2' sx={{my: 3, letterSpacing: '.03em', color: 'whitesmoke'}}>{body}</Typography>
        </motion.div>
    )
};

function Buttons({ selectProject, viewPictures }) {
    const [ref, inView] = useInView();
    const control = useAnimation();

    useEffect(() => {
        if(inView) {
            control.start('visible');
        }
    }, [control, inView]);

    return (
        <motion.div 
            variants={buttonVariants} 
            ref={ref}
            animate={control}
            initial={{opacity: 0}}
        >
            <IconButton
                onClick={selectProject}
            >
                <PlayCircleOutline sx={{color: '#ed6a22'}} fontSize='large' />
            </IconButton>
            <IconButton
                onClick={viewPictures}
            >
                <Filter sx={{color: '#ed6a22'}} fontSize='large' />
            </IconButton>
        </motion.div>
    )
};

const buttonStyle = {
    width: "30px",
    background: 'none',
    border: '0px'
};

const properties = {
    prevArrow: <button style={{ ...buttonStyle }}><img src={back} /></button>,
    nextArrow: <button style={{ ...buttonStyle, right: '70px' }}><img src={forward} /></button>
}

function Featured2() {
    const [open, setOpen] = useState(false);
    const [activeProject, setActiveProject] = useState(null);
    const [picturesOpen, setPicturesOpen] = useState(false);

    return (
        <>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
            >
                <Box sx={{...style, width: '90vw', p: 3}}>
                    <Typography variant='h2' sx={{textAlign: 'center'}}>{activeProject?.name}</Typography>
                </Box>
            </Modal>
            <Modal
                open={picturesOpen}
                onClose={() => setPicturesOpen(false)}
            >
                <Box sx={{...style, width: '90vw', height: '90vh', overflowY: 'hidden'}}>
                    <Zoom scale={1.4} {...properties} >
                        {activeProject?.images?.map((each, index) => (
                            <div key={index} style={{ width: "100%", height: '100%'}}>
                                <img style={{width: '100%', height: '100%'}} alt="Slide Image" src={each} />
                            </div>
                        ))}
                    </Zoom>
                </Box>
            </Modal>
            <Header title='FEATURED PROJECTS' name='featured' />
            <NavWrapper />
            
            <Box sx={{width: '100%', height: '100%', minHeight: '100vh', pt: '20vh', background: 'rgb(0,0,0)', background: 'linear-gradient(0deg, rgba(30,30,30) 34%, rgba(65,65,65,1) 90%)', overflowX: 'hidden'}}>
                
                <Box sx={{width: '90vw', m: '0 auto', maxWidth: '2000px'}}>
                    {projects.map(project => {
                        return (
                            <Box sx={{minHeight: '100vh'}}>
                                <Grid container spacing={8}>
                                    <Grid item xs={12} md={6} my='auto'>
                                        <Card img={project.images[0]} />
                                    </Grid>
                                    <Grid item xs={12} md={6} my='auto'>
                                        <Title title={project.name} />
                                        <Body 
                                            body={project.body}
                                        />
                                        <Buttons
                                            selectProject={() => {
                                                setActiveProject(project);
                                                setOpen(true);
                                            }}
                                            viewPictures={() => {
                                                setActiveProject(project);
                                                setPicturesOpen(true);
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                            </Box>
                        )
                    })}
                </Box>
            </Box>
            <Footer  />
        </>
    );
};

export default Featured2;