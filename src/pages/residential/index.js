import React, { Fragment, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import handleViewport from 'react-in-viewport';
import Navbar from '../../components/navbar/index';
import FranchiseNav from '../../components/franchiseNav';
// import Header from '../../components/header';
import Footer from '../../components/footer/index';
import Lifestyle from '../../components/residential/lifestyle/lifestyle';
import Dees from '../../components/residential/dees/dees';
import Quality from '../../components/residential/quality/quality';
import ContactCta from '../../components/contactCta';
import Installation from '../../components/residential/installation';
import Carousel from '../../components/residential/carousel';
import UpgradeNew from '../../components/residential/upgradeNew';
import ServiceCard from '../../components/residential/greenServices/serviceCard';
import Design from '../../components/residential/design';
import Rockstar from '../../components/residential/rockstar';

import './style.css';

import ReactGA from 'react-ga';
const TRACKING_ID = process.env.REACT_GOOGLE_ANALYTICS_ID; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

//BLOCK ABOVE DESIGN COMPONENT THAT TRIGGERS DESIGN ANIMATION
const Block = (props: { inViewport: boolean }) => {
    const { inViewport, forwardedRef } = props;
    return (
      <div className="viewport-block" ref={forwardedRef}>
      </div>
    );
  };
const ViewportBlock = handleViewport(Block, /** options: {}, config: {} **/);

function Residential() {
    const [displayDesign, setDisplayDesign] = useState(false);

    useEffect(() => {
        ReactGA.event({
            category: 'User',
            action: 'Visited Residential Page'
          });
    }, [])

    return(
        <Fragment>
            <Helmet>
                <title>Transblue Residential</title>
                <meta name="description" content="Transblue Residential Services" />
            </Helmet>
            <Navbar page='RESIDENTIAL' parentPage='gc' />
            <FranchiseNav />

            <div className='residential-header container-fluid'>
                <div className='overlay'></div>
                {/* <img src={residential} alt='residential header' ></img> */}
                <div className='centered-text header-text'>
                    RESIDENTIAL
                    <div className='header-subtext'>
                        Make your backyard feel like home
                    </div>
                </div>                
            </div>
            {/* <Header img={residential} title='RESIDENTIAL' subtitle='Make your backyard feel like home' /> */}
            <ContactCta />
            <div className='residential-body'>
                <div className='about row'>
                    <p>
                    Transblue takes a holistic approach to your project. We believe that each project is a collaboration of your vision and our expertise. Our teams will guide you through the process and ensure you love what your are building and your dreams not only come true but become an investment that returns not only ROI but that brings family closer together! Projects are not just beautiful materials and designs, they are birthday parties, BBQ’s, anniversaries and relaxing afternoons! 
                    </p>
                </div>
                <div className='wrapper'>
                <Quality />
                <Lifestyle />
                </div>
                <UpgradeNew />
                <div className='wrapper'>
                <Installation />
                </div>
                <Carousel />
                <ViewportBlock onEnterViewport={() => setDisplayDesign(true)} />
                {displayDesign && <Design />}

                <Rockstar />
                <div className='wrapper'>
                <ServiceCard
                    p1='As a homeowner, being on the right side of the environment is not only great for our world, but it also makes you feel better. You’re doing your part. You’re reducing our footprint. These are project that you can truly take pride in. Not only do you love and enjoy them, but its just the right thing to do.'
                    p2='Transblue offers a full range of ESG (environmental, social, and governance) services. These services include; Installing Electric Vehicle Charging Systems, Solar Energy, Xeriscape Initiatives, Water management programs,  Green Roofs, Lighting Projects, etc.'
                    services={['ev', 'solar', 'roofs', 'xeriscapes']}
                    body={
                        ['In the future, the majority of businesses and homes will have EV Chargers',
                        'Solar power systems derive clean, pure energy from the sun. Installing solar panels on your home helps combat greenhouse gas emissions and reduces our collective dependence on fossil fuel. Traditional electricity is sourced from fossil fuels such as coal and natural gas.',
                        'A green roof provides a rainwater buffer, purifies the air, reduces the ambient temperature, regulates the indoor temperature, saves energy and encourages biodiversity in the city. Green roofs are part of climate-proof construction.',
                        'The first and most obvious benefit of a xeriscape is that it requires very little water. This is essential in an era plagued by low rain and snow fall. In a well-executed xeriscape, you can reduce water usage by as much as 70 percent! The less you depend on water to enhance your landscape, the better.']
                    }
                 />
                
                </div>
                <div className='charity-wrapper bg-light'>
                     <div className='wrapper'>
                         <h1>TRANSBLUE GIVES BACK</h1>
                        <Dees />
                     </div>
                </div>
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
