import React, {Fragment} from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/navbar/index';
import Header from '../../components/header';
import ContactCta from '../../components/contactCta';
import Assets from '../../components/multifamily/assets';
//import ServiceSlides from '../../components/commercial/serviceSlides';
//import Carousel from '../../components/carousel';
import CampImages from '../../components/multifamily/camp';
import ServiceCard from '../../components/residential/greenServices/serviceCard';
import ServiceList from '../../components/serviceList';
import HoverImages from '../../components/hoverImages';
import Snow from '../../components/snow';
import ContactModal from '../../components/contactModal';
import ThreeCols from '../../components/threeCol';
import Hospitality from '../commercial/hospitality';
import Footer from '../../components/footer';
import header2 from '../../images/multifamily/header2.jpg';
import rooftop from '../../images/multifamily/rooftop.jpeg';
import pool from '../../images/multifamily/pool.jpeg';
import parkinglot from '../../images/multifamily/asphalt.jpg';
import snow from '../../images/multifamily/snow.jpg';
import luxury from '../../images/multifamily/luxury.jpg';
import services from '../../images/multifamily/services.jpeg';
import './style.css';
import Green from '../../components/green';

import solidrock from '../../images/multifamily/solidRock/1.png';
import solidrock2 from '../../images/multifamily/solidRock/2.png';
import solidrock3 from '../../images/multifamily/solidRock/3.png';
import ascent from '../../images/multifamily/solidRock/ascent.png';


