import React, {Fragment, useEffect} from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../../../components/header';
import ContactCta from '../../components/cta/cta';
import Assets from '../../../components/multifamily/assets';
import ServiceList from '../../../components/serviceList';
import HoverImages from '../../../components/hoverImages';
import Snow from '../../../components/snow';
import ContactModal from '../../../components/contactModal';
import ThreeCols from '../../../components/threeCol';
import Hospitality from './hospitality';
import Footer from '../../components/footer/footer';
import header2 from '../../images/multifamily/header2.jpg';
import rooftop from '../../images/multifamily/rooftop.jpeg';
import pool from '../../images/multifamily/pool.jpeg';
import parkinglot from '../../images/multifamily/asphalt.jpg';
import snow from '../../images/multifamily/snow.jpg';
import luxury from '../../images/multifamily/luxury.jpg';
import services from '../../images/multifamily/services.jpeg';
import Green from '../../../components/green';

import solidrock from '../../images/multifamily/solidRock/1.png';
import solidrock2 from '../../images/multifamily/solidRock/2.png';
import solidrock3 from '../../images/multifamily/solidRock/3.png';
import ascent from '../../images/multifamily/solidRock/ascent.png';
import './style.css';

import ReactGA from 'react-ga';
import NavWrapper from '../../components/navbar/navWrapper';
import { Box, Button, Grid, Typography } from '@mui/material';
const TRACKING_ID = process.env.REACT_APP_GOOGLE_ANALYTICS_ID // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

// do some research on apis that service channel has to offer
// can be a component of the national sales servicing portal
// db of all the work they're doing
// work order tied to this location

// resize screen on stream, make a max width, like an in page youtube player

// add recoding navbar for all page tb.com
// 27 inch screen - fix transblue's mission
// issue for wednesday - featured projects

