import React, { Fragment, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../../../components/header/index';
import Benefits from '../../../components/government/benefits';
import ThreeCols from '../../../components/threeCol';
import FirstResponders from '../../../components/government/firstResponders';
import Snow from '../../../components/snow';
import ServiceList from '../../../components/serviceList';
import CTA from '../../components/cta/cta';
import Footer from '../../components/footer/footer';
import govt from '../../images/government/govtseattle.jpg';
import asphaltCropped from '../../images/government/govtasphaltCropped.jpg';
import snow from '../../images/government/govtsnow.jpg';
import roof from '../../images/government/roof.jpg';
import ev from '../../images/government/ev.jpg';
import lightrail from '../../images/government/lightrail.jpg';
import govtBenefits from '../../images/government/govt.jpg';
//import ev from '../../images/government/evCropped.jpg';
import './style.css';

import ReactGA from 'react-ga';
import ContactModal from '../../../components/contactModal';
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

                <div className='government-body'>

                    <Benefits 
                        img={govtBenefits}
                        list={[
                            'We understand the government bidding process',
                            'We understand Scope of Work Requirements',
                            'Minority Owned business in specific markets',
                            'Top notch communication',
                            'We understand Wage Requirements',
                            'High level of project reporting',
                            'Onsite management',
                            'Superior safety program with track record of 0 injuries'
                        ]}
                    />
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
                    <Snow
                        img={snow}
                        title='GOVERNMENT SNOW &amp; ICE MANAGEMENT'
                        p1='At Transblue, we provide comprehensive snow and ice management plans for government properties. This includes plowing, deicing, hauling, snow staging, shoveling, and icicle melting.'
                        p2='Keeping city officials, staff and community members safe is always our goal.'
                        p3='Send us a message today or visit our snow website to learn about the World Class Snow services we offer, and how Transblue can help you this winter.'
                    />
                    <ServiceList
                        page='government'
                        title='GOVERNMENT SERVICES'
                        services={['Snow and Ice Management',
                            'Swimming Pool construction and resurfacing',
                            'Asphalt Paving',
                            'Large Landscape installs',
                            'Roofing',
                            'Siding',
                            'Painting',
                            'Remodels and refreshes',
                            'Concrete work',
                            'Drainage Systems',
                            'Decking, fencing, and railing systems',
                            'Electric Vehicle Charging Systems, Solar Power',
                            'ESG Service Offerings'
                        ]}
                    />
                </div>

                <div className='charity-wrapper bg-light'>
                     <div className='wrapper'>
                         <h1>TRANSBLUE GIVES BACK</h1>
                        <FirstResponders />
                     </div>
                </div>
                <Footer />
            </Fragment>
        )
}

export default Government;