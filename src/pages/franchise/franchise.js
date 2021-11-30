import React, {Fragment, useEffect, useState, lazy} from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/navbar';
import Header from '../../components/header';
import ContactCta from '../../components/contactCta';
import About from './about/about';
import ServiceCard from './serviceCard';
import Commercial from './commercial.js';
import Multifamily from './multifamily';
import Govt from './govt';
import Green from './green';
import Snow from './snow';
import Professional from './professional';
import Reviews from './reviews';
import Contact2 from './contact2';
//import Map from './map';
import regionalServices from './regionalServices';
import CityZip from './cityZip';
import Footer from '../../components/footer/index';
import Finance from './finance';
import './style.css';
import ServiceModal from '../../components/serviceModal';
import db from './reviewDb';

import ReactGA from 'react-ga';
const TRACKING_ID = process.env.REACT_APP_GOOGLE_ANALYTICS_ID
ReactGA.initialize(TRACKING_ID);

const Map = lazy(() => import('./map'))

function Franchise(props) {
    //console.log(props)
    const [location, setLocation] = useState({})
    const [services, setServices] = useState({})
    const [name, setName] = useState('')
    const [displaySnow, setDisplaySnow] = useState(true);

    useEffect(() => {
        ReactGA.event({
            category: 'User',
            action: `Visited ${props.name} Page`
            });
        let urlCity = props.urlCity;

        for(let i=0; i<props.locations.length; i++) {
            if(props.locations[i].urlcity === urlCity) {
                let region = props.locations[i].region
                setLocation(props.locations[i])
                setServices(regionalServices[region])
                setName(props.locations[i].name.slice(10))
                if(region === 'southwest' || region === 'west') setDisplaySnow(false)
                return
            }
        }
        //console.log(location)
    }, [])

    //console.log(Object.keys(location))

    return(
        Object.keys(location).length > 0 && 
            <Fragment>
            <Helmet>
                <title>{location.name}</title>
                <meta name="description" content={`World Class General Contracting services offered in ${name}, ${location.state} and surrounding areas`} />
            </Helmet>
            <div className='franchise-wrapper'>
                <Navbar page='' franchise={true} city={`${location.city}`} state={`${location.state}`} phone={`${location.callbluephone}`} name={`${location.name}`} urlCity={`${location.urlcity}`}  />
                <Header
                    region={location.region}
                    title='TRANSBLUE'
                    //title={location.name.toUpperCase()}
                    subtitle={`Serving ${name}, ${location.state} and surrounding areas`}
                    franchise={true}
                />
                <ContactCta email={location.email} location={location.name} />
                <div className='wrapper'>
                <div className='about bg-light'>
                    <About phone={location.callbluephone} email={location.email} name={location.name} />
                </div>
                <div className='franchise-services container-fluid'>
                        <div className='row title'>
                            <h3 className='section-header'>OUTDOOR PROJECTS SIMPLIFIED</h3>
                            <p className='section-p'>
                                At {location.name}, our team of landscape architects and designers put your ideas on paper and design a beautiful, cost effective landscape.
                            </p>
                        </div>
                        {Object.keys(services).length > 0 && <div className='row'>
                            <div className='col-lg-3 col-12 col-sm-6'><ServiceCard image={services.images[0]} service={services.services[0]} /></div>
                            <div className='col-lg-3 col-12 col-sm-6'><ServiceCard image={services.images[1]} service={services.services[1]} /></div>
                            <div className='col-lg-3 col-12 col-sm-6'><ServiceCard image={services.images[2]} service={services.services[2]} /></div>
                            <div className='col-lg-3 col-12 col-sm-6'><ServiceCard image={services.images[3]} service={services.services[3]} /></div>
                            <div className='service-modal'>
                                <ServiceModal service='all' snow={displaySnow} />
                            </div>
                        </div>}
                    </div>
                </div>
                <div className='wrapper'>
                    <Multifamily location={location} />
                </div>

                {displaySnow && <Snow location={location} />}

                <div className='wrapper'>
                    <Commercial location={location} />
                    <Govt location={location} />
                    <Green location={location} />
                </div>
                <div className='wrapper'>
                    <Professional location={location} />

                    {/* ONLY RENDER REVIEWS IF REVIEWS IN REVIEWSDB.JS */}
                    {db[location] !== undefined && <Reviews location={location} />}

                    <div className='map'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-md-6 col-12 cities'>
                                <h5>AREAS SERVICED</h5>
                                <h2>{location.name.toUpperCase()}</h2>
                                <p className='section-p'>
                                    {location.phone}<br className='sm-screen-show' />
                                    <span className='hours'>Mon-Fri 9:00am - 5:00pm</span>
                                </p>
                                <CityZip cities={JSON.parse(location.citylist)} zipcodes={JSON.parse(location.zipcodelist)} />
                            </div>
                            <div className='col-md-6 col-12'>
                                {location.lat > 0 && <Map  lat={location.lat} lon={location.lon} 
                                    geojson={JSON.parse(location.geojson)}
                                 />}
                            </div>
                        </div>
                    </div>
                </div>
                </div>

                <Finance location={location} />

                <Contact2 name={location.name} phone={location.phone} email={location.email} location={`${location.city}, ${location.state}`} franchise={location} />               
            </div>
            <Footer locationPage={true} franchise={true} location={location} />
        </Fragment>
    )

}

export default Franchise;