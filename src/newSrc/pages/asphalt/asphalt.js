import { Circle } from "@mui/icons-material";
import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import Header from "../../../components/header";
import CTA from "../../components/cta/cta";
import Footer from "../../components/footer/footer";
import NavWrapper from "../../components/navbar/navWrapper";
import asphalt from '../../images/asphalt/asphalt.jpeg';
import parkinglot from '../../images/asphalt/parkinglot.jpeg';

const iconStyle = {
    fontSize: '8px',
    mr: 1,
    verticalAlign: 'middle'
}

function Asphalt() {

    return (
        <>
            <Header name='asphalt' title='ASPHALT' />
            <CTA />
            <NavWrapper page='asphalt' />

            <Box sx={{py: '20vh', width: '90vw', maxWidth: '2000px', m: '0 auto', overflowX: 'hidden'}}>
                <Grid container spacing={10}>
                    <Grid item xs={12} md={6}>
                        <img src={parkinglot} style={{borderRadius: '50%', width: '75%', position: 'relative', boxShadow: '0px 3px 15px rgba(0,0,0,0.5)'}} />
                        <img src={asphalt} style={{width: '300px', borderRadius: '50%', top: '150%', left: '30%', position: 'absolute', boxShadow: '0px 3px 15px rgba(0,0,0,0.5)'}} />
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
                <Grid container spacing={{xs: 2, md: 10}}>
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

            <Box sx={{py: '20vh', width: '90vw', maxWidth: '2000px', m: '0 auto'}}>

            </Box>
            <Footer />
        </>
    )
}

export default Asphalt;