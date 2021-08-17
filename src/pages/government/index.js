import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/navbar/index';
import Header from '../../components/header';
import Capabilities2 from '../../components/government/capabilities2';
import Footer from '../../components/footer/index';
import LocationsCta from '../../components/locationsCTA';
import ContactCta from '../../components/contactCta';
import govt from '../../images/government/govtseattle.jpg';
import govtbuilding from '../../images/government/govtbuilding2.jpg';
import asphaltCropped from '../../images/government/govtasphaltCropped.jpg';
import concreteCropped from '../../images/government/govtconcreteCropped.jpeg';
import ev from '../../images/government/evCropped.jpeg';
import solar from '../../images/government/govtsolarCropped.jpeg';
import snow from '../../images/government/govtsnow.jpg';
import porous from '../../images/multifamily/porous.jpg';
import Slider from "react-slick";
import ServiceSlides from '../../components/commercial/serviceSlides/index';
import Capabilities from '../../components/government/capabilities';
import './style.css';


class Government extends Component {

    render() {
        const settings = {
            dots: true,
            arrows: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            className: 'govt-slider',
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };
        return(
            <Fragment>
                <Helmet>
                    <title>Transblue Government</title>
                    <meta name="description" content="Transblue Government Services" />
                </Helmet>
                <Navbar page='GOVERNMENT' parentPage='gc' />
                <Header img={govt} title='GOVERNMENT' subtitle='' />
                {/* <LocationsCta /> */}
                <ContactCta />
                <div className='government-body'>
                    <div className='container-fluid government-about'>
                        <div className='row'>
                            <div className='col-lg-6 order-lg-12'>
                                <h4 className='section-header mb-3'>KEEP YOUR SERVICES RUNNING SMOOTHLY</h4>
                                <p className='section-p'>Nulla ac odio eget arcu ullamcorper laoreet. Nullam suscipit euismod elit, ut elementum est vehicula at. Curabitur lobortis diam aliquet, fermentum ligula eget, egestas nibh.</p>
                                <p className='section-p'>Donec id dictum lorem, id sagittis arcu. Vivamus quis convallis sem. In dictum orci at blandit tincidunt. </p>
                                <p className='section-p pb-4'>Aenean vestibulum lacinia eleifend. Nulla ipsum erat, interdum at viverra lobortis, luctus sit amet lectus. </p>
                            </div>
                            <div className='col-lg-6'>
                                <img src={govtbuilding} alt='Government Building' />
                            </div>
                        </div>
                    </div>
                    <Capabilities2 />
                    <div className='slider container-fluid'>
                        <h4 className='section-header mb-3'>REFRESH YOUR GOVERNMENT BUILDING</h4>
                        <hr />
                        <Slider {...settings}>
                            <div>
                                <img src={concreteCropped} alt='Government Asphalt' />
                                <p className='mt-3'>REMODELING</p>
                                <p className='section-p'>Nullam commodo tristique enim, a congue leo fermentum eu. Vivamus ut diam enim.</p>
                            </div>
                            <div>
                                <img src={asphaltCropped} alt='Government Asphalt' />
                                <p className='mt-3'>RETAINING WALLS</p>
                                <p className='section-p'>Nullam commodo tristique enim, a congue leo fermentum eu. Vivamus ut diam enim.</p>
                            </div>
                            <div>
                                <img src={concreteCropped} alt='Government Paint' />
                                <p className='mt-3'>FRESH PAINT</p>
                                <p className='section-p'>Nullam commodo tristique enim, a congue leo fermentum eu. Vivamus ut diam enim.</p>
                            </div>
                            <div>
                                <img src={asphaltCropped} alt='Government Roof' />
                                <p className='mt-3'>A BRAND NEW ROOF</p>
                                <p className='section-p'>Nullam commodo tristique enim, a congue leo fermentum eu. Vivamus ut diam enim.</p>
                            </div>
                            <div>
                                <img src={concreteCropped} alt='Government Siding' />
                                <p className='mt-3'>ALL NEW SIDING</p>
                                <p className='section-p'>Nullam commodo tristique enim, a congue leo fermentum eu. Vivamus ut diam enim.</p>
                            </div>
                            <div>
                                <img src={asphaltCropped} alt='Government Siding' />
                                <p className='mt-3'>SLOPE CREEP</p>
                                <p className='section-p'>Nullam commodo tristique enim, a congue leo fermentum eu. Vivamus ut diam enim.</p>
                            </div>
                        </Slider>
                    </div>
                    <div className='container-fluid asphalt'>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <img src={asphaltCropped} alt='Government Asphalt' />
                                <p>ASPHALT INSTALLATION</p>
                                <p className='section-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et mauris mauris. Nullam commodo tristique enim, a congue leo fermentum eu. Vivamus ut diam enim.</p>
                            </div>
                            <div className='col-lg-6'>
                                <img src={concreteCropped} alt='Government Concrete' />
                                <p>CONCRETE INSTALLATION</p>
                                <p className='section-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et mauris mauris. Nullam commodo tristique enim, a congue leo fermentum eu. Vivamus ut diam enim.</p>
                            </div>
                        </div>
                    </div>
                    <div className='container-fluid green-solns'>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <h4 className='section-header mb-3'>LOWER YOUR ENERGY BILL AND ENVIRONMENTAL IMPACT</h4>
                                <hr />
                                {/* <h3>LOWER YOUR ENERGY BILL AND ENVIRONMENTAL IMPACT WITH GREEN SOLUTIONS</h3> */}
                            </div>
                        </div>
                        <div className='row'>
                        <div className='col-lg-4 col-md-6'>
                                <img src={solar} alt='Government Solar Roof' />
                                <p>SOLAR</p>
                                <p className='section-p mb-4'>Decrease your energy bill by installing solar roofs to create your own energy</p>
                            </div>
                            <div className='col-lg-4 col-md-6'>
                                <img src={ev} alt='Government EV Charger' />
                                <p>ELECTRIC VEHICLE CHARGERS</p>
                                <p className='section-p mb-4'>Provide green solutions for your employees and contribute to creating a greener world</p>
                            </div>
                            <div className='col-lg-4 col-md-6'>
                                <img src={porous} alt='Porous Asphalt' />
                                <p>POROUS ASPHALT</p>
                                <p className='section-p mb-4'>Provide green solutions for your employees and contribute to creating a greener world</p>
                            </div>
                        </div>
                    </div>
                    <div className='container-fluid snow'>
                        <div className='row'>
                            <div className='col-lg-5'>
                                <h4 className='section-header mb-3'>GOVERNMENT SNOW SERVICES</h4>
                                <p className='section-p pr-5'>Curabitur lobortis diam aliquet, fermentum ligula eget, egestas nibh. Aenean vitae tincidunt nisi.</p>
                                <p className='section-p pr-5'>Mauris mattis diam eget turpis tincidunt, ut posuere orci suscipit. Aenean sit amet purus a odio luctus varius vitae vel odio. Nullam suscipit euismod elit, ut elementum est vehicula at.</p>
                                <p className='section-p mb-4 pr-5'>Donec nec leo vel augue pretium ultrices id vitae orci. Nulla ac odio eget arcu ullamcorper laoreet.</p>
                                <a className='cta' href='https://tbsnow.herokuapp.com/' target='_blank' rel='noreferrer'>SNOW SERVICES</a>
                            </div>
                            <div className='col-lg-7'>
                                <img className='pt-4' src={snow} alt='Government Snow Services' />
                            </div>
                        </div>
                    </div>
                    <ServiceSlides />
                </div>
                <Capabilities />
                <Footer />
            </Fragment>
        )
    }
}

export default Government;