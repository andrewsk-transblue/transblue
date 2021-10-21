import React, {Fragment, useEffect, useState, lazy, Suspense} from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/navbar/index';
import Header from '../../components/landing/header';
import NewReviews from '../../components/landing/newReviews/newReviews';
//import Services from '../../components/landing/services/index';
import Professional from '../franchise/professional';
import Footer from '../../components/footer';
import Mbridge from '../../components/landing/mbridge';
import Mission from '../../components/landing/mission';
import ContactCta from '../../components/contactCta';
import './style.css';

//REACT GOOGLE ANALYTICS
import ReactGA from 'react-ga';
const TRACKING_ID = process.env.REACT_APP_GOOGLE_ANALYTICS_ID // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

const Services = lazy(() => import('../../components/landing/services/index'))

const reverse = require('reverse-geocode')


let noSnowStates = ['California', 'Texas', 'Louisiana', 'Arizona', 'Georgia', 'Florida', 'South Carolina', 'Hawaii', 'Mississippi', 'Alabama', 'Tennessee', 'Nevada', 'New Mexico']

function NewLanding() {
    const [noSnow, setNoSnow] = useState(false)

    useEffect(() => {
        ReactGA.event({
            category: 'User',
            action: 'Visited Landing Page'
          });
        if('getCurrentPosition' in navigator.geolocation ) {
            navigator.geolocation.getCurrentPosition(position => {
                console.log(position)
                let state = reverse.lookup(position.coords.latitude, position.coords.longitude, 'us').state;
                console.log(state)
                //let state = 'Arizona'
                if(noSnowStates.indexOf(state) !== -1) setNoSnow(true)
            })
        }
    }, [])

    return(
        <Fragment>
            <Helmet>
                <title>Transblue GC</title>
                <meta name="description" content="Transblue Commercial Services" />
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
                    <Services noSnow={noSnow} />
                </div>
                <Footer locationPage={false} />
            </div>
        </Fragment>
    )
}

export default NewLanding;