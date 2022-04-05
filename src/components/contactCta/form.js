import React, {useState} from 'react';
import Captcha from '../captcha/captcha';
import './style.css';

// const api_key = process.env.REACT_APP_MAILGUN_API;
// const domain = 'sandboxcf6c7b2e02cc4d50947369ccf5924304.mailgun.org';
// var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

import{ init } from 'emailjs-com';
import * as emailjs from 'emailjs-com'
init("user_iLZ3jXyTzXi5zQFlgf5DG");

// const Captcha = lazy(() => import('../captcha/captcha'))

function Form(props) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submitEnabled, setSubmitEnabled] = useState(false);
    const [zipcode, setZipcode] = useState('');
    const [leadSource, setLeadSource] = useState('')

    function handleSubmit(e) {
        e.preventDefault();

        setIsSubmitted(true);

        //send message to incomingleads@transblue.org or franchises email address
        let to_email;
        props.email ? to_email = props.email : to_email = 'incomingleads@transblue.org';

        let website;
        props.location ? website = `GC Website - ${props.location}` : website = 'GC Website'

        let templateParams = {
            website: website,
            from_name: `${firstName} ${lastName}`,
            to_email: to_email, //CHANGE THIS TO props.email or incoming leads
            reply_to: email,
            phone: phone,
            message: message,
            zipcode: zipcode,
            leadSource: leadSource
        }

        emailjs.send(
        'service_gekurtf',
        'template_dqy1grk', //CONTACT TEMPLATE
            templateParams,
            process.env.REACT_APP_REACTJS_USER
        )
    }

    return(
        <div className='container'>
        {/* <div className='form-header'> */}
            <button onClick={props.onClick} type="button" className="btn-close" aria-label="Close">x</button>
            <h6>SEND US A MESSAGE</h6>
        {/* </div> */}
        <form onSubmit={handleSubmit}>
            <div className='row mx-0'>
                <div className='col-6 pl-0 pr-2'>
                    <input id='firstName' onChange={(e) => setFirstName(e.target.value)} placeholder='First Name' value={firstName} required></input>
                </div>
                <div className='col-6 px-0'>
                    <input id='lastName' onChange={(e) => setLastName(e.target.value)} placeholder='Last Name' value={lastName} required></input>
                </div>
            </div>
            <div className='row mt-2'>
                <div className='col-12'>
                    <input id='zipcode' onChange={(e) => setZipcode(e.target.value)} placeholder='Zipcode' value={zipcode} required></input>
                </div>
            </div>
            <div className='row mt-2'>
                <div className='col-12'>
                    <input id='phone' onChange={(e) => setPhone(e.target.value)} placeholder='Phone' value={phone} required></input>
                </div>
            </div>
            <div className='row mt-2'>
                <div className='col-12'>
                    <input id='email' onChange={(e) => setEmail(e.target.value)} placeholder='Email' value={email} required></input>
                </div>
            </div>
            <div className='row mt-2'>
                <div className='col-12'>
                    <input id='leadSource' onChange={(e) => setLeadSource(e.target.value)} placeholder='How did you hear about us?' value={leadSource} required></input>
                </div>
            </div>
            <div className='row mt-2'>
                <div className='col-12'>
                    <textarea id='message' onChange={(e) => setMessage(e.target.value)} placeholder='Tell us about your project' value={message} required />
                </div>
            </div>
            <div className='row mt-2'>
                <div className='col-12'>
                    <button className={!submitEnabled ? 'disabled' : ''} disabled={!submitEnabled} type='submit' id='send'>SUBMIT</button>
                    {!isSubmitted && <Captcha onChange={() => setSubmitEnabled(true)} />}
                </div>
            </div>
            {isSubmitted && <div className='row submitted'>
                <div className='col-12'>
                Thank you! We will contact you shortly
                </div>
            </div>}
        </form>
    </div>
    )
}

export default Form;