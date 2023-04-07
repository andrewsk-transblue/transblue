import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import Header from '../../../components/header';
import CTA from '../../components/cta/cta';
import Footer from '../../components/footer/footer';
import NavWrapper from '../../components/navbar/navWrapper';
import placeholder from '../../images/placeholder.jpg';

function CapEx() {

    return(
        <>
            <NavWrapper page='Capital Projects' />
            <CTA />
            <Header name='capex' title='CAPITAL EXPENDITURE' />

            <Box sx={{width: '90vw', maxWidth: '2000px', py: '20vh', m: '0 auto'}}>
                <Grid container spacing={10}>
                    <Grid item xs={12} md={6}>
                        <video style={{width: '100%', height: '100%', maxHeight: '500px'}} autoPlay>
                            <source src='https://tbconnectstorage.blob.core.windows.net/projectimages/capEx.mp4' style={{width: '100%', maxHeight: '500px'}} />
                        </video>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant='h2' sx={{color: '#0b56a4', fontWeight: 500, letterSpacing: '.03em', mb: 2}}>
                            CAPITAL EXPENDITURE
                        </Typography>
                        <Typography variant='body2' sx={{mb: 3}}>Transblue is a leading provider of capital expenditure project services, offering a wide range of solutions tailored to meet the unique needs of each client. With years of experience and a team of skilled professionals, we have earned the trust of businesses across various industries. Our track record of successfully completing projects for several major brands speaks to our commitment to quality, reliability, and exceptional customer service.</Typography>
                        <Button
                            variant='contained'
                        >
                            send us a message
                        </Button>
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{width: '90vw', maxWidth: '2000px', pb: '20vh', m: '0 auto'}}>
                <Typography variant='h1' sx={{color: '#0b56a4', letterSpacing: '.03em', textAlign: 'center', mb: 3}}>REFRESH YOUR BRAND</Typography>
                <Typography variant='body2' sx={{textAlign: 'center', width: '100%', maxWidth: '850px', pb: 5, m: '0 auto'}}>With a diverse range of capital expenditure projects, Transblue can help transform your property and revitalize your brand with our comprehensive services. We offer everything from interior remodels to landscaping to roof renovations</Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                        <img src={placeholder} alt='' style={{width: '100%'}} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <img src={placeholder} alt='' style={{width: '100%'}} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <img src={placeholder} alt='' style={{width: '100%'}} />
                    </Grid>
                </Grid>
            </Box>
            <Footer />
        </>
    )

}

export default CapEx;