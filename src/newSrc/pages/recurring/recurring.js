import React from "react";
import Header from "../../../components/header";
import CTA from "../../components/cta/cta";
import Footer from "../../components/footer/footer";
import NavWrapper from "../../components/navbar/navWrapper";
import dispatch from '../../images/dispatch.jpg';
import { Box, Grid, Typography } from "@mui/material";
import monitor from '../../images/monitor.png';

// we can have someone on site in as little as 30 minutes 

function Recurring() {

    return (
        <>
            <NavWrapper page='recurring' />
            <CTA />
            <Header name='recurring' title='RECURRING MAINTENANCE' />

            <Box sx={{width: '90%', py: '10vh', maxWidth: '2000px', m: '0 auto'}}>
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <Typography variant='h2' sx={{color: '#0b56a4', fontWeight: 500, mb: 2}}>ON DEMAND MAINTENANCE</Typography>
                        <Typography variant='body2'>We understand that unexpected maintenance issues can arise at any time, causing disruptions and impacting your business operations. That's why we offer on-demand maintenance services that can quickly address and resolve any issues as they arise. Our team of skilled professionals is available round the clock to offer quick and efficient maintenance services, minimizing downtime and ensuring your business continues to run smoothly. With Transblue, you can have peace of mind knowing that your business is in good hands.</Typography>
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{width: '90%', pb: '10vh', maxWidth: '2000px', m: '0 auto'}}>
                <Grid container>
                    <Grid item xs={12} md={6} my='auto'>
                        <img src={monitor} style={{width: '100%', maxWidth: '400px'}} />
                    </Grid>
                    <Grid item xs={12} md={6} my='auto'>
                        <Typography variant='h2' sx={{color: '#0b56a4', fontWeight: '500', mb: 2}}>BUILT ON SOFTWARE</Typography>
                        <Typography variant='body2'>A contract with Transblue includes a work order app custom built by our team of developers for your company, and your company only. </Typography>
                        <Typography variant='body2'>There's no more searching for the perfect software to fit your needs. </Typography>
                    </Grid>
                </Grid>
            </Box>

            <Footer />
        </>
    )
}

export default Recurring;