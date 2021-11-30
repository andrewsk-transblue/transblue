import React, {Fragment, useEffect, useState, lazy} from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/navbar/index';
import './style.css';

//REACT GOOGLE ANALYTICS
import ReactGA from 'react-ga';
const TRACKING_ID = process.env.REACT_APP_GOOGLE_ANALYTICS_ID // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

const Services = lazy(() => import('../../components/landing/services/index'));
const Professional = lazy(() => import('../franchise/professional'));
const Mbridge = lazy(() => import('../../components/landing/mbridge'));
const ContactCta = lazy(() => import('../../components/contactCta'));
const NewReviews = lazy(() => import('../../components/landing/newReviews/newReviews'));
const Mission = lazy(() => import('../../components/landing/mission'));
const Footer = lazy(() => import('../../components/footer'));
const Header = lazy(() => import('../../components/landing/header'));

function NewLanding() {

    useEffect(() => {
        ReactGA.event({
            category: 'User',
            action: 'Visited Landing Page'
          });
          //console.log(navigator.geolocation)
        // if('getCurrentPosition' in navigator.geolocation ) {
        //     axios.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=YOUR_API_KEY')
        //         .then(res => console.log(res))
        //     // import('reverse-geocode').then((reverse) => {
        //     //     navigator.geolocation.getCurrentPosition(position => {
        //     //         console.log(position)
        //     //         let state = reverse.lookup(position.coords.latitude, position.coords.longitude, 'us').state;
        //     //         console.log(state)
        //     //         //let state = 'Arizona'
        //     //         if(noSnowStates.indexOf(state) !== -1) setNoSnow(true)
        //     //     })
        //     // })            
        // }
    }, [])

    return(
        <Fragment>
            <Helmet>
                <title>Transblue Home</title>
                <meta name="description" content="Transblue - World Class General Contractors" />
            </Helmet>
            <Navbar page='HOME' />
            <Header />
            <ContactCta />
            
            <div className='landing-body'>
                <div className='wrapper'>
                <Mbridge />
                </div>
                <Mission />
                <div className='wrapper'>
                    <Professional />
                    <NewReviews />
                    <Services />
                </div>
                <Footer locationPage={false} />
            </div>
        </Fragment>
    )
}

export default NewLanding;