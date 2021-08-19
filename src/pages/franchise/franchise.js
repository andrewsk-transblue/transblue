import React, {Fragment, useEffect, useState} from 'react';
import { useEasybase } from 'easybase-react';
import Navbar from '../../components/navbar';
import ServiceCard from './serviceCard';
import pools from '../../images/franchise/pools.jpg';
import decks from '../../images/franchise/decks.jpg';
import firepit from '../../images/franchise/firepit.jpg';
import sunroom from '../../images/franchise/sunroom.jpg';
import Map from './map';
import About from './about/about';
import CityZip from './cityZip';
import Contact from './contact';
import MoreServices from './moreServices';
import Whatwedo from './whatwedo';
import FranchiseLifestyle from './lifestyle';
import Footer from '../../components/footer/index';
import NewReviews from '../../components/landing/newReviews/newReviews';
//import locationsDb from '../locations/db';
import './style.css';

function Franchise(props) {
    const [easybaseData, seteasybaseData] = useState([]);
    const { db, e } = useEasybase();

    useEffect(() => {
        const mounted = async() => {
            const ebData = await db("LOCATIONS").return().where(e.eq('urlCity', props.match.params.urlCity)).all();
            seteasybaseData(ebData);
            //console.log(ebData)
            //console.log(easybaseData[0])
            //easybaseData[0].locations
        }
         mounted();
    }, [])

    return(
        easybaseData.length > 0 && <div className='franchise-wrapper'>
                <Navbar page='' franchise={true} city={`${easybaseData[0].city}`} state={`${easybaseData[0].state}`} phone={`${easybaseData[0].phone}`} name={`${easybaseData[0].name}`}  />
                <div className='franchise-header'>
                    <img src={`${process.env.PUBLIC_URL}/images/${easybaseData[0].image}`} alt={easybaseData[0].city} />
                    <div className='header-text'>
                        <p>{easybaseData[0].name.toUpperCase()}</p>
                        <p className='header-subtext'>Serving {easybaseData[0].city}, {easybaseData[0].state} and surrounding areas</p>
                    </div>
                    <div className='overlay'></div>
                </div>
                <div className='about bg-light'>
                    <About phone={easybaseData[0].phone} email={easybaseData[0].email} name={easybaseData[0].name} />
                </div>
                <div className='franchise-services'>
                    <div className='container-fluid'>
                        {/* <div className='about'>
                            <h4>{easybaseData[0].name}</h4>
                            <About phone={easybaseData[0].phone} email={easybaseData[0].email} />
                        </div> */}

                        <div className='row'>
                            <div className='col-12 col-md-6 col-lg-3'><ServiceCard image={decks} service='DECKS' /></div>
                            <div className='col-12 col-md-6 col-lg-3'><ServiceCard image={pools} service='POOLS' /></div>
                            <div className='col-12 col-md-6 col-lg-3'><ServiceCard image={firepit} service='FIREPITS' /></div>
                            <div className='col-12 col-md-6 col-lg-3'><ServiceCard image={sunroom} service='SUNROOMS' /></div>
                        </div>
                        <MoreServices />
                    </div>
                </div>

                <div className='random'>
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
                    {/* <div className='row'>
                        <span><i className="fas fa-circle"></i><i className="fas fa-circle"></i><i className="fas fa-circle"></i><i className="fas fa-circle"></i></span>
                    </div> */}
                </div>
                </div>

                {/* <Whatwedo /> */}
                <FranchiseLifestyle />
                
                <NewReviews />
                <div className='map bg-light'>
                    <div className='container'>
                        <div className='row'>
                            <h1 className='text-dark'>Areas Serviced</h1><br />
                            {/* <h6>around {easybaseData[0].city}, {easybaseData[0].state}</h6> */}
                        </div>
                        <div className='row'>
                            <div className='col-lg-6 cities'>
                                {easybaseData[0].locations !== undefined && <CityZip locations={easybaseData[0].locations} />   }             
                            </div>
                            {easybaseData[0].lat > 0 && <div className='col-lg-6'><Map lat={easybaseData[0].lat} lon={easybaseData[0].lon} /></div>}
                        </div>
                    </div>
                </div>
                <div className='container-fluid contact-container'>
                    <div className='contact-overlay'></div>
                    <Contact name={easybaseData[0].name} phone={easybaseData[0].phone} email={easybaseData[0].email} location={`${easybaseData[0].city}, ${easybaseData[0].state}`}/>
                </div>
                <Footer locationPage={true} franchise={true} location={easybaseData[0]} />
            </div>
    )

}

export default Franchise;