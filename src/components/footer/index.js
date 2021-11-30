import React from 'react';
import collapse from '../../images/collapse30.png';
import './style.css';

function Footer() {
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

            <span className='contact'>
                <a href='tel:+8444822583'><i className='fas fa-phone'></i> (844) 482-2583</a>
                <a href='mailto:inquiries@transblue.com'><i className='fas fa-envelope'></i> inquiries@transblue.com</a>
            </span>

            <span className='links'>
                <a href='/'>HOME</a>
                <a href='http://snow.transblue.com/'>SNOW SERVICES</a>
                <a href='http://green.transblue.com/'>GREEN SERVICES</a>
                {/* <br /> */}
                <a href='/blog'>BLOG</a>
                <a href='/locations'>LOCATIONS</a>
                {/* <a href='/'>FRANCHISE</a> */}
            </span>
            
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
                    <a href='/privacy'>PRIVACY POLICY</a>
                </span>
            </div>
        </div>
    )
}

export default Footer;