import React, {Fragment, useEffect, useRef} from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/navbar';
import Header from '../../components/header';
import FeaturedCard from './featuredCard';
import Footer from '../../components/footer/index';
import header2 from '../../images/featured/header-2.jpg';
import labrynth from '../../images/featured/labrynth.jpg';
import floralHills from '../../images/featured/floralhills.jpg';
import maplewood from '../../images/featured/maplewood.JPG';
import urbanoasis from '../../images/featured/urbanoasis.jpg';
import magnolia from '../../images/featured/magnolia.jpg';
import retainingdrops from '../../images/featured/retainingdrops.jpg';
import checkerboard from '../../images/featured/checkerboard.jpg';
import hoaroofing from '../../images/featured/hoaroofing.jpg';
import './style.css';
import ContactCta from '../../components/contactCta';

import ReactGA from 'react-ga';
const TRACKING_ID = process.env.REACT_APP_GOOGLE_ANALYTICS_ID// YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

const projects = [

]

function Featured() {

    useEffect(() => {
        ReactGA.event({
            category: 'User',
            action: `Visited Featured Page`
        });
    }, [])

    return(
        <Fragment>
            <Helmet>
                <title>Featured Projects</title>
                <meta name="description" content="Transblue Featured Projects" />
            </Helmet>
            <Navbar page='PROJECTS' />
            <Header img={header2} title='FEATURED PROJECTS' name='featured' />
            <ContactCta />
            <div className='projects-wrapper container-fluid'>
                
            </div>
            <Footer />
        </Fragment>

    )
}

export default Featured;