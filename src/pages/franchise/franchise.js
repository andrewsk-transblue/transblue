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
import Contact from './contact';
import Govt from './govt';
import Green from './green';
import Snow from './snow';
import Professional from './professional';
import Reviews from './reviews';
import Contact2 from './contact2';
//import getAreas from './addCityZip';
import Map from './map';
//import Services from './services';
import regionalServices from './regionalServices';
import CityZip from './cityZip';
//import FranchiseLifestyle from './lifestyle';
import Footer from '../../components/footer/index';
//import zipcodes from 'zipcodes';
import Finance from './finance';
import './style.css';
import ServiceModal from '../../components/serviceModal';
import db from './reviewDb';

import ReactGA from 'react-ga';
const TRACKING_ID = process.env.REACT_APP_GOOGLE_ANALYTICS_ID
ReactGA.initialize(TRACKING_ID);

function Franchise(props) {
    const [easybaseData, seteasybaseData] = useState([]);
    const [services, setServices] = useState({})
    const { db, e } = useEasybase();
    const [displaySnow, setDisplaySnow] = useState(true);
    let userLocation = []

    useEffect(() => {
        ReactGA.event({
            category: 'User',
            action: `Visited ${props.name} Page`
            });

        const mounted = async() => {
            const ebData = await db("LOCATIONS").return().where(e.eq('urlCity', props.match.params.urlCity)).all();
            let region = ebData[0].region
            //hide snow component for southwest and west regions
            if(region === 'southwest' || region === 'west') setDisplaySnow(false)

            seteasybaseData(ebData);

            setServices(regionalServices[region])
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
                <Navbar page='' franchise={true} city={`${easybaseData[0].city}`} state={`${easybaseData[0].state}`} phone={`${easybaseData[0].callbluephone}`} name={`${easybaseData[0].name}`} urlCity={`${easybaseData[0].urlcity}`}  />
                <Header
                    region={easybaseData[0].region}
                    title={easybaseData[0].name.toUpperCase()}
                    subtitle={`Serving ${easybaseData[0].city}, ${easybaseData[0].state} and surrounding areas`}
                    franchise={true}
                />
                <ContactCta email={easybaseData[0].email} />
                <div className='wrapper'>
                <div className='about bg-light'>
                    <About phone={easybaseData[0].callbluephone} email={easybaseData[0].email} name={easybaseData[0].name} />
                </div>
                <div className='franchise-services container-fluid'>
                        <div className='row title'>
                            <h3 className='section-header'>OUTDOOR PROJECTS SIMPLIFIED</h3>
                            <p className='section-p'>
                                At {easybaseData[0].name}, our team of landscape architects and designers put your ideas on paper and design a beautiful, cost effective landscape.
                            </p>
                        </div>
                        {Object.keys(services).length > 0 && <div className='row'>
                            <div className='col-lg-3 col-12 col-sm-6'><ServiceCard image={services.images[0]} service={services.services[0]} /></div>
                            <div className='col-lg-3 col-12 col-sm-6'><ServiceCard image={services.images[1]} service={services.services[1]} /></div>
                            <div className='col-lg-3 col-12 col-sm-6'><ServiceCard image={services.images[2]} service={services.services[2]} /></div>
                            <div className='col-lg-3 col-12 col-sm-6'><ServiceCard image={services.images[3]} service={services.services[3]} /></div>
                            <div className='service-modal'>
                                <ServiceModal service='all' />
                            </div>
                        </div>}
                        
                    </div>
                </div>
                <NewSlideshow location={easybaseData[0]} />
                <div className='wrapper'>
                    <Multifamily location={easybaseData[0]} />
                </div>

                {displaySnow && <Snow location={easybaseData[0]} />}

                <div className='wrapper'>
                    <Contact location={easybaseData[0]} />
                </div>
                    <Finance location={easybaseData[0]} />
                <div className='wrapper'>
                    <Commercial location={easybaseData[0]} />
                    <Govt location={easybaseData[0]} />
                    <Green location={easybaseData[0]} />
                </div>
                <div className='wrapper'>
                    <Professional location={easybaseData[0]} />

                    {/* ONLY RENDER REVIEWS IF REVIEWS IN REVIEWSDB.JS */}
                    {db[easybaseData[0]] !== undefined && <Reviews location={easybaseData[0]} />}

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
                                {easybaseData[0].lat > 0 && <Map  lat={easybaseData[0].lat} lon={easybaseData[0].lon} 
                                    geojson={JSON.parse(easybaseData[0].geojson)}
                                 />}
                            </div>
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