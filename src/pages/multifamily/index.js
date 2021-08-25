import React, {Fragment} from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/navbar/index';
import Header from '../../components/header';
//import LocationsCta from '../../components/locationsCTA';
import ContactCta from '../../components/contactCta';
import Assets from '../../components/multifamily/assets';
//import ServiceSlides from '../../components/commercial/serviceSlides';
import Carousel from '../../components/carousel';
import CampImages from '../../components/multifamily/camp';
import ServiceCard from '../../components/residential/greenServices/serviceCard';
import Snow from '../../components/snow';
import Footer from '../../components/footer';
import header from '../../images/multifamily/header.jpeg';
import rooftop from '../../images/multifamily/rooftop.jpeg';
import pool from '../../images/multifamily/pool.jpeg';
import parkinglot from '../../images/multifamily/asphalt.jpg';
import snow from '../../images/multifamily/snow.jpg';
import luxury from '../../images/multifamily/luxury.jpg';
import './style.css';
import ContactModal from '../../components/contactModal';

function Multifamily() {
    return(
        <Fragment>
            <Helmet>
                <title>Transblue Multifamily</title>
                <meta name="description" content="Transblue Multifamily Services" />
            </Helmet>
            <Navbar page='MULTIFAMILY' parentPage='gc' />

            <Header img={header} title='MULTIFAMILY' subtitle='' />
            <ContactCta />
            {/* <LocationsCta /> */}
            <div className='multifamily-body'>
                <div className='container-fluid multifamily-about'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <h1>BEAUTIFY YOUR<br /> MULTIFAMILY RESIDENCE</h1>
                            <a href='/locations'>FIND YOUR LOCAL TRANSBLUE</a>
                        </div>
                        <div className='col-lg-6'>
                            <p className='section-p pt-4'>Whether you are an apartment complex, retirement community, or a condo association, attractive landscaping can have a huge impact on boosting occupancy number of your property. Let the professionals at Transblue help transform your property into something beautiful and appealing to current and future occupants.</p>
                        </div>
                    </div>
                </div>
                <div className='container-fluid multifamily-services'>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <img src={rooftop} alt='Apartment Rooftop' />
                            <p>CONCRETE </p>
                            <div className='section-p mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et mauris mauris. Nullam commodo tristique enim, a congue leo fermentum eu. Vivamus ut diam enim.</div>
                        </div>
                        <div className='col-lg-4'>
                            <img src={pool} alt='Apartment Rooftop' />
                            <p>POOLS</p>
                            <div className=' section-p mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et mauris mauris. Nullam commodo tristique enim, a congue leo fermentum eu. Vivamus ut diam enim.</div>
                        </div>
                        <div className='col-lg-4'>
                            <img src={parkinglot} alt='Apartment Rooftop' />
                            <p>ASPHALT</p>
                            <div className='section-p mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et mauris mauris. Nullam commodo tristique enim, a congue leo fermentum eu. Vivamus ut diam enim.</div>
                        </div>
                    </div>
                </div>
                <div className='benefits-banner'>
                    <p>ATTRACT PROSPECTIVE TENANTS</p>
                    <p>With a beautifully designed landscape and perfectly tailored amenities</p>
                </div>
                <div className='container-fluid benefits'>
                    <div className='row'>
                        <div className='col-lg-6 pt-3'>
                            <h4 className='section-header'>GET AN EDGE OVER YOUR COMPETITORS</h4>
                            <ul className='section-p pr-5'>
                                <li>Attract prospective tenants</li>
                                <li>Achieve and maintain a high occupancy rate</li>
                                <li>Maintain and increase property values</li>
                                <li>Manage operational expenses to remain within budget</li>
                                <li>Provide a safe, comfortable environment for staff, residents, and visitors</li>
                            </ul>
                            <a className='cta' href='/locations'>FIND A LOCATION</a><ContactModal />
                        </div>
                        <div className='col-lg-6'>
                            <img className='pt-4' src={luxury} alt='Luxury Apartment' />
                        </div>
                    </div>
                </div>
                <Assets />
                <Snow
                    img={snow}
                    title='KEEP YOUR COMMUNITY SAFE'
                    p1='Proper facilities management is key to a successful multifamily residence. We’ll help you keep your lots plowed and treated for ice during snowstorms to let you focus on what you’re best at: taking care of your residents.'
                    p2='Mauris sem nulla, consequat in purus sit amet, finibus viverra metus. Vivamus ultrices cursus nisi vitae ultricies. Nunc id tellus turpis. Vivamus a dolor at lorem condimentum consectetur.'
                    p3=''
                />
                {/* <ServiceSlides /> */}
                <Carousel />
                <ServiceCard />
                <div className='container-fluid camp'>
                    <div className='row'>
                        <div className='col-lg-6 order-lg-12 left-text'>
                            <h4 className='section-header'>TRANSBLUE SUPPORTS KIDS CAMPS</h4>
                            {/* <div className='section-p mb-3'>Summer is a great time for camps. Camps are transformational in the lives of children and teens. Solid Rock Mission, one of our mBridge partners, hosts camps all summer long for thousands of kids and teens (1782 kids in June).</div>
                            <div className='section-p mb-3'>This month we have had back to back to back camps. We organized camps in villages and small towns. Over 100 kids showed up to each camp with 1782 attending in June. These kids come from various families and backgrounds with all sorts of hurts and broken stories. Our goal is to always and foremost show them God's love.</div>
                            <div className='section-p pb-4'>Most of the kids that attended these camps over the course of this month come from broken families. Many of these families lost their loved ones while others had parents that simply left their family. At camp, it is a great opportunity for us to love them and most of all show them God's love.</div> */}

                            <div className='section-p mb-3'>Summer is a great time for camps. Camps are transformational in the lives of children and teens.</div>
                            <div className='section-p mb-3'>Solid Rock Mission, one of our mBridge partners, reaches into rural and war torn regions of southern and eastern Ukraine.</div>
                            <div className='section-p'>Alcoholism and the break down of the family is rampant. Children and youth are often victims of abuse or politically radicalized. Last year, Transblue helped Solid Rock Missions send over 4000 children and youth to attend summer camps with over 1000 committing their lives to Christ.</div>
                        </div>
                        <div className='col-lg-6'>
                            <CampImages />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

export default Multifamily;