function Multifamily() {
    useEffect(() => {
        ReactGA.event({
            category: 'User',
            action: 'Visited Multifamily Page'
          });
    }, []);

    return(
        <Fragment>
            <Helmet>
                <title>Transblue Multifamily</title>
                <meta name="description" content="Transblue provides several multifamily services to HOAs and CAIs, including paving, snow removal, amenity installation, pools, wall retaining, patio, athletic courts, and everything in between." />
            </Helmet>
            <NavWrapper page='multifamily' parentPage='gc' />
            <Header img={header2} title='MULTIFAMILY' subtitle='' name='multifamily' />
            <ContactCta />
            <Box sx={{width: '90%', py: '20vh', maxWidth: '2000px', m: '0 auto'}}>
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <Typography variant='h2' sx={{fontWeight: 500, mb: 1, letterSpacing: '2.5px'}}>BEAUTIFY YOUR</Typography>
                        <Typography variant='h2' sx={{fontWeight: 500, mb: 2, letterSpacing: '2.5px'}}>MULTIFAMILY RESIDENCE</Typography>
                        <Button 
                            component='a'
                            href='/locations'
                            variant='contained'
                            sx={{bgcolor: '#0b56a4', fontSize: '.85em', letterSpacing: '.09em', fontWeight: 500, color: 'white', borderRadius: '0px', padding: '6px 25px'}}
                        >
                            find your local transblue
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant='body2'>Transblue is proud to offer construction services to multifamily communities. Our multifamily division understands the specific needs of your community and can tailor construction plans accordingly. Primarily, we focus on Capital Projects that are pre-designated during annual reserve studies, but we can accomodate a multitude of projects. Give our team of professionals a call today to discuss your project!</Typography>
                    </Grid>
                </Grid>
            </Box>

            <div className='multifamily-body'>
                <div className='wrapper'>

                <div className='container-fluid benefits'>
                    <div className='row'>
                    <div className='col-lg-7 order-lg-12'>
                            <img className='pt-4' src={luxury} alt='Luxury Apartment' />
                        </div>
                        <div className='col-lg-5 right-text'>
                            <h4 className='section-header'>GET AN EDGE OVER YOUR COMPETITORS</h4>
                            <ul className='section-p'>
                                <li>Multi-discipline subject matter construction experts</li>
                                <li>Turnkey installation – all services under 1 roof </li>
                                <li>One point of contact no matter how many trades are involved</li>
                                {/* <li>Increase your property value</li> */}
                                <li>Proactive project management</li>
                                <li>Collaborative team members and flexible service offerings</li>
                                <li>On time and on budget projects</li>
                                <li>Fastest return on proposals in industry</li>
                                <li>Financing available for qualifying projects</li>
                            </ul>
                            <a className='cta' href='/locations'>LOCATIONS</a><ContactModal />
                        </div>
                        
                    </div>
                </div>
                <Hospitality />
                {/* <div className='benefits-banner'>
                    <p>INCREASE YOUR PROPERTY VALUE</p>
                    <p>with our World Class services that enhance the beauty of every space </p>
                </div> */}
                 <ThreeCols
                    title='REFRESH YOUR MULTIFAMILY RESIDENCE'
                    subtitle='Refreshed buildings keep property values high. Transblue is 100% committed to delivering World Class services that enhance the beauty of each and every space.'
                    card1={{
                        img: rooftop,
                        title: 'RETHINK YOUR ROOF',
                        // body: 'Transblue provides roofing services for communities looking to replace existing roofing structures or install new roofing systems. This includes systems such as flat PVC and TPO, metals, asphalt shingles, green roofs, tiles, torch down, and more',
                        body: 'We specialize in replacing and installing roofing systems such as flat PVC and TPO, metals, asphalt shingles, green roofs, tiles, torch down, and more'
                    }}
                    card2={{
                        img: pool,
                        title: 'POOL RENOVATION & CONSTRUCTION',
                        // body: 'Transblue provides Swimming pool renovations and installs to community properties. This includes replastering, retiling, re-decking, and installing up to grade drainage systems',
                        body: 'Call us today to discuss swimming pool renovations and installations. We specialize in replastering, retiling, redecking, and installing up to grade drainage systems'
                    }}
                    card3={{
                        img: parkinglot,
                        title: 'ASPHALT SERVICES',
                        body: 'We specialize in asphalt services that include paving, seal coating, crack sealing, parking lot striping, concrete replacement and grinding, curbing, and restriping'
                    }}
                />
                </div>
                <Assets />
                <div className='wrapper'>
                    <Snow
                        img={snow}
                        title='KEEP YOUR COMMUNITY SAFE'
                        p1='Safety is key to our World Class snow and ice programs. At Transblue we don’t consider it snow removal, we consider it risk removal.'
                        p2='Keeping your property plowed and deiced keeps your community safe during the worst winter storms.'
                        p3='We offer comprehensive snow and ice management plans that include plowing, deicing, hauling, snow staging, shoveling, and icicle melting.'
                    />
                    <Green 
                        page='multifamily'
                        solar='Reduce overhead and save on utility bills with solar panels'
                        ev='Increase resident retention and value of your property with EV Chargers'
                        roof='Save money on cost of energy and local storm water fees' />
                    <ServiceList
                        title='MULTIFAMILY SERVICES'
                        img={services}
                        services={[
                            'Snow and Ice Management',
                            'Swimming Pool construction and resurfacing',
                            'Asphalt Paving',
                            'Large Landscape installs',
                            'Roofing',
                            'Siding',
                            'Painting',
                            'Remodels and refreshes',
                            'Concrete work',
                            'Drainage Systems',
                            'Decking, fencing and railing systems',
                            'Electric Vehicle Charging Systems, Solar Power',
                            'ESG Service Offerings'
                    ]} />
               
                </div>
                <div className='charity-wrapper bg-light'>
                     <div className='wrapper'>
                         <h1>TRANSBLUE GIVES BACK</h1>
                         <div className='container-fluid'>
                            <div className='row'>
                                <div className='col-lg-5 order-lg-12 left-text'>
                                    <h4 className='section-header'>CREATING A SOLID FOUNDATION FOR YOUTH</h4>
                                    <div className='section-p mb-3'>
                                        Last year, we completed the Ascent roofing project in Seattle, WA. We partnered with Solid Rock Mission and used the profits from the Ascent project to send over 4000 children and youth from Southern and Eastern Ukraine to summer camps. Over 1000 of these children committed their lives to Christ. These camps were a great opportunity to impact these children with hope and love in a trying time, and more importantly show them God's love.</div>
                                    <div className='section-p mb-3'>
                                        Solid Rock Mission, one of our mBridge partners, reaches into rural and war torn regions of southern and eastern Ukraine, where alcoholism and the breakdown of family is rampant. Children and youth are often victims of abuse or politically radicalized.
                                    </div>
                                    <a href='/givesback/solidrock' className='cta'>LEARN MORE</a>
                                    {/* <a href='https://www.youtube.com/watch?v=yPTjyTrF_8c' target="_blank" rel='noreferrer' className='cta'>LEARN MORE</a> */}
                                </div>
                                <div className='col-lg-7'>
                                    <HoverImages 
                                        page={[
                                            {image: ascent, title: 'ASCENT ROOFING PROJECT', caption: ''},
                                            {image: solidrock, title: 'SOLID ROCK CAMP', caption: ''},
                                            {image: solidrock2, title: 'SOLID ROCK CAMP', caption: 'Music station at camp where the kids learn to sing praise songs which they memorize and take home with them. We believe that the message of these songs has the power to impact these children with hope and love.'},
                                            {image: solidrock3, title: 'SOLID ROCK CAMP', caption: ''}
                                        ]}
                                    />
                                </div>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

export default Multifamily;