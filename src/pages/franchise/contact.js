import React from 'react';
import './contact.css';

function Contact(props) {
    return(
        <div className='contact-wrapper'>
            <div className='wrapper'>
                
                <div className='form'>
                <div className='franchise-info'>
                    <h2>CONTACT US</h2>
                    {/* <h3>{props.location.name.toUpperCase()}</h3> */}
                    <br />
                    <p>{props.location.address1} {props.location.address2}<br />
                    {props.location.city} {props.location.state} {props.location.zipcode}</p>
                    <p>{props.location.phone}</p>
                    <p>{props.location.email}</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;