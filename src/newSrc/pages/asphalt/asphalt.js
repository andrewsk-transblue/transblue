import { Circle } from "@mui/icons-material";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../../../components/header";
import CTA from "../../components/cta/cta";
import Footer from "../../components/footer/footer";
import NavWrapper from "../../components/navbar/navWrapper";
import asphalt from '../../images/asphalt/asphalt.jpeg';
import parkinglot from '../../images/asphalt/parkinglot.jpeg';
import commIcon from '../../images/asphalt/commIcon.jpg';
import multifamilyIcon from '../../images/asphalt/multifamilyIcon.jpg';
import govtIcon from '../../images/asphalt/govtIcon.jpg';
import network from '../../images/asphalt/network.jpeg';
import CenteredDiv from "../../components/centeredDiv/centeredDiv";

const iconStyle = {
    fontSize: '8px',
    mr: 1,
    verticalAlign: 'middle'
}

function Asphalt() {
    const [screenSize, setScreenSize] = useState('small');
    const [height, setHeight] = useState(window.innerHeight * .75)

    const getScreenSize = () => {
        if(window.innerWidth > 980) {
            setScreenSize('large')
        }

        else setScreenSize('small')
    }

    useEffect(() => {
        getScreenSize();
    }, []);

    return (
        <>
            <video autoPlay loop muted>
                <source src="https://tbconnectstorage.blob.core.windows.net/projectimages/Asphalt_Web.mp4" />
            </video>
            
            <CTA />
            <NavWrapper page='asphalt' />

            <Box sx={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,.644)', zIndex: 5}}></Box>
            <CenteredDiv>
                <Typography variant='h1' sx={{color: 'white', textAlign: 'center', letterSpacing: '.03em'}}>ASPHALT</Typography>
            </CenteredDiv>

            <Box sx={{py: '20vh', width: '90vw', maxWidth: '2000px', m: '0 auto', overflowX: 'hidden'}}>
                <Grid container spacing={{xs: 18, md: 10}}>
                    <Grid item xs={12} md={6}>
                        <img src={parkinglot} style={{borderRadius: '50%', width: '75%', position: 'relative', boxShadow: '0px 3px 15px rgba(0,0,0,0.5)'}} />
                        <img src={asphalt} style={{width: '300px', borderRadius: '50%', top: '150%', left: screenSize === 'small' ? '50%' : '25%', position: 'absolute', boxShadow: '0px 3px 15px rgba(0,0,0,0.5)'}} />
                    </Grid>
                    <Grid item xs={12} md={6} my='auto'>
                        <Typography variant='h2' sx={{color: '#0b56a4', mb: 2, mt: {
                        xs: 3,
                        md: 0
                    }, fontWeight: 500}}>HIGH QUALITY ASPHALT SERVICES</Typography>
                        <Typography variant='body2' sx={{mb: 2}}>At Transblue, we believe in providing high quality asphalt services that include everything from installation and repair to sealcoating and striping. </Typography>
                        <Typography variant='body2'>
                        With our extensive knowledge and expertise in the industry, we ensure your asphalt surfaces are properly maintained, enhancing their lifespan and appearance.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{width: '100%', mb: '20vh', bgcolor: '#303030', px: 10, py: 7}}>
                <Grid container spacing={{xs: 4, md: 10}}>
                    <Grid item xs={12} md={6}>
                        <Typography variant='h2' sx={{color: 'white', fontWeight: 500, mb: 2}}>OUR SERVICES</Typography>
                        <Divider sx={{mb: 2, width: '25%', borderBottom: '2px solid #ed6a22'}} />
                        <Typography variant='body2' sx={{color: 'white'}}>At Transblue, we offer a wide range of services to help you get the most out of your paving project and keep your property looking emaculate.</Typography>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Typography variant='body2' sx={{color: 'white', mb: 1}}><Circle sx={iconStyle} /> Installation</Typography>
                        <Typography variant='body2' sx={{color: 'white', mb: 1}}><Circle sx={iconStyle} /> Seal Coat</Typography>
                        <Typography variant='body2' sx={{color: 'white', mb: 1}}><Circle sx={iconStyle} /> Crack Fill</Typography>
                        <Typography variant='body2' sx={{color: 'white', mb: 1}}><Circle sx={iconStyle} /> Patching</Typography>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Typography variant='body2' sx={{color: 'white', mb: 1}}><Circle sx={iconStyle} /> Resurfacing</Typography>
                        <Typography variant='body2' sx={{color: 'white', mb: 1}}><Circle sx={iconStyle} /> Repairs</Typography>
                        <Typography variant='body2' sx={{color: 'white', mb: 1}}><Circle sx={iconStyle} /> Regular Inspections</Typography>
                        <Typography variant='body2' sx={{color: 'white', mb: 1}}><Circle sx={iconStyle} /> Striping</Typography>
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
                        <Typography variant='h2' sx={{color: '#0b56a4', fontWeight: 500, mb: 2}}>OUR ASPHALT CLIENTS</Typography>
                        {/* <Typography variant='body2'>Transblue is your one-stop-shop for all your asphalt needs, providing comprehensive services to government, multifamily, and commercial clients. Whether you need asphalt maintenance, repair, or new installation, Transblue can handle projects of any size, from single sites to hundreds of sites across the country.</Typography> */}
                        <Typography variant='body2'>Transblue is a one-stop-shop for all asphalt services, catering to government, multifamily, and commercial clients with equal ease. Whether you have a single site or a large portfolio of properties, our team is equipped to handle all your asphalt needs efficiently and reliably.</Typography>
                    </Grid>
                </Grid>
            </Box>
            
           <Box sx={{pb: '20vh', width: '90vw', maxWidth: '2000px', m: '0 auto',}}>
            <Grid container spacing={10}>
                <Grid item xs={12} md={6} my='auto'>
                    <iframe width="100%" height={height} src="https://www.youtube.com/embed/K6_fAgv2CE8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </Grid>
                <Grid item xs={12} md={6} my='auto'>
                    <Typography variant='h2' sx={{color: '#0b56a4', letterSpacing: '.03em', mb: 2, fontWeight: 500}}>
                        THE MARRIOT PROJECT
                    </Typography>
                    <Typography variant='body2' sx={{mb: 2}}>Asphalt maintenance is essential in commercial properties. Applying a seal coat overlay to the existing asphalt keeps the parking lot looking fresh and sharp.</Typography>
                    <Typography variant='body2' sx={{mb: 2}}>
                        When working with a worldwide hospitality client such as Marriott, it is crucial to be on time, on budget, and have minimal impact on guests.
                    </Typography>
                    <Typography variant='body2' sx={{mb: 2}}>
                        The service was delivered with World Class efficiency and established Transblue as a reliable partner for Marriott's future needs.
                    </Typography>
                    <Button
                        variant='contained'
                    >
                        send us a message
                    </Button>
                </Grid>
            </Grid>
           </Box>

            <Box sx={{pb: '20vh', width: '100%', pl: '5vw'}}>

                <Grid container spacing={10}>
                    <Grid item xs={12} md={6} my='auto'>
                        <Typography variant='h2' sx={{color: '#0b56a4', mb: 2, fontWeight: 500, letterSpacing: '.03em'}}>
                            EXTENSIVE SUBCONTRACTOR NETWORK
                        </Typography>
                        <Typography variant='body2' sx={{mb: 3}}>With an extensive network of trusted and experienced subcontractors, Transblue ensures that quality work is done at every site, giving you peace of mind knowing that your asphalt project is in good hands.</Typography>
                        <Button
                            variant='contained'
                        >
                            contact us
                        </Button>

                    </Grid>
                    <Grid item xs={12} md={6} my='auto'>
                        <img src={network} style={{width: '100%'}} />
                    </Grid>
                </Grid>
            </Box>
            <Footer />
        </>
    )
}

export default Asphalt;