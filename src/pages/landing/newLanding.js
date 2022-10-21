import React, {Fragment, useEffect, lazy, useState} from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/navbar/index';
import './style.css';
import military from '../../images/military.jpg';
import militarySmall from '../../images/military-small.png';

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
const Header = lazy(() => import('../../components/landing/header/header'));
const HeaderSmall = lazy(() => import('../../components/landing/header/headerSmall'));

function NewLanding() {
    const [windowWidth, setWindowWidth] = useState('large');
    const [bannerWidth, setBannerWidth] = useState('large');

    useEffect(() => {
        ReactGA.event({
            category: 'User',
            action: 'Visited Landing Page'
          });

        if(window.innerWidth < 1000) {setWindowWidth('small')};
        if(window.innerWidth < 600) {setBannerWidth('small')};
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
                <title>Transblue World Class General Contractors</title>
                <meta name="description" content="Transblue cares about our customers and their homes and businesses. From retaining walls to asphalt to snow removal, we get the job done right." />
            </Helmet>
            <Navbar page='HOME' />
            {windowWidth === 'large' ? <Header /> : <HeaderSmall />}

            <ContactCta />
            
            <div className='landing-body'>
                {bannerWidth === 'large'
                    ?   <a href="https://militarymakeover.tv" target="_blank" rel="noopener"><img src={military} alt="Military Makeover on Lifetime" width="100%" /></a>
                    :   <a href="https://militarymakeover.tv" target="_blank" rel="noopener"><img src={militarySmall} alt="Military Makeover on Lifetime" width="100%" /></a>
                }

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