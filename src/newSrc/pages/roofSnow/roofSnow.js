import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import CTA from "../../components/cta/cta";
import Footer from "../../components/footer/footer";
import NavWrapper from "../../components/navbar/navWrapper";

function RoofSnow() {

    return (
        <>
            <NavWrapper page='Snow Removal' />
            <CTA />
            <Footer />

            <Box sx={{width: '90vw', maxWidth: '2000px', py: '20vh'}}>
                <Grid container spacing={10}>
                    <Grid item xs={12} md={6}>

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant='h2' sx={{color: '#0b56a4', fontWeight: 500, mb: 2}}>
                            ROOF SNOW REMOVAL
                        </Typography>
                        <Typography variant='body2' sx={{mb: 2}}>Transblue offers comprehensive snow removal on roof services to ensure the safety and integrity of your property during the winter months.</Typography>
                        <Typography variant='body2' sx={{mb: 2}}>Our team of experts uses state-of-the-art equipment and techniques to efficiently remove snow and ice from your roof without causing any damage.</Typography>
                        <Typography variant='body2' sx={{mb: 2}}>With Transblue, you can have peace of mind knowing that your property is in good hands and that our services are tailored to meet your specific needs and budget.</Typography>
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
        </>
    )

}

export default RoofSnow;