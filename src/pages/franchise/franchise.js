import React, {Fragment, useEffect, useState} from 'react';
import { Helmet } from 'react-helmet-async';
import { useEasybase } from 'easybase-react';
import Navbar from '../../components/navbar';
import Header from '../../components/header';
import ContactCta from '../../components/contactCta';
import About from './about/about';
import NewSlideshow from '../../components/newSlideshow';
import ServiceCard from './serviceCard';
import Commercial from './commercial.js';
import Multifamily from './multifamily';
import Professional from './professional';
import Contact2 from './contact2';
//import getAreas from './addCityZip';
import Map from './map';
import Slideshow from '../../components/slideshow';
import Services from './services';
import CityZip from './cityZip';
import MoreServices from './moreServices';
import FranchiseLifestyle from './lifestyle';
import NewReviews from '../../components/landing/newReviews/newReviews';
import ContactModal from '../../components/contactModal';
import Footer from '../../components/footer/index';
import pools from '../../images/franchise/pools.jpg';
import decks from '../../images/franchise/decks.jpg';
import firepit from '../../images/franchise/firepit.jpg';
import sunroom from '../../images/franchise/sunroom.jpg';
//import locationsDb from '../locations/db';

import slidesnow from '../../images/commercial/snow.jpg';
import asphalt from '../../images/commercial/asphalt4.jpg';
import fence from '../../images/commercial/fence.jpg';
import solar from '../../images/commercial/solar.jpg';

import './style.css';


function Franchise(props) {
    const [easybaseData, seteasybaseData] = useState([]);
    //const [areas, setAreas] = useState({})
    const { db, e } = useEasybase();

    useEffect(() => {
        const mounted = async() => {
            const ebData = await db("LOCATIONS").return().where(e.eq('urlCity', props.match.params.urlCity)).all();
            console.log(ebData)
            console.log(JSON.parse(ebData[0].citylist))
            seteasybaseData(ebData);
            //console.log(ebData[0])
            // setCities(JSON.parse(ebData[0].citylist))
            // setZipcodes(JSON.parse(ebData[0].zipcodelist))
        }
         mounted();
    }, [])

    return(
        easybaseData.length > 0 && 
            <Fragment>
            <Helmet>
                <title>{easybaseData[0].name}</title>
                <meta name="description" content="Transblue Government Services" />
            </Helmet>
            <div className='franchise-wrapper'>
                <Navbar page='' franchise={true} city={`${easybaseData[0].city}`} state={`${easybaseData[0].state}`} phone={`${easybaseData[0].phone}`} name={`${easybaseData[0].name}`} urlCity={`${easybaseData[0].urlcity}`}  />
                <Header
                    // img={`${process.env.PUBLIC_URL}/images/${easybaseData[0].image}`}
                    region={easybaseData[0].region}
                    title={easybaseData[0].name.toUpperCase()}
                    subtitle={`Serving ${easybaseData[0].city}, ${easybaseData[0].state} and surrounding areas`}
                />
                <ContactCta email={easybaseData[0].email} />
                <div className='about bg-light'>
                    <About phone={easybaseData[0].phone} email={easybaseData[0].email} name={easybaseData[0].name} />
                </div>
                <div className='franchise-services container-fluid'>
                        <div className='row title'>
                            <h3 className='section-header'>OUTDOOR PROJECTS SIMPLIFIED</h3>
                            <p className='section-p'>
                                At {easybaseData[0].name}, our team of landscape architects and designers put your ideas on paper and design a beautiful, cost effective landscape.
                            </p>
                        </div>
                        <div className='row'>
                            <div className='col-lg-3 col-12 col-sm-6'><ServiceCard image={decks} service='DECKS' /></div>
                            <div className='col-lg-3 col-12 col-sm-6'><ServiceCard image={pools} service='POOLS' /></div>
                            <div className='col-lg-3 col-12 col-sm-6'><ServiceCard image={firepit} service='FIREPITS' /></div>
                            <div className='col-lg-3 col-12 col-sm-6'><ServiceCard image={sunroom} service='SUNROOMS' /></div>
                        </div>
                        <MoreServices />
                    </div>
                    <NewSlideshow />
                {/* <FranchiseLifestyle location={easybaseData[0]} /> */}

                {/* <Slideshow 
                    images={[slidesnow, asphalt, fence, solar]}
                    text={[
                        {
                            p1: "KEEP YOUR BUSINESS DOORS OPEN",
                            p2: ''
                        },
                        {
                            p1: 'REFRESH YOUR ASPHALT AND CONCRETE',
                            p2: ''
                        },
                        {
                            p1: 'INCREASE SECURITY AND PRIVACY',
                            p2: ''
                        },
                        {
                            p1: 'LOWER YOUR ENERGY BILL',
                            p2: ''
                        }
                    ]} /> */}
                
                <Commercial location={easybaseData[0]} />
                <Multifamily location={easybaseData[0]} />

                {/* <Whatwedo /> */}

                <Professional />

                <NewReviews />
                {/* <Services /> */}
                <div className='map'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-md-6 col-12 cities'>
                                <h5>AREAS SERVICED</h5>
                                <h2>{easybaseData[0].name.toUpperCase()}</h2>
                                <p className='section-p'>
                                    {easybaseData[0].phone}<br className='sm-screen-show' />
                                    <span className='hours'>Mon-Fri 9:00am - 5:00pm</span>
                                </p>
                                <CityZip cities={JSON.parse(easybaseData[0].citylist)} zipcodes={JSON.parse(easybaseData[0].zipcodelist)} />
                            </div>
                            <div className='col-md-6 col-12'>
                                {easybaseData[0].lat > 0 && <Map lat={easybaseData[0].lat} lon={easybaseData[0].lon} geojson={JSON.parse(easybaseData[0].geojson)} />}
                            </div>
                        </div>
                    </div>
                </div>
                <Contact2 name={easybaseData[0].name} phone={easybaseData[0].phone} email={easybaseData[0].email} location={`${easybaseData[0].city}, ${easybaseData[0].state}`} franchise={easybaseData[0]} />
                {/* <div className='container-fluid contact-container'>
                    <div className='contact-overlay'></div>
                    <Contact name={easybaseData[0].name} phone={easybaseData[0].phone} email={easybaseData[0].email} location={`${easybaseData[0].city}, ${easybaseData[0].state}`}/>
                </div> */}
                
            </div>
            <Footer locationPage={true} franchise={true} location={easybaseData[0]} />
        </Fragment>
    )

}

export default Franchise;