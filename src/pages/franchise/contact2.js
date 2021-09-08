import React, {useState} from 'react';
import Fade from 'react-reveal/Fade';
import Form from './form';
import './contact.css';

function Contact2(props) {
    const [isSent, setIsSent] = useState(false);

    return(
        <div className='contact2-wrapper'>
            {isSent && 
            <div className='alert-wrapper'>
                <Fade>
                    <div className='message-alert'>
                        <div className='close'>
                            <button onClick={() => setIsSent(false)}>X</button>
                        </div>
                        THANK YOU!<br />
                        YOUR MESSAGE HAS BEEN SENT
                    </div>
                </Fade>
            </div>
            }
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" 
                    viewBox="0 0 16 5"  
                    width='100%' height='100%'
                    preserveAspectRatio="xMinYMax meet"
                    >
                    <path d="M 0 2 L 16 0 L 16 5 L 0 5 Z" fill='url(#linear-gradient)' stroke="transparent" strokeWidth=".1"/>
                    <defs>
                    <linearGradient
                        id="linear-gradient"
                        x1="0%" y1="50%" x2="100%" y2="50%"
                    >
                        {/* <stop offset="0%" style={{stopColor:'rgb(0,188,212)', stopOpacity: 1.00}} />
                        <stop offset="70%" style={{stopColor:'rgb(11,86,164)', stopOpacity:1.00}} /> */}

                        <stop offset="0%" style={{stopColor:'rgb(3,169,244)', stopOpacity:1.00}} />
                        <stop offset="47%" style={{stopColor:'rgb(11,86,164)', stopOpacity:1.00}} />
                        <stop offset="100%" style={{stopColor:'rgb(5,39,75)', stopOpacity:1.00}} />
                    </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className='contact-form-info'>
                <h2>GET IN TOUCH.</h2>
                <p className='section-p'>
                    We are happy to provide a complimentary quote or answer any questions you may have.
                </p>
                {/* <p className='section-p'>
                    Send us a message and a representative from our team will be in touch as soon as possible.
                </p> */}
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-6 col-12'>
                            <Form email={props.franchise.email} onSubmit={() => setIsSent(true)} />
                        </div>
                        <div className='d-none d-lg-block col-lg-6 contact-info my-auto'>
                            <h5>{props.franchise.name.toUpperCase()}</h5>
                            <p>
                                {props.franchise.address1}, {props.franchise.address2}<br />
                                {props.franchise.city}, {props.franchise.state} {props.franchise.zipcode}
                            </p>
                            <p>
                                {props.email}<br />
                                {props.phone}
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