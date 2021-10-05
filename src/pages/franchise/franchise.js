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
import NewReviews from '../../components/landing/newReviews/newReviews';
import Footer from '../../components/footer/index';
import zipcodes from 'zipcodes'
//import locationsDb from '../locations/db';

import './style.css';
import ServiceModal from '../../components/serviceModal';

function Franchise(props) {
    const [easybaseData, seteasybaseData] = useState([]);
    const [services, setServices] = useState({})
    const { db, e } = useEasybase();
    let userLocation = []

    useEffect(() => {
        const mounted = async() => {
            const ebData = await db("LOCATIONS").return().where(e.eq('urlCity', props.match.params.urlCity)).all();
            //console.log(ebData)
            seteasybaseData(ebData);
            //console.log(ebData)
            setServices(regionalServices[ebData[0].region])
            if('geolocation' in navigator) {
                navigator.geolocation.getCurrentPosition((position) => {
                    userLocation = [position.coords.latitude, position.coords.longitude]
                })
            }
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
                    // img={easybaseData[0].residential}
                    region={easybaseData[0].region}
                    title={easybaseData[0].name.toUpperCase()}
                    subtitle={`Serving ${easybaseData[0].city}, ${easybaseData[0].state} and surrounding areas`}
                    franchise={true}
                />
                <ContactCta email={easybaseData[0].email} />
                <div className='wrapper'>
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
                        {Object.keys(services).length > 0 && <div className='row'>
                            <div className='col-lg-3 col-12 col-sm-6'><ServiceCard image={services.images[0]} service={services.services[0]} /></div>
                            <div className='col-lg-3 col-12 col-sm-6'><ServiceCard image={services.images[1]} service={services.services[1]} /></div>
                            <div className='col-lg-3 col-12 col-sm-6'><ServiceCard image={services.images[2]} service={services.services[2]} /></div>
                            <div className='col-lg-3 col-12 col-sm-6'><ServiceCard image={services.images[3]} service={services.services[3]} /></div>
                            <div className='service-modal'>
                                <ServiceModal />
                            </div>
                        </div>}
                        
                    </div>
                </div>
                <NewSlideshow location={easybaseData[0]} />
                <div className='wrapper'>
                <Commercial location={easybaseData[0]} />
                <Multifamily location={easybaseData[0]} />
                <Contact location={easybaseData[0]} />
                <Govt location={easybaseData[0]} />
                <Green location={easybaseData[0]} />
                </div>
                <Snow location={easybaseData[0]} />

                {/* <Whatwedo /> */}
                <div className='wrapper'>
                <Professional location={easybaseData[0]} />

                {/* <NewReviews /> */}
                <Reviews location={easybaseData[0]} />
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
                                {easybaseData[0].lat > 0 && <Map userLocation={userLocation} lat={easybaseData[0].lat} lon={easybaseData[0].lon} geojson={JSON.parse(easybaseData[0].geojson)} />}
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