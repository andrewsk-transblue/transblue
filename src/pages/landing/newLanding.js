import React, {Fragment} from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/navbar/index';
import Header from '../../components/landing/header';
import NewReviews from '../../components/landing/newReviews/newReviews';
import Services from '../../components/landing/services/index';
import Footer from '../../components/footer';
import Mbridge from '../../components/landing/mbridge';
// import Nepal from '../../components/landing/nepal';
import Mission from '../../components/landing/mission';
// import Here from '../../components/landing/here';
import Core from '../../components/landing/core';
import Core2 from '../../components/landing/core2';
import ContactCta from '../../components/contactCta';
import banner2 from '../../images/newLanding/banner2.png';
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
                <div className='container-fluid w-100 who-is-tb text-center'>

                </div>

                <Mbridge />
            
                <Mission />
                {/* <Here /> */}
                <Core />
                <Core2 />
                <NewReviews />
                <Services />
                <Footer locationPage={false} />
            </div>
        </Fragment>
    )
}

export default NewLanding;