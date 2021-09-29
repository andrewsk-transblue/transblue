import React, {useState} from 'react';
import Captcha from '../../components/captcha/captcha';
import './contact.css';
import { useEasybase } from 'easybase-react';


const api_key = process.env.REACT_APP_MAILGUN_API;
const domain = 'sandboxcf6c7b2e02cc4d50947369ccf5924304.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

function Contact(props) {
    const { db } = useEasybase();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [disabled, setDisabled] = useState(true);

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

        //sending message to incomingleads@transblue.org
        var data = {
            from: 'test@test.com',
            to: 'carters@transblue.org',
            subject: 'GC Contact Message',
            text: `Name: ${firstName} ${lastName}
                    Email: ${email}
                    Phone: ${phone}
                    Message: ${message}`
        };
        mailgun.messages().send(data, function(error, body) {
            console.log(body)
        })
    }


    return(
        <div className='contact-wrapper'>
            <h1>QUESTIONS?</h1>
            <h3 className='title'>SEND US A MESSAGE</h3>

            <div className='contact-container container'>
                <div className='row'>
                    <div className='contact-info my-auto'>
                        <h3>{props.location.name.toUpperCase()}</h3>
                        <p>{props.location.address1} {props.location.address2}<br />
                        {props.location.city} {props.location.state} {props.location.zipcode}</p>
                        <p>{props.location.email}</p>
                        <p>{props.location.phone}</p>
                    </div>
                    
                        <form className='contact-form' >
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
                                    <button className={!formCompleted ? 'cta disabled' : 'cta'} disabled={disabled} onClick={handleSubmit} data-dismiss='modal' >SUBMIT</button>
                                </div>
                                {/* <div className='row'>
                                    <Captcha onChange={() => setDisabled(false)} />
                                </div> */}
                            </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;