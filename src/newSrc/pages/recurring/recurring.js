import React from "react";
import Header from "../../../components/header";
import CTA from "../../components/cta/cta";
import Footer from "../../components/footer/footer";
import NavWrapper from "../../components/navbar/navWrapper";
import dispatch from '../../images/dispatch.png';
import { Box, Button, Grid, Typography } from "@mui/material";
import { AttachMoney, Construction, Laptop, Timelapse } from "@mui/icons-material";
import maintenance from '../../images/maintenance.jpg';
import network from '../../images/asphalt/network.jpeg';

// we can have someone on site in as little as 30 minutes 
// Super simple to use!
// Customizable services for your company's needs
// Comes at no charge to you!

function Recurring() {

    return (
        <>
            <NavWrapper page='recurring' />
            <CTA />
            <Header name='recurring' title='RECURRING MAINTENANCE' />

            <Box sx={{width: '90%', py: '20vh', maxWidth: '2000px', m: '0 auto'}}>
                <Grid container spacing={{xs: 5, md: 10}}>
                    <Grid item xs={12} md={6} my='auto' order={{xs: 2, md: 1}}>
                        <Typography variant='h2' sx={{color: '#0b56a4', fontWeight: 500, mb: 2}}>ON DEMAND MAINTENANCE</Typography>
                        <Typography variant='body2' sx={{mb: 2}}>We understand that unexpected maintenance issues can arise at any time, causing disruptions and impacting your business operations. That's why we offer on-demand maintenance services that can quickly address and resolve any issues as they arise. </Typography>
                        <Typography variant='body2'>
                        Our team of skilled professionals is available round the clock to offer quick and efficient maintenance services, minimizing downtime and ensuring your business continues to run smoothly. With Transblue, you can have peace of mind knowing that your business is in good hands.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} my='auto' order={{ xs: 1, md: 2}}>
                        <img src={maintenance} style={{width: '100%', borderRadius: '0px 0px 200px 0px'}} />
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{width: '90%', pb: '20vh', maxWidth: '2000px', m: '0 auto'}}>
                <Grid container spacing={{xs: 5, md: 10}}>
                    <Grid item xs={12} md={6} my='auto'>
                        <Box sx={{position: 'relative', width: '100%', maxWidth: '600px', height: '400px', bgcolor: '#ed6a22', borderRadius: '200px 0px', boxShadow: '0px 3px 15px rgba(0,0,0,0.5)'}}>
                            <img src={dispatch} style={{maxWidth: '400px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} my='auto'>
                        <Typography variant='h2' sx={{color: '#0b56a4', fontWeight: '500', mb: 2}}>BUILT ON SOFTWARE</Typography>
                        <Typography variant='body2' sx={{mb: 3}}>A contract with Transblue includes work order software custom built by our team of developers for your company, and your company only. There's no more searching for the perfect software to fit your needs. </Typography>

                        <Typography variant='body2' sx={{bgcolor: 'whitesmoke', p: 1}}><Timelapse sx={{mr: 1, color: '#0b56a4'}} /> Dispatch times as low as 30 minutes</Typography>
                        <Typography variant='body2' sx={{p: 1}}><Laptop sx={{mr: 1, color: '#0b56a4'}} /> Simple and easy onboarding</Typography>
                        <Typography variant='body2' sx={{bgcolor: 'whitesmoke', p: 1}}><Construction sx={{mr: 1, color: '#0b56a4'}} /> Customizable services for your company's needs</Typography>
                        <Typography variant='body2' sx={{p: 1, mb: 3}}><AttachMoney sx={{mr: 1, color: '#0b56a4'}} /> Completely free of charge</Typography>

                        <Button
                            variant='outlined'
                            sx={{color: '#0b56a4', border: '2px solid #0b56a4', mt: 2, fontSize: '12px'}}
                            component='a'
                            href='/contact'
                            fullWidth
                        >
                            book a demo now
                        </Button>
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{pb: '20vh', width: '100%', pl: '5vw'}}>
                <Grid container spacing={10}>
                    <Grid item xs={12} md={6} my='auto' order={{xs: 2, md: 1}}>
                        <Typography variant='h2' sx={{color: '#0b56a4', mb: 2, fontWeight: 500, letterSpacing: '.03em'}}>
                            EXTENSIVE SUBCONTRACTOR NETWORK
                        </Typography>
                        <Typography variant='body2' sx={{mb: 3}}>With an extensive network of trusted and experienced subcontractors, Transblue ensures that quality work is done at every site togive you peace of mind knowing that your property is in good hands!</Typography>
                        <Button
                            variant='outlined'
                            sx={{color: '#0b56a4', border: '2px solid #0b56a4', mt: 2, fontSize: '12px'}}
                            component='a'
                            href='/contact'
                        >
                            contact us
                        </Button>

                    </Grid>
                    <Grid item xs={12} md={6} my='auto' order={{xs: 1, md: 2}}>
                        <img src={network} style={{width: '100%'}} />
                    </Grid>
                </Grid>
            </Box>

            <Footer />
        </>
    )
}

export default Recurring;