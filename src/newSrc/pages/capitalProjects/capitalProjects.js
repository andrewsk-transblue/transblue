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
import { Circle, Construction, FormatPaint, GridView, Lightbulb, Warehouse } from '@mui/icons-material';
import asphalt from '../../images/capEx/asphalt2.jpg';
import indoor from '../../images/capEx/indoor.jpeg';
import refresh from '../../images/capEx/refresh.jpg';

const iconStyle = {
    fontSize: '8px',
    mr: 1,
    verticalAlign: 'middle'
}

function CapEx() {
    const [screenSize, setScreenSize] = useState('small');
    const [screenWidth, setScreenWidth] = useState(window.innerWidth / 4);

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
                            variant='outlined'
                            sx={{color: '#0b56a4', border: '2px solid #0b56a4', mt: 2, fontSize: '12px'}}
                            component='a'
                            href='/contact'
                        >
                            send us a message
                        </Button>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{width: '90vw', maxWidth: '2000px', pb: '20vh', m: '0 auto'}}>
                <Typography variant='h2' sx={{color: '#0b56a4', letterSpacing: '.03em', textAlign: 'center', mb: 3, fontWeight: 500}}>REFRESH YOUR BRAND</Typography>
                <Typography variant='body2' sx={{textAlign: 'center', width: '90%', maxWidth: {xs: '850px', xl: '2000px'}, pb: 5, m: '0 auto'}}>With a diverse range of capital expenditure projects, Transblue can help transform your property and revitalize your brand with our comprehensive services. We offer everything from interior remodels to landscaping to roof renovations and more!</Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                        <img src={asphalt} alt='' style={{width: '100%'}} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <img src={indoor} alt='' style={{width: '100%'}} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <img src={refresh} alt='' style={{width: '100%'}} />
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{width: '90vw', maxWidth: '2000px', pb: '20vh', m: '0 auto'}}>
                <Grid container spacing={10}>
                    <Grid item xs={12} md={6} my='auto'>
                        <iframe width="100%" height={window.innerHeight * .75} src="https://www.youtube.com/embed/WeCO53IGQcY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </Grid>
                    <Grid item xs={12} md={6} my='auto'>
                        <Typography variant='h2' sx={{color: '#0b56a4', fontWeight: 500, letterSpacing: '.03em', mb: 2}}>
                            INTERIOR REMODELING
                        </Typography>
                        <Typography variant='body2' sx={{mb: 3}}>Enhance your space with our professional interior remodeling services. Our experienced general contractors provide expert guidance and execute capital expenditures to transform your interior into a beautiful, functional space.</Typography>
                        <Typography variant='body2' sx={{bgcolor: 'whitesmoke', p: 1}}><FormatPaint sx={{mr: 1, color: '#0b56a4'}} /> Painting</Typography>
                        <Typography variant='body2' sx={{p: 1}}><GridView sx={{mr: 1, color: '#0b56a4'}} /> Tiling</Typography>
                        <Typography variant='body2' sx={{bgcolor: 'whitesmoke', p: 1}}><Warehouse sx={{mr: 1, color: '#0b56a4'}} /> Installing Shelving</Typography>
                        <Typography variant='body2' sx={{p: 1}}><Lightbulb sx={{mr: 1, color: '#0b56a4'}} /> Upgrade lighting</Typography>
                        <Typography variant='body2' sx={{bgcolor: 'whitesmoke', p: 1, mb: 2}}><Construction sx={{mr: 1, color: '#0b56a4'}} /> And much, much more!</Typography>
                        <Typography variant='body2' sx={{mb: 2}}>
                            Contact us today to discuss your project needs!
                        </Typography>
                        <Button
                            variant='outlined'
                            sx={{color: '#0b56a4', border: '2px solid #0b56a4', mt: 2, fontSize: '12px'}}
                            component='a'
                            href='/contact'
                        >
                            send us a message
                        </Button>
                    </Grid>
                </Grid>
            </Box>
            
            <Box sx={{width: '80vw', maxWidth: '2000px', pb: '20vh', m: '0 auto'}}>
                <Grid container spacing={10}>
                    <Grid item xs={12} md={6} my='auto'>
                        <Typography variant='h2' sx={{color: '#0b56a4', fontWeight: 500, letterSpacing: '.03em', mb: 2}}>
                            EXTERIOR PROJECTS
                        </Typography>
                        <Typography variant='body2' sx={{mb: 2}}>Elevate your curb appeal with our top-notch exterior remodeling services. Our skilled general contractors specialize in capital expenditures for exterior transformations that enhance your site's aesthetics, durability, and value. Contact us for a consultation and give your site a stunning makeover!</Typography>
                        {/* <Typography variant='body2' sx={{mb: 2}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae.</Typography> */}
                        
                    </Grid>
                    <Grid item xs={12} md={6} my='auto'>
                        <Box sx={{width: '100%', maxWidth: '700px', bgcolor: '#0b56a4', height: '500px', borderRadius: `250px 0px`, position: 'relative'}}>
                            <Box sx={{maxWidth: '400px', width: '80%', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                                <ul>
                                    <Typography variant='h6' sx={{color: 'white', mb: 1}}><Circle sx={iconStyle} /> SIDING</Typography> 
                                    <Typography variant='h6' sx={{color: 'white', mb: 1}}><Circle sx={iconStyle} /> ROOF REPAIR</Typography> 
                                    <Typography variant='h6' sx={{color: 'white', mb: 1}}><Circle sx={iconStyle} /> ROOF INSTALLATION</Typography> 
                                    <Typography variant='h6' sx={{color: 'white', mb: 1}}><Circle sx={iconStyle} /> LANDSCAPING</Typography> 
                                    <Typography variant='h6' sx={{color: 'white', mb: 1}}><Circle sx={iconStyle} /> EV CHARGERS</Typography> 
                                    <Typography variant='h6' sx={{color: 'white', mb: 1}}><Circle sx={iconStyle} /> ASPHALT</Typography> 
                                    <Typography variant='h6' sx={{color: 'white', mb: 1}}><Circle sx={iconStyle} /> SNOW SERVICES</Typography> 
                                </ul>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{pb: '20vh', width: {xs: '90vw', md: '80vw'}, maxWidth: '2000px', m: '0 auto'}}>
                <Grid container spacing={{xs: 5, md: 10}}>
                    <Grid item xs={12} md={6} my='auto' order={{xs: 2, md: 1}}>
                        <Grid container spacing={{xs: 3, md: 5, xl: 10}}>
                            <Grid item xs={5} md={3} my='auto' textAlign={screenSize === 'small' ? 'center' : 'left'}>
                                <img src={commIcon} style={{width: screenSize === 'small' ? '80%' : '100%'}} />
                            </Grid>
                            <Grid item xs={7} md={9} my='auto' textAlign={screenSize === 'small' ? 'center' : 'left'}>
                                <Typography variant='h1' sx={{letterSpacing: '.03em'}}>COMMERCIAL</Typography>
                            </Grid>
                            <Grid item xs={5} md={3} my='auto' textAlign={screenSize === 'small' ? 'center' : 'left'}>
                                <img src={multifamilyIcon} style={{width: screenSize === 'small' ? '80%' : '100%'}} />
                            </Grid>
                            <Grid item xs={7} md={9} my='auto' textAlign={screenSize === 'small' ? 'center' : 'left'}>
                                <Typography variant='h1' sx={{letterSpacing: '.03em'}}>MULTIFAMILY</Typography>
                            </Grid>
                            <Grid item xs={5} md={3} my='auto' textAlign={screenSize === 'small' ? 'center' : 'left'}>
                                <img src={govtIcon} style={{width: screenSize === 'small' ? '80%' : '100%'}} />
                            </Grid>
                            <Grid item xs={7} md={9} my='auto' textAlign={screenSize === 'small' ? 'center' : 'left'}>
                                <Typography variant='h1' sx={{letterSpacing: '.03em'}}>GOVERNMENT</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6} my='auto' order={{xs: 1, md: 2}}>
                        <Typography variant='h2' sx={{color: '#0b56a4', fontWeight: 500, mb: 2}}>OUR CAPEX CLIENTS</Typography>
                        {/* <Typography variant='body2'>Transblue is your one-stop-shop for all your asphalt needs, providing comprehensive services to government, multifamily, and commercial clients. Whether you need asphalt maintenance, repair, or new installation, Transblue can handle projects of any size, from single sites to hundreds of sites across the country.</Typography> */}
                        <Typography variant='body2'>Transblue is a one-stop shop for all capital expenditure projects, catering to government, multifamily, and commercial clients with equal ease. Whether you have a single site or a large portfolio of properties, our team is equipped to handle all your service needs efficiently and reliably.</Typography>
                    </Grid>
                </Grid>
            </Box>
            <Footer />
        </>
    )
};


export default CapEx;