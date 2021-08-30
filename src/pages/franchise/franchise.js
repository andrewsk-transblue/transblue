import React, {Fragment, useEffect, useState} from 'react';
import { Helmet } from 'react-helmet-async';
import { useEasybase } from 'easybase-react';
import Navbar from '../../components/navbar';
import Header from '../../components/header';
import ServiceCard from './serviceCard';
import Professional from './professional';
import Contact2 from './contact2';
//import getAreas from './addCityZip';
import pools from '../../images/franchise/pools.jpg';
import decks from '../../images/franchise/decks.jpg';
import firepit from '../../images/franchise/firepit.jpg';
import sunroom from '../../images/franchise/sunroom.jpg';
import Map from './map';
import About from './about/about';
import CityZip from './cityZip';
import Contact from './contact';
import MoreServices from './moreServices';
import FranchiseLifestyle from './lifestyle';
import Footer from '../../components/footer/index';
import NewReviews from '../../components/landing/newReviews/newReviews';
//import locationsDb from '../locations/db';
import './style.css';

function Franchise(props) {
    const [easybaseData, seteasybaseData] = useState([]);
    const [areas, setAreas] = useState({})
    const { db, e } = useEasybase();

    useEffect(() => {
        const mounted = async() => {
            const ebData = await db("LOCATIONS").return().where(e.eq('urlCity', props.match.params.urlCity)).all();
            seteasybaseData(ebData);

            console.log(ebData[0].areas)
            let areas = JSON.parse(ebData[0].areas)
            setAreas(areas);
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
                <div className='about bg-light'>
                    <About phone={easybaseData[0].phone} email={easybaseData[0].email} name={easybaseData[0].name} />
                </div>
                <Professional />
                <FranchiseLifestyle location={easybaseData[0]} />

                {/* <div className='random'>
                    <div className='overlay'></div>
                    <div className='container excellent-service centered-text'>
                        <div className='row'>
                            <div className='col-lg-4'>
                                <i className="fas fa-seedling fa-2x"></i>
                                <p>OUTSTANDING SERVICE</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue cursus sagittis. Nam vel enim.</p>
                            </div>
                            <div className='col-lg-4'>
                                <i className="fas fa-seedling fa-2x"></i>
                                <p>PROFESSIONAL WORK</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue cursus sagittis. Nam vel enim.</p>
                            </div>
                            <div className='col-lg-4'>
                                <i className="fas fa-seedling fa-2x"></i>
                                <p>GREAT COMMUNICATION</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue cursus sagittis. Nam vel enim.</p>
                            </div>
                        </div>
                    </div>
                </div> */}

                <div className='franchise-services'>
                    <div className='container-fluid'>
                        {/* <div className='about'>
                            <h4>{easybaseData[0].name}</h4>
                            <About phone={easybaseData[0].phone} email={easybaseData[0].email} />
                        </div> */}
                        
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

                {/* <Whatwedo /> */}

                <NewReviews />
                <div className='map bg-light'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-lg-6 col-12 cities'>
                                <h5>AREAS SERVICED</h5>
                                <h2>{easybaseData[0].name.toUpperCase()}</h2>
                                <p className='section-p'>Open Mon-Fri 9:00am - 5:00pm</p>
                                {Object.keys(areas).length > 0 && <CityZip locations={areas} />   }
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