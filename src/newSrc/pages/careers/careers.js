import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import Header from "../../../components/header";
import CTA from "../../components/cta/cta";
import NavWrapper from "../../components/navbar/navWrapper";
import logo from '../../images/logoCropped.png';
import { Fade } from "react-reveal";
import through from '../../images/careers/through.png';
import engaged from '../../images/careers/engaged.png';
import nimble from '../../images/careers/nimble.png';
import grit from '../../images/careers/grit.png';
import help from '../../images/careers/help.png';
import eachother from '../../images/careers/eachother.png';

function Careers() {

    return(
        <>
            <Header title='TRANSBLUE CAREERS' name='careers' />
            <NavWrapper />
            <CTA />

            <Box sx={{bgcolor: 'white', position: 'relative', zIndex: 5, textAlign: 'center', width: '70%', maxWidth: '750px', m: '0 auto', mt: '-100px', py: '60px', boxShadow: '0px 1px 20px 8px rgba(0,0,0,0.1)'}}>
                <img src={logo} alt='Transblue Small Logo' style={{width: '20%'}} />
                <Typography variant='h2' sx={{fontWeight: 500, mt: 5, mb: 3}}>JOIN OUR TRANSBLUE FAMILY</Typography>
                <Typography variant='body2' sx={{maxWidth: '70%', m: '0 auto'}}>What does living fully mean to you? Whether you are seeking to grow with new opportunities, work beside teammates that feel like family, or make a difference in the world, Transblue helps you live life to its fullest, no matter how you define it.</Typography>
            </Box>
            <Box sx={{width: '90%', py: '20vh', maxWidth: '2000px', m: '0 auto'}}>
                <Grid container>
                    <Grid item xs={12} md={5}>
                        <Typography variant='h2' sx={{fontWeight: 500, mb: 1, color: '#0b56a4'}}>A COMPANY</Typography>
                        <Typography variant='h2' sx={{fontWeight: 500, color: '#0b56a4'}}>WITH VALUES</Typography>

                        <Typography variant='body2' sx={{my: 4}}>At Transblue, we prioritize the well being of our employees, our customers, and the community. We have curated a list of core values that we see as our standard of living, both in and out of the workplace.</Typography>

                        <Button 
                            variant='contained'
                            sx={{bgcolor: '#0b56a4', fontSize: '.85em', letterSpacing: '.09em', fontWeight: 500, color: 'white', borderRadius: '0px', p: '4px 30px', mb: {
                                xs: 3,
                                md: 0
                            }}}
                        >
                            apply now
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={1}></Grid>
                    <Grid item xs={12} md={6}>
                        <div className='row ml-5'>
                            <div className='col-4' style={{marginLeft: '-16%'}}>
                                <Fade duration={1200}>
                                    <img src={engaged} alt='' />
                                </Fade>
                            </div>
                            <div className='col-4'>
                                <Fade duration={1200} delay={300}>
                                    <img src={nimble} alt='' />
                                </Fade>
                            </div>

                            <div className='col-4'>
                                <Fade duration={1200} delay={600}>
                                    <img src={grit} alt='' />
                                </Fade>
                            </div>

                            <div className='col-4'>
                                <Fade duration={1200} delay={900}>
                                    <img src={help} className='bottom-row' alt=''/>
                                </Fade>
                            </div>

                            <div className='col-4'>
                                <Fade duration={1200} delay={1200}>
                                    <img src={eachother} className='bottom-row' alt=''/>
                                </Fade>
                            </div>

                            <div className='col-4'>
                                <Fade duration={1200} delay={1500}>
                                    <img src={through} className='bottom-row' alt=''/>
                                </Fade>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </>
    )

}

export default Careers;