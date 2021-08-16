import React, {Component} from 'react';
import AutoComplete from "react-google-autocomplete";
import collapse from '../../images/collapse30.png';
import './style.css';

class Footer extends Component {
    constructor() {
        super();
        this.state = {
            location: '',
            displayServices: false,
            displaySnow: false,
            displayEV: false
        }
    }

    onChange = (e) => {
        this.setState({zipcode: e.target.value})
        console.log(this.state.zipcode)
    }

    setLocation = (location) => {
        this.setState({
            location: location.place_id
        })
    }

    displayServices = () => {
        this.setState({displayServices: !this.state.displayServices})
    }

    displaySnow = () => {
        this.setState({displaySnow: !this.state.displaySnow})
    }

    displayEV = () => {
        this.setState({displayEV: !this.state.displayEV})
    }

    scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    render() {
        //console.log(this.props)
        return(
            <div className='footer-container container-fluid w-100'>
                <div className='row mx-0 back-to-top'>
                    <div className='col-lg-12'>
                        <button onClick={this.scrollToTop}><img src={collapse} alt='back to top' /></button>
                    </div>
                </div>
                <div className='row mx-0'>
                    <div className='footer-services d-none d-md-block col-lg-2 col-md-3'>
                        <h1>GENERAL</h1>
                        <div className='footer-services-list'>
                            <a href='/residential'>Residential</a> <br />
                            <a href='/commercial'>Commercial</a><br />
                            <a href='/multifamily'>Multifamily</a><br />
                            <a href='/government'>Government</a><br />
                            {/* <a href='https://tbsnow.herokuapp.com/' target='_blank' rel='noreferrer'>Snow</a><br />
                            <a href='https://tbev.herokuapp.com/' target='_blank' rel='noreferrer'>Electric Vehicles</a><br /> */}
                        </div>
                    </div>
                    <div className='footer-services d-none d-md-block col-lg-2 col-md-3'>
                        <h1>SNOW SERVICES</h1>
                        <div className='footer-services-list'>
                            <a href='/residential'>About</a> <br />
                            <a href='/commercial'>How We Operate</a><br />
                            <a href='/multifamily'>Our Software</a><br />
                            <a href='/government'>Gallery</a><br />
                            <a href='https://tbsnow.herokuapp.com/' target='_blank' rel='noreferrer'>FAQ</a><br />
                            <a href='https://tbev.herokuapp.com/' target='_blank' rel='noreferrer'>Pricing</a><br />
                        </div>
                    </div>
                    <div className='footer-services d-none d-md-block col-lg-2 col-md-3'>
                        <h1>GREEN SERVICES</h1>
                        <div className='footer-services-list'>
                            <a href='/residential'>About</a> <br />
                            <a href='/commercial'>Residential</a><br />
                            <a href='/multifamily'>Commercial</a><br />
                            <a href='/government'>Multifamily</a><br />
                            {/* <a href='https://tbsnow.herokuapp.com/' target='_blank' rel='noreferrer'>FAQ</a><br />
                            <a href='https://tbev.herokuapp.com/' target='_blank' rel='noreferrer'>Pricing</a><br /> */}
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
                    {!this.props.locationPage && <div className='col-lg-3 col-md-12 d-none d-md-block find-location px-0'>
                        <p className='mb-2'>FIND A LOCATION</p>
                        <p className='text-secondary mb-4'>Enter a location to find the nearest Transblue</p>
                        <span>
                            <AutoComplete
                                apiKey='AIzaSyAC_A-wjPLaf2_VKJQqetSY08bxsvLsUk4'
                                onPlaceSelected={(location) => this.setLocation(location)}
                            />
                            <a href={`/locations/${this.state.location}`} ><i className='fas fa-search'></i></a>
                        </span>
                    </div>}
                    {this.props.franchise && <div className='col-lg-3 col-md-6 d-none d-md-block footer-contact'>
                        <h1>CONTACT INFO</h1>
                        <p className='my-0'>{this.props.location.address1}<br />
                        {this.props.location.address2}<br />
                        {this.props.location.city} {this.props.location.state}, {this.props.location.zipcode}<br /></p>
                        <p className='mt-2'>{this.props.location.phone}</p>
                    </div>}
                </div>
                <div className='row mx-0 small-screen-services'>
                    <div className='col-sm-12 d-block d-md-none'>
                        <button onClick={this.displayServices}>GENERAL SERVICES <i className="fas fa-angle-down"></i></button>
                        {this.state.displayServices && 
                            <div>
                                <a href='/residential'>Residential</a><br />
                                <a href='/commercial'>Commercial</a><br />
                                <a href='/multifamily'>Multifamily</a><br />
                                <a href='/government'>Government</a><br />
                                {/* <a href='https://tbsnow.herokuapp.com/' target='_blank' rel='noreferrer'>Snow</a><br />
                                <a href='https://tbev.herokuapp.com/' target='_blank' rel='noreferrer'>Electric Vehicles</a><br /> */}
                                <hr />
                            </div>
                        }
                        <button onClick={this.displaySnow}>SNOW SERVICES <i className="fas fa-angle-down"></i></button>
                        {this.state.displaySnow && 
                            <div>
                                <a href='/residential'>About</a><br />
                                <a href='/commercial'>How We Operate</a><br />
                                <a href='/multifamily'>Our Software</a><br />
                                <a href='/government'>Emergency &amp; Risk</a><br />
                                <a href='/government'>Pricing</a><br />
                                <a href='/government'>Gallery</a><br />
                                <a href='/government'>FAQ</a><br />
                                <hr />
                            </div>
                        }
                        <button onClick={this.displayEV}>GREEN SERVICES <i className="fas fa-angle-down"></i></button>
                        {this.state.displayEV && 
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
                            <span><input placeholder='SEARCH CITY OR ZIPCODE' /><i className='fas fa-search'></i></span>
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
}

export default Footer;