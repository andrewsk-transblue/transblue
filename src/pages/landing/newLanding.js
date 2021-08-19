import React, {Fragment} from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/navbar/index';
import Header from '../../components/landing/header';
import NewReviews from '../../components/landing/newReviews/newReviews';
import Services from '../../components/landing/services/index';
import Footer from '../../components/footer';
import Mbridge from '../../components/landing/mbridge';
// import Nepal from '../../components/landing/nepal';
import Mission from '../../components/landing/mission';
// import Here from '../../components/landing/here';
import Core from '../../components/landing/core';
import Core2 from '../../components/landing/core2';
import LocationsCta from '../../components/locationsCTA';
import ContactCta from '../../components/contactCta';
import banner from '../../images/newLanding/banner.png';
import './style.css';

function NewLanding() {

    return(
        <Fragment>
            <Helmet>
                <title>Transblue GC</title>
                <meta name="description" content="Transblue Commercial Services" />
            </Helmet>
            <Navbar page='HOME' />
            <Header />
            <ContactCta />
            {/* <LocationsCta /> */}
            <div className='landing-body'>
                <div className='container-fluid w-100 who-is-tb text-center'>
                    {/* <div className='row'>
                        <div className='col-lg-3 col-md-12 col-sm-12 col-lg-3 entry'>
                            <small>TRANSBLUE IS</small>
                            <p>QUALITY OF LIFE</p>
                            <span className='ellipsis'></span>
                            <p>Landscapes aren't just backyards. They are birthday parties, holidays, celebrations with family and friends</p>
                        </div>
                        <div className='col-lg-3 col-md-12 col-sm-12 col-lg-3 entry'>
                            <small>TRANSBLUE IS</small>
                            <p>SAFTER WINTERS</p>
                            <p>Quality snow services that keep your clients safe and your doors open for business</p>
                        </div>
                        <div className='col-lg-3 col-md-12 col-sm-12 col-lg-3 entry'>
                            <small>TRANSBLUE IS</small>
                            <p>LANDSCAPE DESIGN</p>
                            <p>Landscape designs enhance your property and increase your home's value</p>
                        </div>
                        <div className='col-lg-3 col-md-12 col-sm-12 col-lg-3 entry'>
                            <small>TRANSBLUE IS</small>
                            <p>PAVING SERVICES</p>
                            <p>Paving services that enhance your curb appeal and increase the value of your investment</p>
                        </div>
                    </div> */}
                    <img src={banner} alt='' />
                </div>

                <Mbridge />
                {/* <Nepal /> */}
                
                <div className='container-fluid video-wrapper'>
                    <div className='row mx-0'>
                        <div className='col-lg-7 col-12'>
                            <div className='video'></div>
                        </div>
                        <div className='col-lg-5 col-12 video-text'>
                            <h4 className='section-header'>HEADER ABOUT THE VIDEO</h4>
                            <p className='section-p'>Donec id dictum lorem, id sagittis arcu. Vivamus quis convallis sem. In dictum orci at blandit tincidunt.</p>
                            <p className='section-p'>Donec nec leo vel augue pretium ultrices id vitae orci. Aenean sit amet purus a odio luctus varius vitae vel odio. Nulla ac odio eget arcu ullamcorper laoreet.Aenean vitae tincidunt nisi.</p>
                            <p className='section-p mb-4'>Luctus sit amet lectus. Mauris mattis diam eget turpis tincidunt, ut posuere orci suscipit.  Nullam suscipit euismod elit, ut elementum est vehicula at. </p>
                        </div>

                    </div>
                </div>
                <Mission />
                {/* <Here /> */}
                <Core />
                <Core2 />
                <NewReviews />
                <Services />
                <Footer locationPage={false} />
            </div>
        </Fragment>
    )
}

export default NewLanding;