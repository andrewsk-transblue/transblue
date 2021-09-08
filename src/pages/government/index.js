import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/navbar/index';
import Header from '../../components/header';
import Capabilities2 from '../../components/government/capabilities2';
import Carousel from '../../components/carousel';
import Snow from '../../components/snow';
//import LocationsCta from '../../components/locationsCTA';
import ContactCta from '../../components/contactCta';
import Green from '../../components/green';
import Footer from '../../components/footer/index';
import govt from '../../images/government/govtseattle.jpg';
import govtbuilding from '../../images/government/govtbuilding2.jpg';
import asphaltCropped from '../../images/government/govtasphaltCropped.jpg';
import concreteCropped from '../../images/government/govtconcreteCropped.jpeg';
import snow from '../../images/government/govtsnow.jpg';
import Slider from "react-slick";
//import ServiceSlides from '../../components/commercial/serviceSlides/index';
//import Capabilities from '../../components/government/capabilities';
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
                <Header img={govt} title='GOVERNMENT' subtitle='' name='government' />
                {/* <LocationsCta /> */}
                <ContactCta />
                <div className='government-body'>
                    <div className='container-fluid government-about'>
                        <div className='row'>
                            <div className='col-lg-6 order-lg-12'>
                                <img src={govtbuilding} alt='Government Building' />
                            </div>
                            <div className='col-lg-6 order-lg-12 left-text'>
                                <h4 className='section-header'>KEEP YOUR SERVICES RUNNING SMOOTHLY</h4>
                                <p className='section-p'>Transblue is strongly positioned to deliver World Class services to any local or federal government building. We understand the RFP process and the requirements necessary to participate in your initiatives. After all requirements are met, we guarantee we will deliver the services the your team expects.</p>
                                <p className='section-p'>From conception to close out, Transblue is the right fit for your property.</p>
                                <a className='cta' href='/locations'>FIND A LOCATION</a>
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
                    <Green />
                    <Snow
                        img={snow}
                        title='GOVERNMENT SNOW SERVICES'
                        p1='Curabitur lobortis diam aliquet, fermentum ligula eget, egestas nibh. Aenean vitae tincidunt nisi.'
                        p2='Mauris mattis diam eget turpis tincidunt, ut posuere orci suscipit. Aenean sit amet purus a odio luctus varius vitae vel odio. Nullam suscipit euismod elit, ut elementum est vehicula at.'
                        p3='Donec nec leo vel augue pretium ultrices id vitae orci. Nulla ac odio eget arcu ullamcorper laoreet.'
                    />
                    <Carousel />
                    {/* <ServiceSlides /> */}
                </div>
                {/* <Capabilities /> */}
                <Footer />
            </Fragment>
        )
    }
}

export default Government;