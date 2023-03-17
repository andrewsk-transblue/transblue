import React from "react";
import Header from "../../../components/header";
import CTA from "../../components/cta/cta";
import NavWrapper from "../../components/navbar/navWrapper";
import Footer from '../../components/footer/footer';
import { Box, Typography } from "@mui/material";

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

            <Footer />
        </>
    )
}

export default Residential;