import React, {Fragment, useEffect} from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/navbar';
import Form from './form';
import Footer from '../../components/footer';
import './style.css';

import ReactGA from 'react-ga';
import FranchiseNav from '../../components/franchiseNav';
const TRACKING_ID = process.env.REACT_GOOGLE_ANALYTICS_ID; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function Contact() {
    useEffect(() => {
        ReactGA.event({
            category: 'User',
            action: `Visited Contact Page`
        });
    }, [])
    return(
        <Fragment>
            <Helmet>
                <title>Contact Us</title>
                <meta name="description" content="Transblue is a leading general contractor, spanning on different states. They are a trusted source to design and construct commercial buildings, decks, and landscaping" />
            </Helmet>

            <FranchiseNav />
            <Navbar />
            <div className='contact-page-wrapper'>
                <div className='overlay'></div>                
                <Form />
            </div>
            <Footer />
        </Fragment>
    )
}

export default Contact;