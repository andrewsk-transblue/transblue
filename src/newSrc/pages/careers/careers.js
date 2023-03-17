import { Box, Button, Grid, MenuItem, Select, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
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
import Footer from "../../components/footer/footer";

import{ init } from 'emailjs-com';
import * as emailjs from 'emailjs-com'
import axios from "axios";
init("user_iLZ3jXyTzXi5zQFlgf5DG");

let positionsList = [
    'Project Manager',
    'Sales Manager',
    'General Manager',
    'Office Admin'
]

function Careers() {
    const [position, setPosition] = useState('Project Manager');
    const [email, setEmail] = useState('');
    const [locations, setLocations] = useState([]);
    const ref = useRef(null);

    useEffect(() => {
        axios.get(`https://my-tb-cors.herokuapp.com/https://locations-fns.azurewebsites.net/api/getalllocations`).then(res => {
            console.log(res.data)
            setLocations(res.data.sort((a, b) => a.name - b.name));
        })
    }, []);

    const submit = (e) => {
        e.preventDefault();

        //console.log(email)
        emailjs.sendForm('service_gekurtf', 'template_cjk37bd', e.target, 'user_iLZ3jXyTzXi5zQFlgf5DG')
            .then(res => {
                props.redirect();
            })
    };

    function scrollToApply() {
        ref.current.scrollIntoView({ behavior: 'smooth' })
    }

    return(
        <>
            <Header title='TRANSBLUE CAREERS' name='careers' />
            <NavWrapper />
            <CTA />

            <Box sx={{bgcolor: 'white', position: 'relative', zIndex: 5, textAlign: 'center', width: '70%', maxWidth: '750px', m: '0 auto', mt: '-100px', py: '60px', boxShadow: '0px 1px 20px 8px rgba(0,0,0,0.1)'}}>
                <img src={logo} alt='Transblue Small Logo' style={{width: '20%'}} />
                <Typography variant='h2' sx={{fontWeight: 500, mt: 4, mb: 3}}>JOIN OUR TRANSBLUE FAMILY</Typography>
                <Typography variant='body2' sx={{maxWidth: '70%', m: '0 auto', mb: 5}}>What does living fully mean to you? Whether you are seeking to grow with new opportunities, work beside teammates that feel like family, or make a difference in the world, Transblue helps you live life to its fullest, no matter how you define it.</Typography>
                <Button
                    variant='contained'
                    sx={{bgcolor: '#0b56a4', fontSize: '.85em', letterSpacing: '.09em', fontWeight: 500, color: 'white', borderRadius: '0px', p: '4px 30px', mb: {
                        xs: 3,
                        md: 0
                    }}}
                    onClick={scrollToApply}
                >
                    apply now
                </Button>
            </Box>
            <Box sx={{width: '100%', bgcolor: '#f8f8f8', my: '10vh'}}>
                <Box sx={{width: '90%', py: '10vh', maxWidth: '2000px', m: '0 auto'}}>
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
            </Box>
            <Box sx={{width: '90%', pb: '10vh', maxWidth: '2000px', m: '0 auto'}}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6} my='auto'>
                        <iframe width='100%' height='430' src="https://www.youtube.com/embed/uJiu4petJXA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Grid>
                    <Grid item xs={12} md={6} my='auto'>
                        <Typography variant='h2' sx={{mb: 2, fontWeight: 500, color: '#0b56a4'}}>BUILT ON DREAMS</Typography>
                        <Typography variant='body2' sx={{mb: 2}}>The work we do is built on dreams.
                            Dreams of the perfect backyard to spend with family. Dreams of capital projects executed quickly and without a hassle. Dreams of a business at its very best. Dreams of a better life. Join our team today to help make dreams come true!</Typography>
                        <Typography variant='body2'>Watch our video to find out more about the services we provide.</Typography>
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{bgcolor: '#f8f8f8', mb: '10vh'}} ref={ref}>
                <Box sx={{width: '90%', py: '10vh', maxWidth: '2000px', m: '0 auto'}}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6} my='auto'>
                            <Typography variant='h2' sx={{color: '#0b56a4', fontWeight: 500, mb: 2}}>APPLYING IS EASY!</Typography>
                            <Typography variant='body2' sx={{mb: 1}}>At Transblue, we don't believe in wasting your time. We won't make you go through the hoops of creating an account and filling out a bunch of information about yourself, only to upload your resume with exactly the same information.</Typography>
                            <Typography variant='body2'>Just select which location you would like to apply to, upload your resume, and submit! Simple as that</Typography>
                        </Grid>
                        <Grid item xs={12} md={6} my='auto'>
                            <Typography variant='h6' sx={{color: '#0b56a4', mb: 1}}>SELECT A LOCATION</Typography> 
                            <Select
                                fullWidth
                                size='small'
                                sx={{mb: 5}}
                                onChange={(e) => setEmail(e.target.value)}
                            >
                                {locations.map(location => (
                                    <MenuItem key={location.id} value={location.email}>{location.name}</MenuItem>
                                ))}
                            </Select>
                            <Typography variant='h6' sx={{color: '#0b56a4', mb: 1}}>WHICH POSITION ARE YOU APPLYING FOR?</Typography> 
                            <Select
                                fullWidth
                                size='small'
                                value={position}
                                onChange={(e) => setPosition(e.target.value)}
                                sx={{mb: 5}}
                            >
                                {positionsList.map(position => (
                                    <MenuItem value={position} key={position}>{position}</MenuItem>
                                ))}
                            </Select>
                            <Button
                                onClick={submit}
                                variant='contained'
                                fullWidth
                                sx={{borderRadius: 0, bgcolor: '#0b56a4'}}
                            >
                                submit
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Footer />
        </>
    )

}

export default Careers;