import React, {Fragment} from 'react';
import Navbar from '../../components/navbar';
import Form from './form';
import Footer from '../../components/footer';
import './style.css';

function Contact() {
    return(
        <Fragment>
            <Navbar />
            <div className='contact-page-wrapper'>
                <div className='overlay'></div>                
                <Form />
            </div>
            <Footer />
        </Fragment>
    )
}

export default Contact;