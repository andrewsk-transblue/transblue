import React, {Component, useState} from 'react';
import Captcha from '../captcha/captcha';
import { useEasybase } from 'easybase-react';
import './style.css';

const api_key = process.env.REACT_APP_MAILGUN_API;
const domain = 'sandboxcf6c7b2e02cc4d50947369ccf5924304.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});



function Form(props) {
    const { db } = useEasybase();
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [submitEnabled, setSubmitEnabled] = useState(false)

    function handleSubmit(e) {
        e.preventDefault();
        console.log('testing disabled')
        var data = {
            from: 'test@test.com',
            to: 'carters@transblue.org',
            subject: 'GC Contact Message',
            text: `Name: ${firstName} ${lastName}
                    Email: ${email}
                    Phone: ${phone}
                    Message: ${message}`
        };
        // mailgun.messages().send(data, function(error, body) {
        //     console.log(body)
        // })
        setIsSubmitted(true);

        let dbData = {
            website: 'GC Website',
            name: `${firstName} ${lastName}`,
            email: email,
            phone: phone,
            message: message
        }
        db('CONTACT').insert(dbData).one() 
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