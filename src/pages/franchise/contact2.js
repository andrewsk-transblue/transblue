import React from 'react';
import Form from './form';
import './contact.css';

function Contact2(props) {
    return(
        <div className='contact2-wrapper'>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 16" preserveAspectRatio="xMidYMid meet">
                <path d="M 0 5 L 16 3 L 16 8 L 0 8 Z" fill='url(#linear-gradient)' stroke="transparent" stroke-width=".1" />
                <defs>
                <linearGradient
                    id="linear-gradient"
                    x1="0%" y1="50%" x2="100%" y2="50%"
                >
                    <stop offset="0%" style={{stopColor:'rgb(0,188,212)', stopOpacity: 1.00}} />
                    <stop offset="70%" style={{stopColor:'rgb(11,86,164)', stopOpacity:1.00}} />
                </linearGradient>
                </defs>
            </svg>
            <div className='contact-form-info'>
                <h3>GET IN TOUCH.</h3>
                <p className='section-p'>
                    We are happy to provide a complimentary quote or answer any questions you may have.
                </p>
                {/* <p className='section-p'>
                    Send us a message and a representative from our team will be in touch as soon as possible.
                </p> */}
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-6 col-12'>
                            <Form />
                        </div>
                        <div className='col-lg-6 col-12 contact-info my-auto'>
                            <h5>{props.franchise.name.toUpperCase()}</h5>
                            <p>
                                {props.franchise.address1}<br />
                                {props.franchise.address2}
                                {props.franchise.city}, {props.franchise.state} {props.franchise.zipcode}
                            
                            </p>
                            <p>
                                IncomingLeads@Transblue.org<br />
                                (844) 482-2583
                            </p>
                            <span>                    
                                <a href='https://www.linkedin.com/company/transblue-general-contractor'><i className="fab fa-linkedin-in"></i></a>
                                <a href='https://twitter.com/transblue_?lang=en'><i className="fab fa-twitter"></i></a>
                                <a href='https://www.facebook.com/TransblueGC/'><i className="fab fa-facebook-f"></i></a>
                                <a href='https://www.youtube.com/channel/UC72_rqlaYYyqydfycR588hw'><i className="fab fa-youtube-square"></i></a>
                                <a href='https://www.pinterest.com/transbluegc/'><i className="fab fa-pinterest"></i></a>
                                <a href='https://www.instagram.com/transblue_/?hl=en'><i className="fab fa-instagram"></i></a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact2;