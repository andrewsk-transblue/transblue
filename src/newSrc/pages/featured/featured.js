import React, { useEffect } from "react";
import Header from "../../components/header/header";
import asphalt3 from '../../images/featured/asphalt3.jpg';
import { motion, useAnimation } from 'framer-motion/dist/framer-motion';
import { useInView } from "react-intersection-observer";
import { Box, Grid, Typography } from "@mui/material";
import roofing3 from '../../images/featured/roofing3.jpg';
import urban4 from '../../images/featured/urban4.jpg';
import transformation3 from '../../images/featured/transformation3.jpg';
import trendy3 from '../../images/featured/trendy3.jpg';
import './style.css';

const cardVariants = {
    hidden: {
        y: 0
    },
    visible: {
        y: [200, 0],
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    }
};

const titleVariants = {
    hidden: {
        x: -200,
        opacity: 0
    },
    visible: {
        x: [-200, 0],
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
            delay: .2
        },
        opacity: [0, 1]
    }
};

function Card({ img }) {
    const [ref, inView] = useInView();
    const control = useAnimation();

    useEffect(() => {
        if(inView) {
            control.start('visible');
        }
    }, [control, inView])
  
    return (
        <motion.div 
            className='project-card'
            variants={cardVariants} 
            ref={ref}
            animate={control}
            // src={img}
            // style={{width: '100%'}} 
            whileHover={{ scale: 1.02 }}
        >
            <img src={img} style={{width: '100%', overflow: 'hidden'}} />
        </motion.div>
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
            <Typography variant='h2' sx={{mt: 3, mb: 5, fontWeight: 500, letterSpacing: '.03em'}}>{title}</Typography>
        </motion.div>
    )
  
}

function Featured() {
    return (
        <>
            <Header title='FEATURED PROJECTS' name='featured' />
            
            <Box sx={{width: '90vw', maxWidth: '2000px', m: '0 auto', py: '20vh'}}>
                <Grid container spacing={5}>
                    <Grid item xs={6}>
                        <Card img={asphalt3} />
                        <Title title='5 STAR ASPHALT REFRESHMENT' />
                    </Grid>
                    <Grid item xs={6}>
                        <Card img={roofing3} />
                        <Title title='ROOFING DONE RIGHT' />
                    </Grid>
                    <Grid item xs={6}>
                        <Card img={urban4} />
                        <Title title='URBAN OASIS' />
                    </Grid>
                    <Grid item xs={6}>
                        <Card img={transformation3} />
                        <Title title='COMPLETE TRANSFORMATION' />
                    </Grid>
                    <Grid item xs={6}>
                        <Card img={trendy3} />
                        <Title title='A TRENDY LANDSCAPE' />
                    </Grid>
                </Grid>
            </Box>
        </>
    )

}

export default Featured;