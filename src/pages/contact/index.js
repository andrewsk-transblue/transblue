import React, {Fragment, useEffect} from 'react';
import { Helmet } from 'react-helmet-async';
import Form from './form';
import Footer from '../../components/footer';
import './style.css';

import ReactGA from 'react-ga';
import FranchiseNav from '../../components/franchiseNav';
import NavWrapper from '../../newSrc/components/navbar/navWrapper';

function Contact() {

    return(
        <Fragment>
            <Helmet>
                <title>Contact Us</title>
                <meta name="description" content="Transblue is a leading general contractor, spanning on different states. They are a trusted source to design and construct commercial buildings, decks, and landscaping" />
            </Helmet>

            <FranchiseNav />
            <NavWrapper page='contact' />
            <div className='contact-page-wrapper'>
                <div className='overlay'></div>                
                <Form />
            </div>
            <Footer />
        </Fragment>
    )
}

export default Contact;