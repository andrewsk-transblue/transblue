import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/navbar/index';
import residential from '../../images/residential/backyard2.jpeg';
import Footer from '../../components/footer/index';
import Lifestyle from '../../components/residential/lifestyle/lifestyle';
import Dees from '../../components/residential/dees/dees';
import Quality from '../../components/residential/quality/quality';
import LocationsCta from '../../components/locationsCTA';
import Carousel from '../../components/residential/carousel';
import UpgradeNew from '../../components/residential/upgradeNew';
import ServiceCard from '../../components/residential/greenServices/serviceCard';
import Design from '../../components/residential/design';
import Rockstar from '../../components/residential/rockstar';

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
                    Residential
                    <div className='header-subtext'>
                        Make your backyard feel like home
                    </div>
                </div>                
            </div>
            <LocationsCta />
            <div className='residential-body'>
                <div className='about row'>
                    <p>
                        At Transblue, we build more than just luxury backyard improvement projects. We transform your backyard into the perfect venue for your next family barbecue. We prepare the canvas for your summer dinner party. We turn your vision for outdoor luxury into reality.
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
