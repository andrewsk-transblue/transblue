import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Header from "../../../components/header";
import CTA from "../../components/cta/cta";
import Footer from "../../components/footer/footer";
import NavWrapper from "../../components/navbar/navWrapper";

function Asphalt() {

    return (
        <>
            <Header name='asphalt' title='ASPHALT' />
            <CTA />
            <NavWrapper page='asphalt' />

            <Box sx={{py: '20vh', width: '90vw', maxWidth: '2000px', m: '0 auto'}}>
                <Grid container spacing={10}>
                    <Grid item xs={12} md={6}>

                    </Grid>
                    <Grid item xs={12} md={6}>
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
            <Footer />
        </>
    )
}

export default Asphalt;