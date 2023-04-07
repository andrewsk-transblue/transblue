import { Box, Button, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Header from '../../../components/header';
import CTA from '../../components/cta/cta';
import Footer from '../../components/footer/footer';
import NavWrapper from '../../components/navbar/navWrapper';
import placeholder from '../../images/placeholder.jpg';
import commIcon from '../../images/asphalt/commIcon.jpg';
import multifamilyIcon from '../../images/asphalt/multifamilyIcon.jpg';
import govtIcon from '../../images/asphalt/govtIcon.jpg';

function CapEx() {
    const [screenSize, setScreenSize] = useState('small');

    const getScreenSize = () => {
        if(window.innerWidth > 980) {
            setScreenSize('large')
        }

        else setScreenSize('small')
    }

    useEffect(() => {
        getScreenSize();
    }, []);

    return(
        <>
            <NavWrapper page='Capital Projects' />
            <CTA />
            <Header name='capex' title='CAPITAL EXPENDITURE' />

            <Box sx={{width: '90vw', maxWidth: '2000px', py: '20vh', m: '0 auto'}}>
                <Grid container spacing={10}>
                    <Grid item xs={12} md={6}>
                        <video style={{width: '100%', height: '100%', maxHeight: '500px'}}>
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
                <Typography variant='h2' sx={{color: '#0b56a4', letterSpacing: '.03em', textAlign: 'center', mb: 3, fontWeight: 500}}>REFRESH YOUR BRAND</Typography>
                <Typography variant='body2' sx={{textAlign: 'center', width: '100%', maxWidth: '850px', pb: 5, m: '0 auto'}}>With a diverse range of capital expenditure projects, Transblue can help transform your property and revitalize your brand with our comprehensive services. We offer everything from interior remodels to landscaping to roof renovations and more!</Typography>
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

            <Box sx={{pb: '20vh', width: {xs: '90vw', md: '80vw'}, maxWidth: '1500px', m: '0 auto'}}>
                <Grid container spacing={{xs: 5, md: 10}}>
                    <Grid item xs={12} md={6} my='auto' order={{xs: 2, md: 1}}>
                        <Grid container spacing={{xs: 3, md: 5, xl: 10}}>
                            <Grid item xs={12} md={3} my='auto' textAlign={screenSize === 'small' ? 'center' : 'left'}>
                                <img src={commIcon} style={{width: screenSize === 'small' ? '50%' : '100%'}} />
                            </Grid>
                            <Grid item xs={12} md={9} my='auto' textAlign={screenSize === 'small' ? 'center' : 'left'}>
                                <Typography variant='h2' sx={{letterSpacing: '.03em'}}>COMMERCIAL</Typography>
                            </Grid>
                            <Grid item xs={12} md={3} my='auto' textAlign={screenSize === 'small' ? 'center' : 'left'}>
                                <img src={multifamilyIcon} style={{width: screenSize === 'small' ? '50%' : '100%'}} />
                            </Grid>
                            <Grid item xs={12} md={9} my='auto' textAlign={screenSize === 'small' ? 'center' : 'left'}>
                                <Typography variant='h2' sx={{letterSpacing: '.03em'}}>MULTIFAMILY</Typography>
                            </Grid>
                            <Grid item xs={12} md={3} my='auto' textAlign={screenSize === 'small' ? 'center' : 'left'}>
                                <img src={govtIcon} style={{width: screenSize === 'small' ? '50%' : '100%'}} />
                            </Grid>
                            <Grid item xs={12} md={9} my='auto' textAlign={screenSize === 'small' ? 'center' : 'left'}>
                                <Typography variant='h2' sx={{letterSpacing: '.03em'}}>GOVERNMENT</Typography>
                            </Grid>
                            
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6} my='auto' order={{xs: 1, md: 2}}>
                        <Typography variant='h2' sx={{color: '#0b56a4', fontWeight: 500, mb: 2}}>OUR CLIENTS</Typography>
                        {/* <Typography variant='body2'>Transblue is your one-stop-shop for all your asphalt needs, providing comprehensive services to government, multifamily, and commercial clients. Whether you need asphalt maintenance, repair, or new installation, Transblue can handle projects of any size, from single sites to hundreds of sites across the country.</Typography> */}
                        <Typography variant='body2'>Transblue is a one-stop-shop for all capital expenditure projects, catering to government, multifamily, and commercial clients with equal ease. Whether you have a single site or a large portfolio of properties, our team is equipped to handle all your asphalt needs efficiently and reliably.</Typography>
                    </Grid>
                </Grid>
            </Box>
            <Footer />
        </>
    )

}

export default CapEx;