import React, { Fragment, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../../../components/header/index';
import ThreeCols from '../../../components/threeCol';
import CTA from '../../components/cta/cta';
import Footer from '../../components/footer/footer';
import govt from '../../images/government/govtseattle.jpg';
import asphaltCropped from '../../images/government/govtasphaltCropped.jpg';
import snow from '../../images/government/govtsnow.jpg';
import roof from '../../images/government/roof.jpg';
import ev from '../../images/government/ev.jpg';
import lightrail from '../../images/government/lightrail.jpg';
import govtBenefits from '../../images/government/govt.jpg';
import ContactModal from '../../../components/contactModal';
import firstresponder from '../../images/government/firstresponder.jpg';
//import ev from '../../images/government/evCropped.jpg';
import './style.css';

import ReactGA from 'react-ga';
import NavWrapper from '../../components/navbar/navWrapper';
import { Box, Grid, Typography } from '@mui/material';
const TRACKING_ID = process.env.REACT_APP_GOOGLE_ANALYTICS_ID // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);


function Government() {
    useEffect(() => {
        ReactGA.event({
            category: 'User',
            action: 'Visited Government Page'
          });
    }, [])
        return(
            <Fragment>
                <Helmet>
                    <title>Transblue Government</title>
                    <meta name="description" content="Transblue is a world class general contractor and has built almost every type of project from large government projects to small commercial and residential construction., from asphalt to EV chargers to snow removal and everything in between!" />
                </Helmet>
                <NavWrapper page='government' />
                <Header img={govt} title='GOVERNMENT' subtitle='' name='government' />
                <CTA />

                <div className='government-about'>
                    <Box sx={{width: '90%', py: '20vh', maxWidth: '2000px', m: '0 auto'}}>
                        <Grid container spacing={4}>
                            <Grid item xs={12} md={6}>
                                <img src={lightrail} alt='Government Building' style={{width: '100%'}} />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography variant='h2' sx={{mb: 2, fontWeight: 500, color: '#0b56a4'}}>KEEP YOUR SERVICES RUNNING SMOOTHLY</Typography>
                                <Typography variant='body2' sx={{mb: 1}}>Transblue is strongly positioned to deliver World Class services to any local or federal government building. We understand the RFP process and the requirements necessary to participate in your initiatives.</Typography>
                                <Typography variant='body2' sx={{mb: 3}}>After all requirements are met, we guarantee we will deliver the services that your team expects. From conception to close out, Transblue is the right fit for your property.</Typography>
                                <ContactModal text='CONTACT US FOR CAPABILITIES STATEMENT' />
                            </Grid>
                        </Grid>
                    </Box>
                </div>

                <Box sx={{width: '90%', pb: '20vh', maxWidth: '2000px', m: '0 auto'}}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <Typography variant='h2' sx={{fontWeight: 500, mb: 2, color: '#0b56a4'}}>WHY CHOOSE TRANSBLUE?</Typography>
                            <ul style={{paddingLeft: '15px', marginBottom: '30px'}}>
                                <li><Typography variant='body2' sx={{fontWeight: 400}} >We understand the government bidding process</Typography></li>
                                <li><Typography variant='body2' sx={{fontWeight: 400}}>We understand Scope of Work Requirements</Typography></li>
                                <li><Typography variant='body2' sx={{fontWeight: 400}}>Minority Owned business in specific markets</Typography> </li>
                                <li><Typography variant='body2' sx={{fontWeight: 400}}>Top notch communication</Typography> </li>
                                <li><Typography variant='body2' sx={{fontWeight: 400}}>We understand Wage Requirements</Typography> </li>
                                <li><Typography variant='body2' sx={{fontWeight: 400}}>High level of project reporting</Typography> </li>
                                <li><Typography variant='body2' sx={{fontWeight: 400}}>Onsite management</Typography> </li>
                                <li><Typography variant='body2' sx={{fontWeight: 400}}>Superior safety program with track record of 0 injuries</Typography> </li>
                            </ul>
                            <a className='cta' href='/locations'>FIND A LOCATION</a>
                            <ContactModal />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <img src={govtBenefits} style={{width: '100%'}} alt='' />
                        </Grid>

                    </Grid>
                </Box>

                <Box sx={{width: '90%', pb: '20vh', maxWidth: '2000px', m: '0 auto'}}>
                    <ThreeCols 
                        card1={{
                            img: ev,
                            title: 'GREEN ENERGY SERVICES',
                            body: 'We provide the electrical engineering, trenching, electrical upgrades, concrete work, asphalt work, permitting, etc. Required to install Electric Charging Stations for your government facility.'
                        }}
                        card2={{
                            img: asphaltCropped,
                            title: 'ASPHALT REFRESHMENT',
                            body: 'We provide asphalt services such as paving, seal coating, crack sealing, parking lot striping, concrete replacement and grinding, curbing, and restriping. '
                        }}
                        card3={{
                            img: roof,
                            title: 'ROOFING SYSTEMS',
                            body: 'We replace and install new roofing systems for government properties, including: flat PVC and TPO, metals, asphalt shingles, green roofs, tiles, torch down, and more'
                        }}
                    />
                </Box>

                <Box sx={{width: '90%', pb: '20vh', maxWidth: '2000px', m: '0 auto'}}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={5}>
                            <Typography variant='h2' sx={{color: '#0b56a4', fontWeight: 500, mb: 2}}>GOVERNMENT SNOW &amp; ICE MANAGEMENT</Typography>
                            <Typography variant='body2' sx={{mb: 1}}>At Transblue, we provide comprehensive snow and ice management plans for government properties. This includes plowing, deicing, hauling, snow staging, shoveling, and icicle melting.</Typography>
                            <Typography variant='body2' sx={{mb: 1}}>Keeping city officials, staff and community members safe is always our goal.</Typography>
                            <Typography variant='body2' sx={{mb: 4}}>Send us a message today or visit our snow website to learn about the World Class Snow services we offer, and how Transblue can help you this winter.</Typography>
                            <a className='cta' href='https://snow.transblue.com' target='_blank' rel='noreferrer'>SNOW SERVICES</a><ContactModal />
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <img src={snow} alt='Multifamily Snow Removal' style={{width: '100%'}} />
                        </Grid>
                    </Grid>
                </Box>

                <Box sx={{width: '90%', pb: '20vh', maxWidth: '2000px', m: '0 auto'}}>
                    <Grid container spacing={5}>
                        <Grid item xs={12} md={7}>
                            <iframe width="100%" height="430" src="https://www.youtube.com/embed/ddYhFI8NU3w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <Typography variant='h2' sx={{mb: 2, color: '#0b56a4', fontWeight: 500}}>GOVERNMENT SERVICES</Typography>
                            <ul style={{paddingLeft: '15px', marginBottom: '30px'}}>
                                <li><Typography variant='body2' sx={{fontWeight: 400}}>Snow and Ice Management</Typography></li>
                                <li><Typography variant='body2' sx={{fontWeight: 400}}>Swimming Pool construction and resurfacing</Typography></li>
                                <li><Typography variant='body2' sx={{fontWeight: 400}}>Asphalt Paving</Typography> </li>
                                <li><Typography variant='body2' sx={{fontWeight: 400}}>Large Landscape installs</Typography> </li>
                                <li><Typography variant='body2' sx={{fontWeight: 400}}>Roofing, siding, painting</Typography> </li>
                                <li><Typography variant='body2' sx={{fontWeight: 400}}>Remodels and refreshes</Typography> </li>
                                <li><Typography variant='body2' sx={{fontWeight: 400}}>Concrete work</Typography> </li>
                                <li><Typography variant='body2' sx={{fontWeight: 400}}>Drainage systems</Typography> </li>
                                <li><Typography variant='body2' sx={{fontWeight: 400}}>Decking, fencing and railing systems</Typography> </li>
                                <li><Typography variant='body2' sx={{fontWeight: 400}}>Electric Vehicle Charging Systems, Solar Power</Typography> </li>
                                <li><Typography variant='body2' sx={{fontWeight: 400}}>ESG Service Offerings</Typography> </li>
                            </ul>

                            <a className='cta' href='/locations'>LOCATIONS</a><ContactModal />
                        </Grid>
                    </Grid>
                </Box>

                <Box sx={{width: '90%', pb: '20vh', maxWidth: '2000px', m: '0 auto'}}>
                    {/* <Typography variant='h1' sx={{textAlign: 'center', mb: 8, fontWeight: 500, color: '#0b56a4'}}>TRANSBLUE GIVES GBACK</Typography> */}
                    <Grid container spacing={5}>
                        <Grid item xs={12} md={6}>
                            <img src={firstresponder} style={{width: '100%'}} alt='' />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant='h2' sx={{mb: 2, color: '#0b56a4', fontWeight: 500}}>TRANSBLUE AND FIRST RESPONDERS</Typography>
                            <Typography variant='body2' sx={{mb: 1}}>First responders are a top priority for us at here at Transblue. We recently resurfaced the asphalt at the Snohomish Fire Department in Washington to support them and show our appreciation for the incredible work they do for the community.</Typography>
                            <Typography variant='body2' sx={{mb: 3}}>Additionally, several other projects over the years have allowed us to donate to Hope Unlimited, a charity that sends a Chaplain with first responders to provide comfort and support to those in crisis situations.</Typography>
                            <a href='/givesback/hope' className='cta'>LEARN MORE</a>
                        </Grid>
                    </Grid>
                </Box>
                <Footer />
            </Fragment>
        )
}

export default Government;