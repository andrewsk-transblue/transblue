import React from 'react';
import Form from './form';
import './contact.css';

function Contact2(props) {
    return(
        <div className='contact2-wrapper'>
            {/* <h3>HAVE QUESTIONS?</h3> */}
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-6 col-12 contact-info my-auto'>
                        <h3>GET IN TOUCH.</h3>
                        <p className='section-p'>
                            We are happy to provide a complimentary quote or answer any questions you may have.</p>
                        <p className='section-p'>
                            Send us a message and a representative from our team will be in touch as soon as possible.
                        </p>
                        <p className='section-p'>
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
                    <div className='col-lg-6 col-12'>
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact2;