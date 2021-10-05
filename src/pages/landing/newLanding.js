import React, {Fragment} from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/navbar/index';
import Header from '../../components/landing/header';
import NewReviews from '../../components/landing/newReviews/newReviews';
import Services from '../../components/landing/services/index';
import Professional from '../franchise/professional';
import Footer from '../../components/footer';
import Mbridge from '../../components/landing/mbridge';
// import Nepal from '../../components/landing/nepal';
import Mission from '../../components/landing/mission';
// import Here from '../../components/landing/here';
import Core from '../../components/landing/core';
import Core2 from '../../components/landing/core2';
import ContactCta from '../../components/contactCta';
import Core3 from '../../components/landing/core3';
import './style.css';

function NewLanding() {

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
                {/* <Here /> */}
                {/* <Core3 />
                <Core />
                <Core2 /> */}
                {/* <Core3 /> */}
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