function Multifamily() {
    return(
        <Fragment>
            <Helmet>
                <title>Transblue Multifamily</title>
                <meta name="description" content="Transblue Multifamily Services" />
            </Helmet>
            <Navbar page='MULTIFAMILY' parentPage='gc'  />

            <Header img={header2} title='MULTIFAMILY' subtitle='' name='multifamily' />
            <ContactCta />
            <div className='multifamily-body'>
                <div className='container-fluid multifamily-about'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <h1>BEAUTIFY YOUR<br /> MULTIFAMILY RESIDENCE</h1>
                            <a href='/locations'>FIND YOUR LOCAL TRANSBLUE</a>
                        </div>
                        <div className='col-lg-6'>
                            <p className='section-p pt-4'>Transblue is proud to offer construction services to multi-family communities. Our multi-family division understands the specific needs of your community and can taylor construction plans accordingly. Primarily, we focus on Capital Projects that are pre-designated during annual reserve studies, but we can accomodate a multitude of projects. Give our team of professionals a call today to discuss your project!</p>
                        </div>
                    </div>
                </div>
                <div className='container-fluid benefits'>
                    <div className='row'>
                    <div className='col-lg-7 order-lg-12'>
                            <img className='pt-4' src={luxury} alt='Luxury Apartment' />
                        </div>
                        <div className='col-lg-5 right-text'>
                            <h4 className='section-header'>GET AN EDGE OVER YOUR COMPETITORS</h4>
                            <ul className='section-p'>
                                <li>Multi-discipline subject matter construction experts</li>
                                <li>Turnkey installation – all services under 1 roof </li>
                                <li>One point of contact no matter how many trades are involved</li>
                                {/* <li>Increase your property value</li> */}
                                <li>Proactive project management</li>
                                <li>Collaborative team members and flexible service offerings</li>
                                <li>On time and on budget projects</li>
                                <li>Fastest return on proposals in industry</li>
                                <li>Financing available for qualifying projects</li>
                            </ul>
                            <a className='cta' href='/locations'>LOCATIONS</a><ContactModal />
                        </div>
                        
                    </div>
                </div>
                <Hospitality />
                {/* <div className='benefits-banner'>
                    <p>INCREASE YOUR PROPERTY VALUE</p>
                    <p>with our World Class services that enhance the beauty of every space </p>
                </div> */}
                 <ThreeCols
                    title='REFRESH YOUR MULTIFAMILY RESIDENCE'
                    subtitle='Refreshed buildings keep property values high. Transblue is 100% committed to delivering World Class services that enhance the beauty of each and every space.'
                    card1={{
                        img: rooftop,
                        title: 'RETHINK YOUR ROOF',
                        body: 'Transblue provides roofing services to communities looking to replace existing roofing structures or install new roofing systems. This includes systems such as flat PVC and TPO, metals, asphalt shingles, green roofs, tiles, torch down, and more'
                    }}
                    card2={{
                        img: pool,
                        title: 'POOL RENOVATION & CONSTRUCTION',
                        body: 'Transblue provides Swimming pool renovations and installs to community properties. This includes replastering, retiling, re-decking, and installing up to grade drainage systems'
                    }}
                    card3={{
                        img: parkinglot,
                        title: 'ASPHALT SERVICES',
                        body: 'Transblue provides asphalt services that including paving, seal coating, crack sealing, parking lot striping, concrete replacement and grinding, curbing, and restriping'
                    }}
                />
                 <div className='container-fluid camp'>
                    <div className='row'>
                        <div className='col-lg-5 order-lg-12 left-text'>
                            <h4 className='section-header'>CREATING A SOLID FOUNDATION FOR YOUTH</h4>
                            {/* <div className='section-p mb-3'>Summer is a great time for camps. Camps are transformational in the lives of children and teens. Solid Rock Mission, one of our mBridge partners, hosts camps all summer long for thousands of kids and teens (1782 kids in June).</div>
                            <div className='section-p mb-3'>This month we have had back to back to back camps. We organized camps in villages and small towns. Over 100 kids showed up to each camp with 1782 attending in June. These kids come from various families and backgrounds with all sorts of hurts and broken stories. Our goal is to always and foremost show them God's love.</div>
                            <div className='section-p pb-4'>Most of the kids that attended these camps over the course of this month come from broken families. Many of these families lost their loved ones while others had parents that simply left their family. At camp, it is a great opportunity for us to love them and most of all show them God's love.</div> */}
                            <div className='section-p mb-3'>
                                Solid Rock Mission, one of our mBridge partners, reaches into rural and war torn regions of southern and eastern Ukraine, where alcoholism and the breakdown of family is rampant. Children and youth are often victims of abuse or politically radicalized.
                            </div>
                            {/* <div className='section-p mb-3'>Summer is a great time for camps. Camps are transformational in the lives of children and teens.</div>
                            <div className='section-p mb-3'></div> */}
                            <div className='section-p mb-3'>Last year, we completed the Ascent roofing project in Seattle, WA. We partnered with Solid Rock Mission and used the profits from the Ascent project to send over 4000 children and youth from Southern and Eastern Ukraine to summer camps. Over 1000 of these children committed their lives to Christ. These camps were a great opportunity to impact these children with hope and love in a trying time, and more importantly show them God's love.</div>
                        </div>
                        <div className='col-lg-7'>
                            {/* <CampImages /> */}
                            <HoverImages 
                                page={[
                                    {image: ascent, title: 'ASCENT ROOFING PROJECT', caption: ''},
                                    {image: solidrock, title: 'SOLID ROCK CAMP', caption: ''},
                                    {image: solidrock2, title: 'SOLID ROCK CAMP', caption: 'Music station at camp where the kids learn to sing praise songs which they memorize and take home with them. We believe that the message of these songs has the power to impact these children with hope and love.'},
                                    {image: solidrock3, title: 'SOLID ROCK CAMP', caption: ''}
                                ]}
                            />
                        </div>
                    </div>
                </div>
                <Assets />
                <Snow
                    img={snow}
                    title='KEEP YOUR COMMUNITY SAFE'
                    p1='Safety is key to our World Class snow and ice programs. At Transblue we don’t consider it snow removal, we consider it risk removal.'
                    p2='Keeping your property plowed and deiced keeps your community safe during the worst winter storms.'
                    p3='We offer comprehensive snow and ice management plans that include plowing, deicing, hauling, snow staging, shoveling, and icicle melting.'
                />
                {/* <ServiceSlides /> */}
                {/* <Carousel
                    services={{
                        'SNOW & ICE': '',
                        'SWIMMING POOLS': '',
                        'ASPHALT': '',
                        'LANDSCAPE INSTALLS': '',
                        'ROOFING': '',
                        'SIDING': '',
                        'PAINTING': '',
                        'REMODELS': '',
                        'CONCRETE': '',
                        'DRAINAGE SYSTEMS': '',
                        'DECKS & FENCES': '',
                        'EV CHARGING': '',
                        'SOLAR POWER': '',
                        'ESG SERVICES': ''
                    }} /> */}
                <Green 
                    page='multifamily'
                    solar='Reduce overhead and save on utility bills with solar panels'
                    ev='Increase resident retention and value of your property with EV Chargers'
                    roof='Save money on cost of energy and local storm water fees' />
                <ServiceList
                title='MULTIFAMILY SERVICES'
                //subtitle='Transblue is your construction resource. We offer a wide variety of services to fit your specific needs, contact us today to discuss your project.'
                img={services}
                services={[
                    'Snow and Ice Management',
                    'Swimming Pool construction and resurfacing',
                    'Asphalt Paving',
                    'Large Landscape installs',
                    'Roofing',
                    'Siding',
                    'Painting',
                    'Remodels and refreshes',
                    'Concrete work',
                    'Drainage Systems',
                    'Decking, fencing and railing systems',
                    'Electric Vehicle Charging Systems, Solar Power',
                    'ESG Service Offerings'
                ]} />
                {/* <ServiceCard
                     p1='As a property manager, being on the right side of the environment is not only great for our world, but it also makes you feel better. You’re doing your part. You’re reducing our footprint. These are project that you can truly take pride in. Not only do you love and enjoy them, but its just the right thing to do.'
                     p2='Transblue offers a full range of ESG (environmental, social, and governance) services. These services include; Installing Electric Vehicle Charging Systems, Solar Energy, Xeriscape Initiatives, Water management programs,  Green Roofs, Lighting Projects, etc.'
                     services={['ev', 'solar', 'roofs', 'xeriscapes']}
                     body={
                         ['The need for EV charging stations is on the rise. Transblue provides the electrical engineering, trenching, electrical upgrades, concrete work, asphalt work, permitting, etc. required to install Electric Charging Stations for your communities.',
                         'Solar power systems derive clean, pure energy from the sun. Installing solar panels on your home helps combat greenhouse gas emissions and reduces our collective dependence on fossil fuel. Traditional electricity is sourced from fossil fuels such as coal and natural gas.',
                         'A green roof provides a rainwater buffer, purifies the air, reduces the ambient temperature, regulates the indoor temperature, saves energy and encourages biodiversity in the city. Green roofs are part of climate-proof construction.',
                         'The first and most obvious benefit of a xeriscape is that it requires very little water. This is essential in an era plagued by low rain and snow fall. In a well-executed xeriscape, you can reduce water usage by as much as 70 percent! The less you depend on water to enhance your landscape, the better.']
                     }
                /> */}
               
                <Footer />
            </div>
        </Fragment>
    )
}

export default Multifamily;