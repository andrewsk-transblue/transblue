import React from 'react';
import './contact.css';

function Form() {
    return(
        <div className='form-wrapper'>
            <span>
                <input className='left-input' placeholder='First Name' />
                <input className='right-input' placeholder='Last Name' />
            </span>
            <span>
                <input className='left-input' placeholder='Email'></input>
                <input className='right-input' placeholder='Phone Number'></input>
            </span>
            <span>
                <textarea placeholder='Tell us about your project'></textarea>
            </span>
            <button>SEND MESSAGE</button>
        </div>
    )
}

export default Form;