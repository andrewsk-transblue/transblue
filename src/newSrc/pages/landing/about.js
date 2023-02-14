import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import quality4 from '../../images/quality4.jpg';
import quality5 from '../../images/quality5.jpg';
import tim6 from '../../images/tim6.jpg';
import grainger from '../../images/grainger.png';

function About() {

    return (
        <Box sx={{py: '10vh'}}>
            <Grid container width='95vw' maxWidth='2000px' height='100%' m='0 auto'>
                <Grid item xs={12} md={6} my='auto' pr={{xs: 0, md: 4}} mb={{xs: 2, md: 0}}>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <img
                                src={`${tim6}?fit=crop&auto=format`}
                                srcSet={`${tim6}?&fit=crop&auto=format&dpr=2 2x`}
                                alt='Snow Removal'
                                loading="lazy"
                                style={{width: '100%'}}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <img
                                src={`${quality5}?fit=crop&auto=format`}
                                srcSet={`${quality5}?&fit=crop&auto=format&dpr=2 2x`}
                                alt='Commercial Asphalt Installation'
                                loading="lazy"
                                style={{width: '100%'}}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <img
                                src={`${quality4}?fit=crop&auto=format`}
                                srcSet={`${quality4}?&fit=crop&auto=format&dpr=2 2x`}
                                alt='Multifamily Electric Vehicles'
                                loading="lazy"
                                style={{width: '100%'}}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <img
                                src={`${grainger}?fit=crop&auto=format`}
                                srcSet={`${grainger}?&fit=crop&auto=format&dpr=2 2x`}
                                alt='Commercial Maintenance'
                                loading="lazy"
                                style={{width: '100%'}}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6} my='auto' pl={{xs: 0, md: 4}}>
                    <Typography variant='h2' sx={{color: '#0b56a4', mb: 2, fontWeight: 500}}>TRANSBLUE GENERAL CONTRACTORS</Typography>
                    <Typography variant='body2' sx={{mb: 1}}>
                        At Transblue, we have been in the business for over 17 years. We love helping people and we love providing an incredible customer experience for every one of our clients. We never cut corners and see every project through to the end, whether it's landscaping, asphalt or snow services.
                    </Typography>
                    <Typography variant='body2'>
                        Our passion is to build beautiful projects and we believe in treating your property like ours. We truly care about your project and doing a great job for you. We listen, collaborate, and design. This enables us to turn your project and dream into a reality. Our goal is to always exceed expectations of our customers!
                    </Typography>
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>
        </Box>
    )

}

export default About;