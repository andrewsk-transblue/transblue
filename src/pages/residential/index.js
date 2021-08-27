import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/navbar/index';
// import Header from '../../components/header';
import Footer from '../../components/footer/index';
import Lifestyle from '../../components/residential/lifestyle/lifestyle';
import Dees from '../../components/residential/dees/dees';
import Quality from '../../components/residential/quality/quality';
import LocationsCta from '../../components/locationsCTA';
import ContactCta from '../../components/contactCta';
import Carousel from '../../components/residential/carousel';
import UpgradeNew from '../../components/residential/upgradeNew';
import ServiceCard from '../../components/residential/greenServices/serviceCard';
import Design from '../../components/residential/design';
import Rockstar from '../../components/residential/rockstar';
import residential from '../../images/residential/backyard2.jpeg';

import './style.css';

function Residential() {
    return(
        <Fragment>
            <Helmet>
                <title>Transblue Residential</title>
                <meta name="description" content="Transblue Residential Services" />
            </Helmet>
            <Navbar page='RESIDENTIAL' parentPage='gc' />
            <div className='residential-header container-fluid'>
                <div className='overlay'></div>
                <img src={residential} alt='residential header' ></img>
                <div className='centered-text header-text'>
                    RESIDENTIAL
                    <div className='header-subtext'>
                        Make your backyard feel like home
                    </div>
                </div>                
            </div>
            {/* <Header img={residential} title='RESIDENTIAL' subtitle='Make your backyard feel like home' /> */}
            <ContactCta />
            {/* <LocationsCta /> */}
            <div className='residential-body'>
                <div className='about row'>
                    <p>
                    Transblue takes a holistic approach to your project. We believe that each project is a collaboration of your vision and our expertise. Our teams will guide you through the process and ensure you love what your are building and your dreams not only come true but become an investment that returns not only ROI but that brings family closer together! Projects are not just beautiful materials and designs, they are birthday parties, BBQ’s, anniversaries and relaxing afternoons! 
                    </p>
                </div>
                <Quality />
                <Lifestyle />
                <UpgradeNew />
                <Carousel />
                <Design />
                <Dees />
                <Rockstar />
                <ServiceCard />
                <Footer />
            </div>
        </Fragment>
    )
}

export default Residential;

//residential services
//about 10-12. Add shade structures
//side bar or section where we talk about services


//franchise
//veteran owned boolean in database
//awards and affiliations - veteran owned flag
//yelp, hauzz,
//good place to expose getting financed
//every franchise will have its own. Goes through hearth


//maybe a whole page about giving back
//expand on dawson place, dee's hope, mbridge, etc

//inside pictures is transblue working on a project, eg serve projects like new heart foundation
