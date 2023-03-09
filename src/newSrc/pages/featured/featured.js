import React, { useEffect } from "react";
import Header from "../../components/header/header";
import asphalt3 from '../../images/featured/asphalt3.jpg';
import { motion, useAnimation } from 'framer-motion/dist/framer-motion';
import { useInView } from "react-intersection-observer";
import { Box, Grid, Typography } from "@mui/material";

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
            variants={cardVariants} 
            ref={ref}
            animate={control}
        >
            <img src={asphalt3} style={{width: '100%'}} />
        </motion.div>
        // <Box sx={{height: '100vh'}}>
           
            // <motion.div
            //     className="card-container"
            //     initial="hidden"
            //     whileInView="visible"
            //     viewport={{ once: true, amount: 0.8 }}
            //     animate='visible'
            // >
            //     <motion.div 
            //         className="card" 
            //         variants={cardVariants} 
            //         ref={ref}
            //         animate={control}
            //     >
            //         <img src={asphalt3} style={{width: '100%'}} />
            //     </motion.div>
            // </motion.div>
    //   </Box>
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
            <Typography variant='h2' sx={{mt: 3, mb: 5}}>TEST TITLE</Typography>
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
                        <Card />
                        <Title />
                    </Grid>
                    <Grid item xs={6}>
                        <Card />
                        <Title />
                    </Grid>
                    <Grid item xs={6}>
                        <Card />
                        <Title />
                    </Grid>
                    <Grid item xs={6}>
                        <Card />
                        <Title />
                    </Grid>
                </Grid>
            </Box>
        </>
    )

}

export default Featured;