import React, {Fragment, useEffect, useState} from 'react';
import { Helmet } from 'react-helmet-async';
import { useEasybase } from 'easybase-react';
import Navbar from '../../components/navbar';
import Header from '../../components/header';
import ContactCta from '../../components/contactCta';
import ServiceCard from './serviceCard';
import Professional from './professional';
import Contact2 from './contact2';
//import getAreas from './addCityZip';
import Map from './map';
import About from './about/about';
import Slideshow from '../../components/slideshow';
import CityZip from './cityZip';
//import Contact from './contact';
import MoreServices from './moreServices';
import FranchiseLifestyle from './lifestyle';
import Footer from '../../components/footer/index';
import NewReviews from '../../components/landing/newReviews/newReviews';
import pools from '../../images/franchise/pools.jpg';
import decks from '../../images/franchise/decks.jpg';
import firepit from '../../images/franchise/firepit.jpg';
import sunroom from '../../images/franchise/sunroom.jpg';
import locationsDb from '../locations/db';
import './style.css';

import slidesnow from '../../images/commercial/snow.jpg';
import asphalt from '../../images/commercial/asphalt4.jpg';
import fence from '../../images/commercial/fence.jpg';
import solar from '../../images/commercial/solar.jpg';

function Franchise(props) {
    const [easybaseData, seteasybaseData] = useState([]);
    //const [areas, setAreas] = useState({})
    const [cities, setCities] = useState([])
    const [zipcodes, setZipcodes] = useState([])
    const { db, e } = useEasybase();

    useEffect(() => {
        const mounted = async() => {
            const ebData = await db("LOCATIONS").return().where(e.eq('urlCity', props.match.params.urlCity)).all();
            seteasybaseData(ebData);
            //let areas = JSON.parse(ebData[0].areas)
            setCities(JSON.parse(ebData[0].citylist))
            setZipcodes(JSON.parse(ebData[0].zipcodelist))
            //setAreas(areas);
            console.log(locationsDb[14])
            console.log(Object.keys(locationsDb[14].locations))
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
                    img={`${process.env.PUBLIC_URL}/images/${easybaseData[0].image}`}
                    title={easybaseData[0].name.toUpperCase()}
                    subtitle={`Serving ${easybaseData[0].city}, ${easybaseData[0].state} and surrounding areas`}
                />
                <ContactCta />
                <div className='about bg-light'>
                    <About phone={easybaseData[0].phone} email={easybaseData[0].email} name={easybaseData[0].name} />
                </div>
                <Professional />

                <Slideshow 
                    images={[slidesnow, asphalt, fence, solar]}
                    text={[
                        {
                            p1: "KEEP YOUR BUSINESS DOORS OPEN",
                            // p1: 'We’ll help you keep your lots plowed and treated for ice during snowstorms to let you focus on what you’re best at: running your business.',
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
                    ]} />

                <div className='franchise-services'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-lg-5 right-text'>
                                <h3 className='section-header'>
                                    LOVE THE LIFE YOU LIVE
                                </h3>
                                <p className='section-p'>
                                    At Transblue, our team of landscape architects and designers and put your plans to paper and design a beautiful, cost effective landscape.
                                </p>
                                <p className='section-p'>With over 20 years of experience, you can trust Transblue with your home. We offer a variety of services to make your dream landscape a reality.</p>
                                <button className='cta'>VIEW ALL SERVICES</button>
                                {/* <p className='section-p'>The process is simple:</p>
                                <p className='step'>1) CONSULTATION</p>
                                <p className='section-p'>Our highly knowledgeable team will meet with you and discuss the plans and ideas that you’re processing.</p> */}
                            </div>
                            <div className='col-lg-7'>
                                <div className='row'>
                                    <div className='col-12 col-md-6 col-lg-6'><ServiceCard image={decks} service='DECKS' /></div>
                                    <div className='col-12 col-md-6 col-lg-6'><ServiceCard image={pools} service='POOLS' /></div>
                                    <div className='col-12 col-md-6 col-lg-6'><ServiceCard image={firepit} service='FIREPITS' /></div>
                                    <div className='col-12 col-md-6 col-lg-6'><ServiceCard image={sunroom} service='SUNROOMS' /></div>
                                </div>
                            </div>
                            
                        </div>
                        <MoreServices />
                    </div>
                </div>
                <FranchiseLifestyle location={easybaseData[0]} />

                {/* <Whatwedo /> */}

                <NewReviews />
                <div className='map bg-light'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-lg-6 col-12 cities'>
                                <h5>AREAS SERVICED</h5>
                                <h2>{easybaseData[0].name.toUpperCase()}</h2>
                                <p className='section-p'>Open Mon-Fri 9:00am - 5:00pm</p>
                                <CityZip cities={JSON.parse(easybaseData[0].citylist)} zipcodes={JSON.parse(easybaseData[0].zipcodelist)} />
                            </div>
                            <div className='col-lg-6 col-12'>
                                {easybaseData[0].lat > 0 && <Map lat={easybaseData[0].lat} lon={easybaseData[0].lon} />}
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