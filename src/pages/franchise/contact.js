import React, {useState} from 'react';
import Captcha from '../../components/captcha/captcha';
import './contact.css';
import { useEasybase } from 'easybase-react';

import{ init } from 'emailjs-com';
import * as emailjs from 'emailjs-com'
init("user_iLZ3jXyTzXi5zQFlgf5DG");

function Contact(props) {
    const { db } = useEasybase();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [disabled, setDisabled] = useState(true);
    const [submitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState(false)


    const formCompleted = firstName.length > 0 && lastName.length > 0 && phone.length > 0 && message.length > 0 && !disabled;

    function handleSubmit(e) {
        e.preventDefault();

        //adding message to database
        let dbData = {
            website: 'GC WEBSITE',
            name: `${firstName} ${lastName}`,
            phone: phone,
            email: email,
            message: message
        }
        // db('CONTACT').insert(dbData).one()

        //SEND EMAIL TO INCOMING LEADS USING EMAILJS
        let templateParams = {
            website: 'GC WEBSITE',
            from_name: `${firstName} ${lastName}`,
            to_email: 'carters@transblue.org', //CHANGE TO props.location.email to send to LOCATIONLEADS@TRANSBLUE.ORG
            reply_to: email, //CALL BLUE CAN REPLY TO USER
            phone: phone,
            message: message
        }

        emailjs.send(
        'service_61uwfqo',
        'template_dqy1grk', //CONTACT TEMPLATE
            templateParams,
            process.env.REACT_APP_REACTJS_USER
        )
    }

    return(
        <div className='contact-wrapper bg-light'>
            <h1>HAVE QUESTIONS?</h1>
            <h3 className='title'>SEND US A MESSAGE</h3>

            <div className='contact-container container-fluid'>
                <div className='row'>
                    <div className='contact-info my-auto'>
                        <h4>{props.location.name.toUpperCase()}</h4>
                        <p>{props.location.address1} {props.location.address2}<br />
                        {props.location.city} {props.location.state} {props.location.zipcode}</p>
                        <p>{props.location.email}</p>
                        <p>{props.location.phone}</p>
                    </div>
                    
                    <form className='contact-form' >
                        <h4>{props.location.name.toUpperCase()}</h4>
                        <div className='row'>
                            <div className='col-sm-6 my-1 input-left'>
                                <input placeholder='First Name' id='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>
                            </div>
                            <div className='col-sm-6 my-1 input-right'>
                                <input placeholder='Last Name' id='lastName' value={lastName} onChange={(e) => setLastName(e.target.value)}></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-sm-6 my-2 input-left'>
                                <input placeholder='Email' id='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                            </div>
                            <div className='col-sm-6 my-2 input-right'>
                                <input placeholder='Phone Number' id='phone' value={phone} onChange={(e) => setPhone(e.target.value)}></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-sm-12 px-0 mt-2'>
                                <textarea placeholder='What can we help you with?' id='message' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                            </div>
                        </div>
                        <div className='row'>
                            <button className={!formCompleted ? 'cta disabled' : 'cta'} onClick={handleSubmit} >SUBMIT</button>
                        </div>
                        <div className='row'>
                            {submitted && <div className='submit-alert'>THANK YOU! YOUR MESSAGE HAS BEEN SENT</div>}
                            {/* {error && } */}
                            {error && <div className='error-alert'>OOPS THERE WAS AN ERROR! PLEASE TRY AGAIN</div>}
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
    )
}

export default Contact;