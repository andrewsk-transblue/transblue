import { useEasybase } from 'easybase-react';
import React, {useState, lazy} from 'react';
import './style.css';

import{ init } from 'emailjs-com';
import * as emailjs from 'emailjs-com'
init("user_iLZ3jXyTzXi5zQFlgf5DG");

const Captcha = lazy(() => import('../../components/captcha/captcha'))

function Form() {
    const { db } = useEasybase();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [disabled, setDisabled] = useState(true)
    //const [disabled, setDisabled] = useState(true);

    const formCompleted = firstName.length > 0 && lastName.length > 0 && phone.length > 0 && message.length > 0;

    function handleSubmit(e) {
        e.preventDefault();
        console.log('submit')

        //adding message to database
        let dbData = {
            website: 'GC WEBSITE',
            name: `${firstName} ${lastName}`,
            phone: phone,
            email: email,
            message: message
        }
        db('CONTACT').insert(dbData).one()

        //SEND MESSAGE TO INCOMINGLEADS USING EMAILJS
        let templateParams = {
            website: 'GC WEBSITE',
            from_name: `${firstName} ${lastName}`,
            to_email: 'carters@transblue.org', //CHANGE THIS TO INCOMINGLEADS@TRANSBLUE.ORG
            reply_to: email,
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
        <form className='contact-page-form container-fluid' >
            <h2>HAVE ANY QUESTIONS?</h2>
            <p className='title'>Feel free to leave us a message below</p>
            <div className='row'>
                <div className='col-sm-6 my-1 input-left'>
                    <input placeholder='First Name' id='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value)} required></input>
                </div>
                <div className='col-sm-6 my-1 input-right'>
                    <input placeholder='Last Name' id='lastName' value={lastName} onChange={(e) => setLastName(e.target.value)} required></input>
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-6 my-2 input-left'>
                    <input placeholder='Email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                </div>
                <div className='col-sm-6 my-2 input-right'>
                    <input placeholder='Phone Number' id='phone' value={phone} onChange={(e) => setPhone(e.target.value)} required></input>
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-12 px-0 mt-2'>
                    <textarea placeholder='What can we help you with?' id='message' value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                </div>
            </div>
            <div className='row'>
                {!disabled && <button onClick={handleSubmit} data-dismiss='modal' >SEND MESSAGE</button>}
                {(disabled && formCompleted) && <Captcha onChange={() => setDisabled(false)} />}
            </div>

        </form>
    )
}

export default Form;