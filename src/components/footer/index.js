import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import AutoComplete from "react-google-autocomplete";
import collapse from '../../images/collapse30.png';
import './style.css';

function Footer(props) {

    const [displayServices, setDisplayServices] = useState(false);
    const [displaySnow, setDisplaySnow] = useState(false);
    const [displayEV, setDisplayEV] = useState(false);
    const [location, setLocation] = useState('')

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return(
        <div className='footer-container container-fluid w-100'>
            <div className='row mx-0 back-to-top'>
                <div className='col-lg-12'>
                    <button onClick={scrollToTop}><img src={collapse} alt='back to top' /></button>
                </div>
            </div>
            <div className='row mx-0'>
                <div className='footer-services d-none d-md-block col-lg-2 col-md-3'>
                    <h1>GENERAL</h1>
                    <div className='footer-services-list'>
                        <Link to='/residential'>Residential</Link> <br />
                        <Link to='/commercial'>Commercial</Link><br />
                        <Link to='/multifamily'>Multifamily</Link><br />
                        <Link to='/government'>Government</Link><br />
                        {/* <a href='https://tbsnow.herokuapp.com/' target='_blank' rel='noreferrer'>Snow</a><br />
                        <a href='https://tbev.herokuapp.com/' target='_blank' rel='noreferrer'>Electric Vehicles</a><br /> */}
                    </div>
                </div>
                <div className='footer-services d-none d-md-block col-lg-2 col-md-3'>
                    <h1>SNOW SERVICES</h1>
                    <div className='footer-services-list'>
                        <a href='https://tbsnow.herokuapp.com/'>About</a> <br />
                        <a href='https://tbsnow.herokuapp.com/operate'>How We Operate</a><br />
                        <a href='https://tbsnow.herokuapp.com/software'>Our Software</a><br />
                        <a href='https://tbsnow.herokuapp.com/gallery'>Gallery</a><br />
                        <a href='https://tbsnow.herokuapp.com/faq' target='_blank' rel='noreferrer'>FAQ</a><br />
                        <a href='https://tbev.herokuapp.com/pricing' target='_blank' rel='noreferrer'>Pricing</a><br />
                    </div>
                </div>
                <div className='footer-services d-none d-md-block col-lg-2 col-md-3'>
                    <h1>GREEN SERVICES</h1>
                    <div className='footer-services-list'>
                        <a href='/residential'>About</a> <br />
                        <a href='/commercial'>Residential</a><br />
                        <a href='/multifamily'>Commercial</a><br />
                        <a href='/government'>Multifamily</a><br />
                    </div>
                </div>
                <div className='footer-services d-none d-md-block col-lg-2 col-md-3'>
                    <h1>OTHER</h1>
                    <div className='footer-services-list'>
                        <a href='/'>Home</a> <br />
                        <a href='/featured'>Featured Projects</a><br />
                        <a href='#'>Blog</a><br />
                        <a href='#'>Franchise</a><br />
                    </div>
                </div>
                {!props.locationPage && <div className='col-lg-3 col-md-12 d-none d-md-block find-location px-0'>
                    <p className='mb-2'>FIND A LOCATION</p>
                    <p className='text-secondary mb-4'>Enter a location to find the nearest Transblue</p>
                    <span>
                        <AutoComplete
                            apiKey='AIzaSyAC_A-wjPLaf2_VKJQqetSY08bxsvLsUk4'
                            onPlaceSelected={(location) => setLocation(location.place_id)}
                        />
                        <a href={`/locations/${location}`} ><i className='fas fa-search'></i></a>
                    </span>
                </div>}
                {props.franchise && <div className='col-lg-3 col-md-6 d-none d-md-block footer-contact'>
                    <h1>CONTACT INFO</h1>
                    <p className='my-0'>{props.location.address1}<br />
                    {props.location.address2}<br />
                    {props.location.city} {props.location.state}, {props.location.zipcode}<br /></p>
                    <p className='mt-2'>{props.location.phone}</p>
                </div>}
            </div>
            <div className='row mx-0 small-screen-services'>
                <div className='col-sm-12 d-block d-md-none'>
                    <button onClick={() => setDisplayServices(!displayServices)}>GENERAL SERVICES <i className="fas fa-angle-down"></i></button>
                    {displayServices && 
                        <div>
                            <a href='/residential'>Residential</a><br />
                            <a href='/commercial'>Commercial</a><br />
                            <a href='/multifamily'>Multifamily</a><br />
                            <a href='/government'>Government</a><br />
                            <hr />
                        </div>
                    }
                    <button onClick={() => setDisplaySnow(!displaySnow)}>SNOW SERVICES <i className="fas fa-angle-down"></i></button>
                    {displaySnow && 
                        <div>
                            <a href='https://tbsnow.herokuapp.com/'>About</a><br />
                            <a href='https://tbsnow.herokuapp.com/operate'>How We Operate</a><br />
                            <a href='https://tbsnow.herokuapp.com/software'>Our Software</a><br />
                            <a href='https://tbsnow.herokuapp.com/emergency'>Emergency &amp; Risk</a><br />
                            <a href='https://tbsnow.herokuapp.com/pricing'>Pricing</a><br />
                            <a href='https://tbsnow.herokuapp.com/gallery'>Gallery</a><br />
                            <a href='https://tbsnow.herokuapp.com/faq'>FAQ</a><br />
                            <hr />
                        </div>
                    }
                    <button onClick={() => setDisplayEV(!displayEV)}>GREEN SERVICES <i className="fas fa-angle-down"></i></button>
                    {displayEV && 
                        <div>
                            <a href='/residential'>About</a><br />
                            <a href='/commercial'>Residential</a><br />
                            <a href='/multifamily'>Commercial</a><br />
                            <a href='/government'>Multifamily</a><br />
                            <hr />
                        </div>
                    }
                    <div className='others'>
                        <div><a href='/'>HOME</a><br /></div>
                        <div><a href='/featured'>FEATURED PROJECTS</a><br /></div>
                        <div><a href='/blog'>BLOG</a><br /></div>
                        <div><a href='/franchise'>FRANCHISE</a><br /></div>
                    </div>
                    <div className='find-location'>
                        <p className='mb-2'>FIND A LOCATION</p>
                        <p className='text-secondary mb-4'>Enter a location to find the nearest Transblue</p>
                        <span>
                            <AutoComplete
                                apiKey='AIzaSyAC_A-wjPLaf2_VKJQqetSY08bxsvLsUk4'
                                onPlaceSelected={(location) => setLocation(location.place_id)}
                            />
                            <a href={`/locations/${location}`} ><i className='fas fa-search'></i></a>
                        </span>
                    </div>
                </div>
            </div>
            
            <div className='social-media'>
                <span>
                    <a href='https://www.linkedin.com/company/transblue-general-contractor'><i className="fab fa-linkedin-in"></i></a>
                    <a href='https://twitter.com/transblue_?lang=en'><i className="fab fa-twitter"></i></a>
                    <a href='https://www.facebook.com/TransblueGC/'><i className="fab fa-facebook-f"></i></a>
                    <a href='https://www.youtube.com/channel/UC72_rqlaYYyqydfycR588hw'><i className="fab fa-youtube-square"></i></a>
                    <a href='https://www.pinterest.com/transbluegc/'><i className="fab fa-pinterest"></i></a>
                    <a href='https://www.instagram.com/transblue_/?hl=en'><i className="fab fa-instagram"></i></a>
                </span>
            </div>

            <div className='terms'>
                <span>
                    <a href='/privacy'>Privacy Policy</a>
                </span>
            </div>
        </div>
    )
}

export default Footer;